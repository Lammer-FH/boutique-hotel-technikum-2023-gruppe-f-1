import axios from 'axios';

const API_BASE_URL = 'https://boutique-hotel.helmuth-lammer.at/api/v1';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
