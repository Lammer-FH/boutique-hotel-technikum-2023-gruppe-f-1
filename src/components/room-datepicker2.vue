<template>
    <div>
      <label for="checkInDate">Check-in Datum:</label>
      <input type="date" v-model="checkInDate" id="checkInDate">
  
      <label for="checkOutDate">Check-out Datum:</label>
      <input type="date" v-model="checkOutDate" id="checkOutDate">
  
      <button @click="checkAvailability">Verfügbarkeit prüfen</button>
  
      <div v-if="availabilityStore.availabilityData !== null">
        {{ availabilityStore.availabilityData }}
      </div>
    </div>
  </template>
  
  <script>
  import { useAvailabilityStore } from '../stores/availStore';
  
  export default {
    data() {
      return {
        checkInDate: '',
        checkOutDate: '',
      };
    },
    methods: {
      checkAvailability() {
        // Rufe die Aktion des Stores auf, um Daten zu aktualisieren
        useAvailabilityStore.setAvailabilityData('Verfügbar');
      },
    },
    computed: {
      availabilityStore() {
        return useAvailabilityStore();
      },
    },
  };
  </script>
  