<script>
import { defineComponent } from 'vue';
import { useBookingStore } from '@/stores/bookingStore';
import {useRoomStore} from "@/stores/roomsStore";
import RoomCard from "@/components/roomCard.vue";


export default defineComponent({
  name: 'BookingConfirmation',
  components: {RoomCard},
  data() {
    return {
      bookingDetails: null,
      bookingResult: null,
      fromDate: null,
      toDate: null,
      roomId: null,
      selectedRoom: null,
    };
  },
  mounted() {
    const bookingStore = useBookingStore();
    this.bookingDetails = bookingStore.bookingDetails;
    this.bookingResult = bookingStore.bookingResult;
    this.fromDate = bookingStore.fromDate;
    this.toDate = bookingStore.toDate;
    this.roomId = bookingStore.roomId;

    const roomStore = useRoomStore();
    roomStore.fetchRooms()
        .then(() => {
          // Überprüfen Sie, ob der Raum verfügbar ist, indem Sie seine roomId überprüfen
          this.selectedRoom = roomStore.rooms.find(room => String(room.id) === String(this.roomId));
          console.log('this.roomId:', this.roomId);
          console.log('roomStore.rooms:', roomStore.rooms);
          console.log('selectedRoom:', this.selectedRoom);
        })
        .catch((error) => {
          console.error('Fehler beim Laden der Räume:', error);
        });
  },
  methods: {
    printPage() {
      window.print();
    }
  }
});
</script>
<template>
  <b-container>
    <div class="booking-confirmation">
      <h1>Buchungsbestätigung</h1>
      <div v-if="bookingDetails && bookingResult">
        <h2>Danke für Ihre Buchung, {{ bookingDetails.firstname }} {{ bookingDetails.lastname }}</h2>
        <p>Email: {{ bookingDetails.email }}</p>
        <p>Buchungszeitraum: {{ fromDate }} bis {{ toDate }}</p>
        <p> ZimmerID : {{roomId}}</p>

        <div v-if="selectedRoom">
          <h2>Gebuchter Raum:</h2>
          <div class="room-card-wrapper">
            <RoomCard :room="selectedRoom" />
          </div>
        </div>

        <p>Frühstück inbegriffen: {{ bookingDetails.breakfast ? 'Ja' : 'Nein' }}</p>

        <!-- Statische Hotelinformationen -->
        <div>
          <b-img
              src="../src/assets/Hotel-Wien.webp"
              alt="Hotel Image"
              fluid
          ></b-img>
          <h3>Boutique-Hotel Technikum Wien</h3>
          <p>Zimmerbeschreibung und Extras...</p>
        </div>

        <!-- Anfahrtsbeschreibung und Kontaktinformationen -->
        <div>
          <h3>Anfahrt zum Hotel</h3>
          <p>
            Unser Hotel befindet sich in der Innenstadt von Wien, in der Nähe
            des Hauptbahnhofs. Hier ist die Anfahrtsbeschreibung zum Hotel:
          </p>
          <p>
            Das Boutique-Hotel Technikum Wien erreichen Sie am besten mit den
            öffentlichen Verkehrsmitteln. Nehmen Sie die U-Bahnlinie U1 und
            steigen Sie am Hauptbahnhof aus. Von dort aus sind es nur noch
            wenige Gehminuten bis zum Hotel.
          </p>
          <p>
            Wenn Sie mit dem Auto anreisen, folgen Sie bitte den Schildern zum
            Hauptbahnhof und parken Sie in einem der nahegelegenen Parkhäuser.
            Vom Hauptbahnhof aus sind es ebenfalls nur wenige Gehminuten bis
            zum Hotel.
          </p>
          <h3>Kontakt</h3>
          <p>Telefon: +123456789</p>
          <p>Email: kontakt@hotel.com</p>
        </div>

        <b-button @click="printPage">Seite drucken</b-button>
      </div>
    </div>
  </b-container>
</template>

<style scoped>
.room-card-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}


@media print {
  body {
    color: black;
    background: white;
  }

  .booking-confirmation {
    /* Stile speziell für das Drucken */
    font-size: 12pt;
    color: black;
  }

  /* Verstecken aller Elemente, die nicht gedruckt werden sollen */
  .header, .footer, .non-printable {
    display: none;
  }

}
</style>