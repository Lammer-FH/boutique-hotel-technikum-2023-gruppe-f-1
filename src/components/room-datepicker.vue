<template>
    <div>
      <datepicker v-model="selectedDate" :disabled-dates="disabledDates"></datepicker>
  
      <button @click="checkAvailability">Verfügbarkeit prüfen</button>
  
      <div v-if="availabilityStore.availabilityData !== null">
        {{ availabilityStore.availabilityData }}
      </div>
    </div>
  </template>
  
  <script>
  import DatePicker from 'vuejs-datepicker';
  import { useAvailabilityStore } from '../stores/availStore';
  
  export default {
    components: {
      DatePicker,
    },
    data() {
      return {
        selectedDate: null,
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
      disabledDates() {
        //logik fpr evetl. nicht verfügbare tage
        return { /* ... */ };
      },
    },
  };
  </script>
  