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
    <b-form @submit.prevent="loginUser">
      <b-form-group label="E-Mail:" label-for="clientId">
        <b-form-input
            id="clientId"
            v-model="clientId"
            type="email"
            placeholder="E-Mail"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Passwort:" label-for="secret">
        <b-form-input
            id="secret"
            v-model="secret"
            type="password"
            placeholder="Passwort"
            required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
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