#include <PDM.h>
#include <ArduinoJson.h>

// RMS = root mean square

/x/ Buffer to read samples into, each sample is 16-bits
short sampleBuffer[256];

// Number of samples read
volatile int samplesRead;

// Variables for dB calculation
const float ZERO_DBSPL = 0.00002; // 20 μPa reference
float dbLevel = 0.0;
float rms = 0.0;

// JSON configuration
#define MAX_READINGS 20
StaticJsonDocument<4096> jsonDoc;
JsonArray readings = jsonDoc.createNestedArray("readings");

// Timer for updates
unsigned long previousMillis = 0;
const long interval = 1000;  // Update every second

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // Initialize PDM
  PDM.onReceive(onPDMdata);

  // Initialize PDM with:
  // - one channel (mono mode)
  // - 16 kHz sample rate
  if (!PDM.begin(1, 16000)) {
    Serial.println("Failed to start PDM!");
    while (1);
  }
  // 1

  // Initialize JSON document
  jsonDoc["device"] = "Safe Sounds";
  jsonDoc["version"] = "1.0";

  Serial.println("Safe Sounds analysis");
}

void loop() {
  unsigned long currentMillis = millis();

  // If enough time has passed, calculate and store a new reading
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    if (samplesRead) {
      // Calculate dB level
      calculateDB();
      // Store and display reading
      storeReading();
      // Reset samples read
      samplesRead = 0;
    }
  }
}

// Callback function for PDM data
void onPDMdata() {
  // Read into buffer
  int bytesAvailable = PDM.available();
  PDM.read(sampleBuffer, bytesAvailable);
  samplesRead = bytesAvailable / 2; // 16-bit samples
}

void calculateDB() {
  // Calculate RMS of audio samples
  float sum = 0;
  for (int i = 0; i < samplesRead; i++) {
    sum += pow(sampleBuffer[i], 2);
  }
  rms = sqrt(sum / samplesRead);
  // RMS = Sum / sample rate
  // RMS = root mean square


  // Convert RMS to dB
  // Note: This needs calibration for accurate dB SPL measurements
  // simplified calculation for demonstration
  // its not absoulte until i get all the math figured out
  if (rms > 0) {
    dbLevel = 20 * log10(rms / (ZERO_DBSPL * 32767)); // Normalized to 16-bit range
  }
  // equation used to find the Descibel rate from the root mean square

  // Rounding range
  dbLevel = constrain(dbLevel, 0, 120);
}

void storeReading() {
  // Create a new reading
  JsonObject reading = readings.createNestedObject();
  reading["timestamp"] = millis();
  reading["db"] = dbLevel;
  reading["rms"] = rms;

  // Remove oldest reading if we've reached the maximum
  if (readings.size() > MAX_READINGS) {
    // Remove the first element
    for (size_t i = 0; i < readings.size() - 1; i++) {
      readings[i] = readings[i + 1];
    }
    readings.remove(readings.size() - 1);
  }

  Serial.print("Time: ");
  Serial.print(millis());
  Serial.print("ms, Sound Level: ");
  Serial.print(dbLevel);
  Serial.print(" dB, RMS: ");
  Serial.println(rms);

  static int readingCount = 0;
  readingCount++;
  if (readingCount >= 10) {
    readingCount = 0;
    Serial.println("\n JSON data to be logged:");
    serializeJsonPretty(jsonDoc, Serial);
    Serial.println("\n");
  }
}