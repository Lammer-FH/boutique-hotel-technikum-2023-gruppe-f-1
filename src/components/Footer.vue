<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer",
})
</script>

<template>
  <footer class="mt-4 mb-4 p-3 text-bg-dark">
      <b-row>
        <b-col cols="6" class="d-flex justify-content-start">
          <router-link to="/impressum" class="text-white">Impressum</router-link>
        </b-col>
        <b-col cols="6" class="d-flex justify-content-end">
          <router-link to="/about" class="text-white">About</router-link>
        </b-col>
      </b-row>
  </footer>
</template>