<script>
import { defineComponent } from 'vue';
import RoomCard from './RoomCard.vue'; // Stelle sicher, dass dieser Pfad korrekt ist
import { getAllRooms } from '@/api/roomService'; // Stelle sicher, dass dieser Pfad korrekt ist

export default defineComponent({
  name: "RoomList",
  components: {
    RoomCard
  },
  data() {
    return {
      rooms: [],
      currentPage: 1,
      limit: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.rooms.length / this.limit);
    },
    startIndex() {
      return (this.currentPage - 1) * this.limit;
    },
    endIndex() {
      return this.currentPage * this.limit;
    },
    paginatedRooms() {
      return this.rooms.slice(this.startIndex, this.endIndex);
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
    getAllRooms().then(data => {
      this.rooms = data;
    }).catch(error => {
      console.error('Failed to fetch rooms:', error);
    });
  },
})
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
