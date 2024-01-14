<template>
    <b-container>
      <div class="registration-form">
        <h1>Registrieren</h1>
        <form @submit.prevent="registerUser">
          <b-form-group label="Vorname:">
            <b-form-input v-model="registrationData.firstname" required></b-form-input>
          </b-form-group>
          <b-form-group label="Nachname:">
            <b-form-input v-model="registrationData.lastname" required></b-form-input>
          </b-form-group>
          <b-form-group label="E-Mail:">
            <b-form-input type="email" v-model="registrationData.email" required></b-form-input>
          </b-form-group>
          <b-form-group label="Benutzername:">
            <b-form-input v-model="registrationData.username" required></b-form-input>
          </b-form-group>
          <b-form-group label="Passwort:">
            <b-form-input type="password" v-model="registrationData.password" required></b-form-input>
          </b-form-group>
          <b-form-group label="Passwort bestätigen:">
            <b-form-input type="password" v-model="registrationData.confirmPassword" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Registrieren</b-button>
        </form>
      </div>
    </b-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { registerUser } from '@/api/userRegistrationService';
  
  export default defineComponent({
    name: 'RegistrationForm',
    data() {
      return {
        registrationData: {
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      async registerUser() {
        try {
          const { firstname, lastname, email, username, password, confirmPassword } = this.registrationData;
  
          // Überprüfe, ob die Passwörter übereinstimmen
          if (password !== confirmPassword) {
            alert('Die Passwörter stimmen nicht überein');
            return;
          }
  
          // Erstelle ein neues Objekt mit nur den benötigten Daten
          const userData = {
            firstname,
            lastname,
            email,
            username,
            password,
          };
  
          // Führe die Registrierung durch
          await registerUser(userData);
          alert('Registrierung erfolgreich!');
          // Hier könntest du weitere Aktionen ausführen, wie z.B. den Benutzer automatisch anmelden
          // oder zur Anmeldeseite navigieren
          // ...
  
        } catch (error) {
          alert('Registrierung fehlgeschlagen. Bitte versuchen Sie es später erneut.');
        }
      },
    },
  });
  </script>
  
  <style scoped>
  /* Füge hier deine benutzerdefinierten Styles hinzu */
  </style>
  