import axios from 'axios';

const API_ENDPOINT = 'https://boutiquehotel.helmuthlammer.at/api/v1/room/{roomId}/from/{fromdate}/to/{todate}';

const checkAvailability = async (checkInDate, checkOutDate, roomCategory) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/availability`, {
      params: {
        from: checkInDate,
        to: checkOutDate,
        category: roomCategory,
        
      },
    });

    // Aktualisiere den Store mit den erhaltenen Daten
    useAvailabilityStore.setAvailabilityData(response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error checking availability:', error);
    throw new Error('Availability check failed');
  }
};

export default checkAvailability;
