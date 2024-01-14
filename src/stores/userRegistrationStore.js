import { defineStore } from 'pinia';
import { registerUser } from '@/api/userRegistrationService';

export const useUserRegistrationStore = defineStore('userRegistrationStore', {
  state: () => ({
    registrationData: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  }),
  actions: {
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
