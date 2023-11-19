<script>
import { defineComponent } from 'vue';
import { useBookingStore } from '@/stores/bookingStore';

export default defineComponent({
  name: "BookingForm",
  props: {
    roomId: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      bookingData: {
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        breakfast: false,
        fromDate: '',
        toDate: '',
      },
      showConfirmModal: false,
      bookingStatus: null,
    };
  },
  methods: {
    openConfirmModal() {
      this.showConfirmModal = true;
    },
    resetBooking() {
      this.bookingData = {
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        breakfast: false,
        fromDate: '',
        toDate: '',
      };
      this.showConfirmModal = false;
    },
    async submitBooking() {
      try {
        const { firstname, lastname, email, birthdate } = this.bookingData;

        // Erstellen Sie ein neues Objekt mit nur den benötigten Daten
        const bookingInfo = {
          firstname,
          lastname,
          email,
          birthdate
        };
        //console.log(this.fromDate);
        console.log("Buchung wird durchgeführt...");
        await useBookingStore().makeBooking(this.roomId, this.bookingData.fromDate, this.bookingData.toDate,bookingInfo);
        console.log("Buchung erfolgreich!");
        this.bookingStatus = { message: 'Buchung erfolgreich!', variant: 'success' };
        console.log(this.bookingStatus.variant);
        this.resetBooking();
      } catch (error) {
        console.error('Fehler bei der Buchung:', error);
        this.bookingStatus = { message: 'Buchung fehlgeschlagen. Bitte versuchen Sie es später erneut.', variant: 'danger' };
        this.showConfirmModal = false;
      }
    }
  }
});
</script>

<template>
  <div class="booking-form">
    <h1>Zimmer buchen</h1>
    <form @submit.prevent="openConfirmModal">
      <b-form-group label="Vorname:">
        <b-form-input v-model="bookingData.firstname" required></b-form-input>
      </b-form-group>
      <b-form-group label="Nachname:">
        <b-form-input v-model="bookingData.lastname" required></b-form-input>
      </b-form-group>
      <b-form-group label="E-Mail:">
        <b-form-input type="email" v-model="bookingData.email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Geburtsdatum:">
        <b-form-input type="date" v-model="bookingData.birthdate" required></b-form-input>
      </b-form-group>
      <b-form-group label="Frühstück:">
        <b-form-checkbox v-model="bookingData.breakfast">
          Ja, inklusive Frühstück
        </b-form-checkbox>
      </b-form-group>
      <b-form-group label="Buchungsstart (Datum):">
        <b-form-input type="date" v-model="bookingData.fromDate" required></b-form-input>
      </b-form-group>
      <b-form-group label="Buchungsende (Datum):">
        <b-form-input type="date" v-model="bookingData.toDate" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Buchung bestätigen</b-button>
    </form>

    <!-- Bestätigungs-Modal -->
    <b-modal v-model="showConfirmModal" title="Buchung überprüfen" @hide="resetBooking" @ok="submitBooking">
      <div>
        <p>Bitte überprüfen Sie Ihre Buchungsinformationen:</p>
        <ul>
          <li>Vorname: {{ bookingData.firstname }}</li>
          <li>Nachname: {{ bookingData.lastname }}</li>
          <li>E-Mail: {{ bookingData.email }}</li>
          <li>Geburtsdatum: {{ bookingData.birthdate }}</li>
          <li>Frühstück: {{ bookingData.breakfast ? 'Ja' : 'Nein' }}</li>
          <li>Buchungsstart: {{ bookingData.fromDate }}</li>
          <li>Buchungsende: {{ bookingData.toDate }}</li>
        </ul>
      </div>
    </b-modal>

    <!-- Erfolgs- oder Fehlermeldung -->
    <b-alert v-if="bookingStatus" variant="bookingStatus.variant" show>
      {{ bookingStatus.message }}
    </b-alert>
  </div>
</template>


