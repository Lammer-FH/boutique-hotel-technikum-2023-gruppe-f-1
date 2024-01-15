<script>
import { defineComponent } from 'vue';
import { useLoginStore } from '@/stores/loginStore'; // Stellen Sie sicher, dass der Pfad korrekt ist

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      clientId: '',
      secret: '',
      message: ''
    };
  },
  methods: {
    async loginUser() {
      const loginStore = useLoginStore();
      try {
        await loginStore.login(this.clientId, this.secret);
        this.message = 'Login erfolgreich!';
        // Optionale Aktionen nach erfolgreichem Login
      } catch (error) {
        this.message = 'Login fehlgeschlagen: ' + error.message;
      }
    }
  }
});
</script>

<template>
  <div class="login-form">
    <form @submit.prevent="loginUser">
      <div>
        <label for="clientId">E-Mail:</label>
        <input id="clientId" v-model="clientId" type="email" placeholder="E-Mail" required>
      </div>
      <div>
        <label for="secret">Passwort:</label>
        <input id="secret" v-model="secret" type="password" placeholder="Passwort" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>