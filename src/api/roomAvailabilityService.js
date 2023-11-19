import axios from 'axios';

const API_BASE_URL = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

export const getAvailableRoom = async (roomId, startDate, endDate) => {
    try {
        // Führe die GET-Anfrage aus
        const response = await axios.get(`${API_BASE_URL}/room/${roomId}/from/${startDate}/to/${endDate}`);

        // Gib die Daten zurück
        console.log(response.data);
        return response.data;

    } catch (error) {
        // Logge und werfe einen Fehler im Falle eines Fehlschlags
        console.error('Error fetching rooms:', error);
        throw error;
    }
};