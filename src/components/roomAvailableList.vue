<script>
import {defineComponent} from 'vue';
import RoomCard from "@/components/roomCard.vue";
import {useRoomStore} from "@/stores/roomsStore";
import {useAvailableRoomStore} from "@/stores/availableRoomsStore";

export default defineComponent({
  name: "roomAvailableList",
  components: {
    RoomCard
  },

  data: () => {
    return {
      roomsStore: useAvailableRoomStore(),
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

</template>

<style scoped>

</style>