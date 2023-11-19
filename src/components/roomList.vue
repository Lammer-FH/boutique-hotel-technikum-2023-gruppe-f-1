<script>
import { defineComponent } from 'vue';
import RoomCard from './RoomCard.vue';
import { useRoomStore } from "@/stores/roomsStore";
import { useAvailableRoomStore } from "@/stores/availableRoomsStore";

export default defineComponent({
  name: "RoomList",
  components: {
    RoomCard,
  },
  data: () => {
    return {
      roomsStore: useRoomStore(),
      currentPage: 1,
      limit: 5,
      startDate: undefined,
      endDate: undefined,
      allRooms: [],
      filteredRooms: [],
      showFilteredRooms: false
    };
  },
  computed: {
    totalPages() {
      let roomsToCount = this.showFilteredRooms ? this.filteredRooms : this.allRooms;
      return Math.ceil(roomsToCount.length / this.limit);
    },
    startIndex() {
      return (this.currentPage - 1) * this.limit;
    },
    endIndex() {
      return this.currentPage * this.limit;
    },
    paginatedRooms() {
      let roomsToDisplay = this.showFilteredRooms ? this.filteredRooms : this.allRooms;
      return roomsToDisplay.slice(this.startIndex, this.endIndex);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    async loadAvailableRooms() {
      try {
        this.filteredRooms = [];
        const availableRoomStore = useAvailableRoomStore();
        for (let room of this.allRooms) {
          await availableRoomStore.fetchAvailableRoom(room.id, this.startDate, this.endDate);
          if (availableRoomStore.availableRoom.available) {
            this.filteredRooms.push(room);
          }
        }
        this.showFilteredRooms = true;
        const roomStore = useRoomStore();
        roomStore.setSelectedDates(this.startDate, this.endDate);
      } catch (error) {
        console.error('Fehler beim Laden der verfügbaren Zimmer:', error);
      }
    }
  },
  mounted() {
    this.allRooms = this.roomsStore.rooms;
    if (this.allRooms.length === 0) {
      this.roomsStore.fetchRooms().then(() => {
        this.allRooms = this.roomsStore.rooms;
      });
    }
  },
});
</script>

<template>
  <div class="date-selection">
    <b-form-input type="date" v-model="startDate" class="mr-2"></b-form-input>
    <span class="mx-2">bis</span>
    <b-form-input type="date" v-model="endDate" class="mr-2"></b-form-input>
    <b-button variant="primary" class="ml-2" @click="loadAvailableRooms">Verfügbare Zimmer anzeigen</b-button>
  </div>

  <div class="room-list-container">
    <room-card v-for="room in paginatedRooms"
               :key="room.id"
               :room="room"
               class="room-card-item"
    />
  </div>

  <div class="pagination-buttons">
    <b-button @click="prevPage" :disabled="currentPage <= 1">Previous</b-button>
    <b-button @click="nextPage" :disabled="currentPage >= totalPages">Next</b-button>
  </div>
</template>

<style scoped>
.date-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.room-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.room-card-item {
  flex: 0 0 20%; /* Jede Karte nimmt 20% der Containerbreite ein */
  max-width: 20%; /* Maximale Breite der Karte */
  margin-bottom: 20px; /* Abstand nach unten */
}

.pagination-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>