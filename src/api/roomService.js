import axios from 'axios';

// Definiere die Basis-URL der API
const API_BASE_URL = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

// Async-Funktion, um alle Zimmer abzurufen
export const getAllRooms = async () => {
    try {
        // Führe die GET-Anfrage aus
        const response = await axios.get(`${API_BASE_URL}/rooms`);

        // Gib die Daten zurück
        return response.data;
    } catch (error) {
        // Logge und werfe einen Fehler im Falle eines Fehlerschlags
        console.error('Error fetching rooms:', error);
        throw error;
    }
};
