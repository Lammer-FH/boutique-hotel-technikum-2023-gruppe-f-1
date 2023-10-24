<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="d-flex justify-content-between w-100">
          <router-link to="/" class="navbar-brand">
            <img
                alt="Logo"
                src="@/assets/FH_Technikum_Wien_logo.svg.png"
                width="40"
                height= "30"
                class="d-inline-block align-top"
            />
            Technikum Wien
          </router-link>
          <div class="d-flex">
            <button class="btn btn-outline-primary me-1">Anmelden</button>
            <button class="btn btn-outline-success">Profil</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
