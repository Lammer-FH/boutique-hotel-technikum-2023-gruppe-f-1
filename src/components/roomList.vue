<script>
import { defineComponent } from 'vue';
import RoomCard from './RoomCard.vue'; // Stelle sicher, dass dieser Pfad korrekt ist
import {useRoomStore} from "@/stores/roomsStore"; // Stelle sicher, dass dieser Pfad korrekt ist


export default defineComponent({
  name: "RoomList",
  components: {
    RoomCard
  },
    data: () => {
    return{
      roomsStore: useRoomStore(),
      currentPage: 1,
      limit: 5
    }
    },

  computed: {
    totalPages() {
      return Math.ceil(this.roomsStore.rooms.length / this.limit);
    },
    startIndex() {
      return (this.currentPage - 1) * this.limit;
    },
    endIndex() {
      return this.currentPage * this.limit;
    },
    paginatedRooms() {
      return this.roomsStore.rooms.slice(this.startIndex, this.endIndex);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
  mounted() {
    if (this.roomsStore.rooms.length === 0) {
      this.roomsStore.fetchRooms();
    }
  },
});
</script>

<template>
  <b-card-group deck>
    <room-card v-for="room in paginatedRooms" :key="room.id" :room="room" />
  </b-card-group>
  <div class="pagination-buttons">
    <b-button @click="prevPage" :disabled="currentPage <= 1">Previous</b-button>
    <b-button @click="nextPage" :disabled="currentPage >= totalPages">Next</b-button>
  </div>
</template>

<style scoped>
.pagination-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
