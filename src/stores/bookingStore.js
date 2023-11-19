import { defineStore } from 'pinia';
import { bookRoom } from '@/api/roomService';

export const useBookingStore = defineStore('bookingStore', {
    state: () => ({
        bookingResult: null, // Speichert das Ergebnis der Buchung
    }),
    actions: {
        async makeBooking(roomId, fromDate, toDate, bookingData) {
            try {
                const result = await bookRoom(roomId, fromDate, toDate, bookingData);
                this.bookingResult = result;
                return result;
            } catch (error) {
                console.error('Error booking room:', error);
                throw error;
            }
        }
    }
});