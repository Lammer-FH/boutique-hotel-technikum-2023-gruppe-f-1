<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="container mt-4 mb-4">
    <div class="row">
      <div class="col-6 d-flex justify-content-start">
        <router-link to="/impressum">Impressum</router-link>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </footer>
</template>



