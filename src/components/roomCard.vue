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
  computed: {
    transformedExtras() {
      const extrasObj = {};
      this.room.extras.forEach(extra => {
        for (const key in extra) {
          extrasObj[key] = extra[key] === 1;
        }
      });
      return extrasObj;
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
      <font-awesome-icon v-if="transformedExtras.bathroom" icon="fa-solid fa-bath" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.minibar" icon="fa-solid fa-cookie-bite" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.television" icon="fa-solid fa-tv" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.livingroom" icon="fa-solid fa-expand" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.aircondition" icon="fa-solid fa-snowflake" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.wifi" icon="fa-solid fa-wifi" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras.breakfast" icon="fa-solid fa-egg" class="mx-1"/>
      <font-awesome-icon v-if="transformedExtras['handicapped accessible']" icon="fa-solid fa-wheelchair" class="mx-1"/>
    </b-card-footer>
    <router-link :to="`/booking/${room.id}`" class="btn btn-primary">Buchen</router-link>
  </b-card>
</template>

<style scoped>

.room-image {
  height: 200px; /* Feste Höhe für das Bild */
  object-fit: cover; /* Sorgt dafür, dass das Bild den Container füllt, ohne das Seitenverhältnis zu verzerren */
  width: 100%; /* Breite des Bildcontainers */
}
</style>
