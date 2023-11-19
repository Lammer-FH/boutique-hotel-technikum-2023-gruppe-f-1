<script>
import {defineComponent} from 'vue';
import RoomList from '@/components/RoomList.vue';
import {useRoomStore} from "@/stores/roomsStore";
import {useAvailableRoomStore} from "@/stores/availableRoomsStore";
import RoomAvailableList from "@/components/roomAvailableList.vue"; // Stelle sicher, dass der Pfad korrekt ist

export default defineComponent({
  name: "RoomsPage",
  components: {
    RoomAvailableList,
    RoomList
  },
  data: () => {
    return {
      startDate: undefined,
      endDate: undefined,
      roomIds: [],
      rooms: [],
      availableRooms: []
    }
  }, methods: {
    async loadRoomsFromStore() {
      try {
        const roomStore = useRoomStore();
        await roomStore.fetchRooms(); // Warte darauf, dass das Promise aufgelöst wird
        this.rooms = roomStore.rooms; // Setze die Zimmerdaten in das rooms-Array der Komponente

        this.getRoomIds();
      } catch (error) {
        console.error('Fehler beim Laden der Zimmerdaten:', error);
      }
    },
    async loadAvailableRoomsFromStore() {
      try {
        const availableRoomStore = useAvailableRoomStore();
        for (let x = 0; x < this.roomIds.length; x++) {
          await availableRoomStore.fetchAvailableRoom(this.roomIds[x], this.startDate, this.endDate);
          if (availableRoomStore.availableRoom.available === true) {
            this.availableRooms.push(this.rooms[x]);
          }
        }
        console.log(this.availableRooms);
        // this.getRoomIds();
      } catch (error) {
        console.error('Fehler beim Laden der Zimmerdaten:', error);
      }
    },
    getRoomIds() {
      for (let x = 0; x < this.rooms.length; x++) {
        this.roomIds.push(this.rooms[x].id);
      }
    }
  },
  mounted() {
    this.loadRoomsFromStore();
  }
});
</script>

<template>
  <div class="rooms-page">
    <h1>Unsere Zimmer</h1>
    <RoomList/>
  </div>

  <div class="mt-3 p-5">
    <h3>Bitte wählen Sie den gewünschten Zeitraum:</h3>
    <div class="d-flex align-items-center">
      <b-form-input type="date" v-model="startDate"></b-form-input>
      <span class="mx-2">bis</span>
      <b-form-input type="date" v-model="endDate"></b-form-input>
    </div>
    <b-button class="mt-2" v-on:click="loadAvailableRoomsFromStore">Suche</b-button>
  </div>
  <!--
    <div class="mt-3 p-5">
      <h2>Unsere verfügbaren Zimmer</h2>
      <RoomAvailableList />
      <p>{{ availableRoomList }}</p>
      <p>{{ roomIds }}</p>
      <p>{{ rooms }}</p>
    </div>
    -->
</template>

<style scoped>
.rooms-page {
  margin: 20px;
}
</style>
