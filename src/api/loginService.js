import axios from 'axios';

const API_BASE_URL = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

export const login = async (clientId, secret) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            clientId,
            secret
        });
        return response.data; // Der JWT wird zurückgegeben
    } catch (error) {
        console.error('Login fehlgeschlagen:', error);
        throw error;
    }
};
