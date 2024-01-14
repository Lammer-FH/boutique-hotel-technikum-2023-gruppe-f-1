import { defineStore } from 'pinia';
import { bookRoom } from '@/api/roomService';

export const useBookingStore = defineStore('bookingStore', {
    state: () => ({
        bookingResult: null, // Speichert das Ergebnis der Buchung
        bookingDetails: null, // Speichert die Details der Buchung
        fromDate: null,
        toDate: null,
        roomId: null
    }),
    actions: {
        async makeBooking(roomId, fromDate, toDate, bookingData) {
            try {

                const result = await bookRoom(roomId, fromDate, toDate, bookingData);
                this.bookingResult = result;    // Speichern des Ergebnisses im Store
                this.bookingDetails = bookingData; // Speichern der Buchungsdetails im Store
                this.fromDate = fromDate;
                this.toDate = toDate;
                this.roomId = roomId;
                return result;
            } catch (error) {
                console.error('Error booking room:', error);
                throw error;
            }
        }
    }
});