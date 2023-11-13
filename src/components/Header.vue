<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Header"
})
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="d-flex justify-content-between w-100">
          <router-link to="/" class="navbar-brand">
            <img
                alt="Logo"
                src="@/assets/FH_Technikum_Wien_logo.svg.png"
                style="max-width: 40%; max-height: 30px; height: auto;"
            />
            Technikum
          </router-link>
          <div class="d-flex">
            <!-- Zimmer anzeigen Button -->
            <router-link to="/rooms" class="btn btn-outline-primary btn-sm me-1">Zimmer <br/>anzeigen</router-link>

            <!-- Anmelden Button -->
            <button class="btn btn-outline-primary btn-sm me-1">Anmelden</button>
            <!-- Profil Button -->
            <button class="btn btn-outline-success btn-sm">Profil</button>
          </div>
        </div>
      </div>
    </nav>

</template>



