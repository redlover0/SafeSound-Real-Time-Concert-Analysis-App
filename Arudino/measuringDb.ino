#include <PDM.h>
#include <ArduinoJson.h>
#include <math.h>

// 📦 Buffer to read samples into, each sample is 16-bits
short sampleBuffer[256];

// 📈 Number of samples read
volatile int samplesRead;

// ⚙️ Constants
const float ZERO_DBSPL = 0.00002;  // 20 μPa reference
const float DETECTION_THRESHOLD_RMS = 500.0;  // adjust this based on calibration

// 🔊 Current decibel and RMS values
float dbLevel = 0.0;
float rms = 0.0;

// 📊 JSON data configuration
#define MAX_READINGS 30
StaticJsonDocument<4096> jsonDoc;
JsonArray readings = jsonDoc.createNestedArray("readings");

// ⏲️ Timer interval
unsigned long previousMillis = 0;
const long interval = 1000;  // Update every second

// 🟢 Setup
void setup() {
  Serial.begin(9600);
  while (!Serial);

  // 🎤 Initialize microphone
  PDM.onReceive(onPDMdata);
  if (!PDM.begin(1, 16000)) {
    Serial.println("Failed to start PDM!");
    while (1);
  }

  // 📄 Metadata
  jsonDoc["device"] = "Safe Sounds System";
  jsonDoc["version"] = "1.0";
  Serial.println("📟 Safe Sounds Threshold Detection");
}

// 🔁 Main loop
void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    if (samplesRead) {
      calculateDB();
      storeReading();
      samplesRead = 0;
    }
  }
}

// 🎧 Microphone callback
void onPDMdata() {
  int bytesAvailable = PDM.available();
  PDM.read(sampleBuffer, bytesAvailable);
  samplesRead = bytesAvailable / 2;
}

// 📐 dB and RMS calculation
void calculateDB() {
  float sum = 0;
  for (int i = 0; i < samplesRead; i++) {
    sum += pow(sampleBuffer[i], 2);
  }
  rms = sqrt(sum / samplesRead);

  if (rms > 0) {
    dbLevel = 20 * log10(rms / (ZERO_DBSPL * 32767));
  }

  dbLevel = constrain(dbLevel, 0, 120);
}

// 🧠
