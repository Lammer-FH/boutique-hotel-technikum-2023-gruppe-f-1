<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">
        <b-img
            alt="Logo"
            src="../src/assets/FH_Technikum_Wien_logo.svg.png"
            height="30"
        ></b-img>
        Technikum
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="/rooms">Zimmer anzeigen</b-nav-item>
          <b-nav-item href="#">Anmelden</b-nav-item>
          <b-nav-item href="#">Profil</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>




