<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "RoomCard",
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <b-card class="mb-3">
    <b-card-img
        :src="`../src/assets/rooms/${room.id}.jpeg`"
        alt="Room Image"
        top
        class="room-image"
    ></b-card-img>
    <b-card-body>
      <b-card-title>{{ room.roomsName }}</b-card-title>
      <b-card-text>{{ room.pricePerNight }} €</b-card-text>
    </b-card-body>
    <b-card-footer>
      <!-- Hier können weitere Informationen oder Aktionen eingefügt werden -->
    </b-card-footer>
  </b-card>
</template>

<style scoped>
.room-image {
  height: 200px; /* Feste Höhe für das Bild */
  object-fit: cover; /* Sorgt dafür, dass das Bild den Container füllt, ohne das Seitenverhältnis zu verzerren */
  width: 100%; /* Breite des Bildcontainers */
}
</style>
