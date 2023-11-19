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
        // Logge und werfe einen Fehler im Falle eines Fehlschlags
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

export const bookRoom = async (roomId, fromDate, toDate, bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/room/${roomId}/from/${fromDate}/to/${toDate}`, bookingData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error booking room:', error);
        throw error;
    }
};
