import { defineStore } from 'pinia';
import {getAvailableRoom} from '@/api/roomAvailabilityService';

export const useAvailableRoomStore = defineStore('availableRoomStore', {
    state: () => ({
        availableRoom: null
    }),
    actions: {
        async fetchAvailableRoom(roomId, startDate, endDate) {
            try {
                this.availableRoom = await getAvailableRoom(roomId, startDate, endDate);
                console.log(this.availableRoom);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        }
    }
});