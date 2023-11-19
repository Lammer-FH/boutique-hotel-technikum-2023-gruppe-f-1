<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {useRoomStore} from "@/stores/roomsStore";
import {useAvailableRoomStore} from "@/stores/availableRoomsStore";

export default defineComponent({
  components: {Footer, Header},

  data: () => {
    return {
      startDate: undefined,
      endDate: undefined,
      roomIds: [],
      rooms: [],
      availableRooms: []
    }
  }, methods: {
    async loadRoomsFromStore() {
      try {
        const roomStore = useRoomStore();
        await roomStore.fetchRooms(); // Warte darauf, dass das Promise aufgelöst wird
        this.rooms = roomStore.rooms; // Setze die Zimmerdaten in das rooms-Array der Komponente

        this.getRoomIds();
      } catch (error) {
        console.error('Fehler beim Laden der Zimmerdaten:', error);
      }
    },
    async loadAvailableRoomsFromStore() {
      try {
        const availableRoomStore = useAvailableRoomStore();
        for (let x = 0; x < this.roomIds.length; x++) {
          await availableRoomStore.fetchAvailableRoom(this.roomIds[x], this.startDate, this.endDate);
          if (availableRoomStore.availableRoom.available === true) {
            this.availableRooms.push(this.rooms[x]);
          }
        }

        // this.getRoomIds();
      } catch (error) {
        console.error('Fehler beim Laden der Zimmerdaten:', error);
      }
    },
    getRoomIds() {
      for (let x = 0; x < this.rooms.length; x++) {
        this.roomIds.push(this.rooms[x].id);
      }
    }
  },
  mounted() {
    this.loadRoomsFromStore();
  }
});

</script>

<template>
  <b-container class="mt-4">
    <b-row>
      <b-col>
        <b-img
            src="../src/assets/Hotel-Wien.webp"
            alt="Hotel Image"
            fluid
        ></b-img>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <h2 class="display-4">Willkommen im Boutique-Hotel Technikum Wien!</h2>
        <p>
          Entdecken Sie eine Welt des zeitgenössischen Luxus und des technischen Fortschritts, die perfekt mit
          traditionellem Wiener Charme harmoniert. Unser Boutique-Hotel bietet Ihnen einen unvergleichlichen Aufenthalt
          in der pulsierenden Metropole Wien. Hier ist alles darauf ausgerichtet, Ihre Erwartungen zu übertreffen und
          Ihnen einen unvergesslichen Aufenthalt zu bescheren.
        </p>
        <h3>Unser Hotel</h3>
        <p>
          Unser Hotel ist ein Ort, an dem Technologie und Design in perfekter Symbiose verschmelzen. Wir haben uns dem
          Ziel verschrieben, Ihnen modernsten Komfort und gleichzeitig ein Gefühl von Geborgenheit zu bieten. Jedes
          unserer Zimmer ist mit innovativen Technologien ausgestattet, die Ihren Aufenthalt reibungslos und angenehm
          gestalten.
        </p>
        <h3>Unser Team</h3>
        <p>
          Unsere herzliche Gastfreundschaft und die Aufmerksamkeit unserer Mitarbeiter werden Ihren Aufenthalt zu etwas
          Besonderem machen. Unser Team ist rund um die Uhr für Sie da, um sicherzustellen, dass es Ihnen an nichts
          fehlt. Von Empfehlungen zu den besten Sehenswürdigkeiten bis hin zu Reservierungen in den angesagtesten
          Restaurants der Stadt, wir sind für Sie da.
        </p>
        <h3>Unsere Lage</h3>
        <p>
          Das Boutique-Hotel Technikum Wien liegt im Herzen der Stadt, nur wenige Schritte von den wichtigsten
          Sehenswürdigkeiten und Attraktionen entfernt. Egal, ob Sie die historische Altstadt erkunden, ein Konzert in
          der berühmten Staatsoper besuchen oder die kulinarischen Köstlichkeiten in den umliegenden Cafés und
          Restaurants probieren möchten, bei uns sind Sie genau richtig.
        </p>
        <h3>Unsere Annehmlichkeiten</h3>
        <ul>
          <li>Geräumige und modern ausgestattete Zimmer</li>
          <li>Kostenlose High-Speed-WLAN-Verbindung</li>
          <li>Ein exquisites Restaurant mit regionaler und internationaler Küche</li>
          <li>Eine stilvolle Lounge-Bar, in der Sie Ihren Tag entspannt ausklingen lassen können</li>
          <li>Konferenzräume und Veranstaltungsbereiche für Geschäftsreisende</li>
          <li>Ein Fitnesscenter, um fit zu bleiben</li>
          <li>Hervorragender Zimmerservice und Concierge-Service</li>
        </ul>
        <h3>Erleben Sie Wien auf Ihre eigene Weise</h3>
        <p>
          Egal, ob Sie geschäftlich in Wien sind oder die Stadt für einen unvergesslichen Urlaub besuchen - das
          Boutique-Hotel Technikum Wien ist der ideale Ausgangspunkt, um alles zu erleben, was diese faszinierende Stadt
          zu bieten hat. Reservieren Sie noch heute und lassen Sie sich von unserer einzigartigen Mischung aus moderner
          Technologie und traditionellem Charme verzaubern. Wir freuen uns darauf, Sie in unserem Hotel willkommen zu
          heißen und Ihnen einen unvergesslichen Aufenthalt in Wien zu bereiten. Willkommen im Boutique-Hotel Technikum
          Wien – wo Innovation und Gastfreundschaft Hand in Hand gehen.
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <h3>Bitte wählen Sie den gewünschten Zeitraum</h3>
        <div class="d-flex align-items-center">
          <b-form-input type="date" v-model="startDate"></b-form-input>
          <span class="mx-2">bis</span>
          <b-form-input type="date" v-model="endDate"></b-form-input>
        </div>
        <b-button class="mt-2" v-on:click="loadAvailableRoomsFromStore">Suche</b-button>
      </b-col>
    </b-row>


    <b-row class="mt-3">
      <p>{{ startDate }}</p>
      <p>{{ endDate }}</p>
      <p>{{ rooms }}</p>
      <p>{{ roomIds }}</p>
      <p>{{ availableRooms }}</p>
    </b-row>


  </b-container>
</template>
