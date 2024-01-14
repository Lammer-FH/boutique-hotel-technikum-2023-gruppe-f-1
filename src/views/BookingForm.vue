<script>
import { defineComponent } from 'vue';
import { useBookingStore } from '@/stores/bookingStore';
import { useRoomStore } from "@/stores/roomsStore";

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
      showConfirmModal: false
    };
  },
  mounted() {
    const roomStore = useRoomStore();
    this.bookingData.fromDate = roomStore.selectedStartDate;
    this.bookingData.toDate = roomStore.selectedEndDate;
    console.log(roomStore.selectedStartDate);
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


        const bookingStore = useBookingStore();
        await bookingStore.makeBooking(this.roomId, this.bookingData.fromDate, this.bookingData.toDate, this.bookingData);


        this.$router.push({
          name: 'BookingConfirmation',
        });

        this.resetBooking();
      } catch (error) {
        alert('Buchung fehlgeschlagen. Bitte versuchen Sie es später erneut.');
        this.showConfirmModal = false;
      }
    }
  }
});
</script>

<template>
  <b-container>
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
        <p>Bitte überprüfen und bearbeiten Sie Ihre Buchungsinformationen:</p>
        <!-- Bearbeitbare Formularfelder im Modal -->
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
      </div>
    </b-modal>

  </div>
  </b-container>
</template>


