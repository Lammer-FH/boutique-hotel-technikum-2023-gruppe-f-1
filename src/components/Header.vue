<script>
import { defineComponent } from 'vue';
import { useLoginStore } from '@/stores/loginStore';

export default defineComponent({
  name: "Header",
  data: () => {
    return {
      loginStore: useLoginStore()
    }
  },
  mounted() {
    console.log('Header mounted. isLoggedIn:', this.loginStore.isLoggedIn);
  },
  methods: {
    logout(){
      this.loginStore.logout();
    }
  }
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
        <b-nav-item-dropdown text="Profil" right>
          <b-dropdown-item v-if="!loginStore.isLoggedIn" href="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!loginStore.isLoggedIn" href="/register">Register now</b-dropdown-item>
          <b-dropdown-item v-if="loginStore.isLoggedIn" @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-if="loginStore.isLoggedIn" class="text-success">Eingeloggt</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

