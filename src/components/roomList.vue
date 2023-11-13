<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import RoomCard from './RoomCard.vue'; // Stelle sicher, dass dieser Pfad korrekt ist
import { getAllRooms } from '@/api/roomService'; // Stelle sicher, dass dieser Pfad korrekt ist
import { BButton, BCardGroup } from 'bootstrap-vue-3';

export default defineComponent({
  name: "RoomList",
  components: {
    RoomCard,
    BButton,
    BCardGroup,
  },
  setup() {
    const rooms = ref([]);
    const currentPage = ref(1);
    const limit = 5;

    onMounted(async () => {
      try {
        rooms.value = await getAllRooms();
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
      }
    });

    const totalPages = computed(() => Math.ceil(rooms.value.length / limit));
    const startIndex = computed(() => (currentPage.value - 1) * limit);
    const endIndex = computed(() => currentPage.value * limit);
    const paginatedRooms = computed(() => rooms.value.slice(startIndex.value, endIndex.value));

    return { paginatedRooms, currentPage, totalPages };
  },
})
</script>

<template>
  <b-card-group deck>
    <room-card v-for="room in paginatedRooms" :key="room.id" :room="room" />
  </b-card-group>
  <div class="pagination-buttons">
    <b-button @click="currentPage--" :disabled="currentPage <= 1">Previous</b-button>
    <b-button @click="currentPage++" :disabled="currentPage >= totalPages">Next</b-button>
  </div>
</template>

<style scoped>
.pagination-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.b-button {
  margin: 0 10px;
}
</style>
