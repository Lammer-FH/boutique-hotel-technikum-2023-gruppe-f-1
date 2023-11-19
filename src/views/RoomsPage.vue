<script>
import {defineComponent} from 'vue';
import RoomList from '@/components/RoomList.vue'; // Stelle sicher, dass der Pfad korrekt ist

export default defineComponent({
  name: "RoomsPage",
  components: {
    RoomList
  }
});
</script>

<template>
  <div class="rooms-page">
    <h1>Unsere Zimmer</h1>
    <RoomList/>
  </div>
</template>



<style scoped>
.rooms-page {
  margin: 20px;
}
</style>
