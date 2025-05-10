import * as db from './index';

export function fetchSystemData() {
    return db.query('SELECT * FROM system_noise'
    );
}

export function fetchSystemDataById(id) {
    return db.query('SELECT * FROM system_noise WHERE id = $1', [id]
    );
}

export function fetchSystemDataByDate(date) {
    return db.query('SELECT * FROM system_noise WHERE date = $1', [date]
    );
}

export function fetchSystemDataByDateAndTime(date, time) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2', [date, time]
    );
}

export function fetchSystemDataByDateAndTimeAndLocation(date, time, location) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3', [date, time, location]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtist(date, time, location, artist) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4', [date, time, location, artist]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenre(date, time, location, artist, genre) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5', [date, time, location, artist, genre]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMood(date, time, location, artist, genre, mood) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6', [date, time, location, artist, genre, mood]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKey(date, time, location, artist, genre, mood, key) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7', [date, time, location, artist, genre, mood, key]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempo(date, time, location, artist, genre, mood, key, tempo) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8', [date, time, location, artist, genre, mood, key, tempo]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudness(date, time, location, artist, genre, mood, key, tempo, loudness) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9', [date, time, location, artist, genre, mood, key, tempo, loudness]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndMode(date, time, location, artist, genre, mood, key, tempo, loudness, mode) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10', [date, time, location, artist, genre, mood, key, tempo, loudness, mode]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignature(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignature(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignatureAndTimeAdjustment(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12 AND time_adjustment = $13', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignatureAndTimeAdjustmentAndTimeSignatureAdjustment(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12 AND time_adjustment = $13 AND time_signature_adjustment = $14', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignatureAndTimeAdjustmentAndTimeSignatureAdjustmentAndKeySignatureAdjustment(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12 AND time_adjustment = $13 AND time_signature_adjustment = $14 AND key_signature_adjustment = $15', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignatureAndTimeAdjustmentAndTimeSignatureAdjustmentAndKeySignatureAdjustmentAndTimeSignatureAdjustmentAdjustment(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment, timeSignatureAdjustmentAdjustment) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12 AND time_adjustment = $13 AND time_signature_adjustment = $14 AND key_signature_adjustment = $15 AND time_signature_adjustment_adjustment = $16', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment, timeSignatureAdjustmentAdjustment]
    );
}

export function fetchSystemDataByDateAndTimeAndLocationAndArtistAndGenreAndMoodAndKeyAndTempoAndLoudnessAndModeAndTimeSignatureAndKeySignatureAndTimeAdjustmentAndTimeSignatureAdjustmentAndKeySignatureAdjustmentAndTimeSignatureAdjustmentAdjustmentAndKeySignatureAdjustmentAdjustment(date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment, timeSignatureAdjustmentAdjustment, keySignatureAdjustmentAdjustment) {
    return db.query('SELECT * FROM system_noise WHERE date = $1 AND time = $2 AND location = $3 AND artist = $4 AND genre = $5 AND mood = $6 AND key = $7 AND tempo = $8 AND loudness = $9 AND mode = $10 AND time_signature = $11 AND key_signature = $12 AND time_adjustment = $13 AND time_signature_adjustment = $14 AND key_signature_adjustment = $15 AND time_signature_adjustment_adjustment = $16 AND key_signature_adjustment_adjustment = $17', [date, time, location, artist, genre, mood, key, tempo, loudness, mode, timeSignature, keySignature, timeAdjustment, timeSignatureAdjustment, keySignatureAdjustment, timeSignatureAdjustmentAdjustment, keySignatureAdjustmentAdjustment]
    );
}