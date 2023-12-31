import { defineStore } from 'pinia';
import { getAllRooms } from '@/api/roomService';

export const useRoomStore = defineStore('roomStore', {
    state: () => ({
        rooms: [],
        selectedStartDate: null,
        selectedEndDate: null
    }),
    actions: {
        setSelectedDates(startDate, endDate) {
            this.selectedStartDate = startDate;
            this.selectedEndDate = endDate;
        },
        async fetchRooms() {
            try {
                this.rooms = await getAllRooms();
                console.log(this.rooms);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        }
    }
});