import { defineStore } from 'pinia';
import { getAllRooms } from '@/api/roomService';

export const useRoomStore = defineStore('roomStore', {
    state: () => ({
        rooms: []
    }),
    actions: {
        async fetchRooms() {
            try {
                this.rooms = await getAllRooms();
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        }
    }
});