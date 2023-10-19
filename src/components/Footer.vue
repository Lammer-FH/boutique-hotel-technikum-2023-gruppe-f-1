<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="container-fluid mt-4 mb-4 p-3 text-bg-dark">
    <div class="row">
      <div class="col-6 d-flex justify-content-start">
        <router-link to="/impressum" class="text-white">Impressum</router-link>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <router-link to="/about" class="text-white">About</router-link>
      </div>
    </div>
  </footer>
</template>



