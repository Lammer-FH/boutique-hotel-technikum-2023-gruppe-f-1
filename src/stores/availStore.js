import { createPinia } from 'pinia';
import {checkAvailability} from '@/api/roomAvailab';

const pinia = createPinia();

export const useAvailabilityStore = pinia.store('availability', {
  state: () => ({
    availabilityData: null,
  }),
  actions: {
    setAvailabilityData(data) {
      this.availabilityData = data;
    },
  },
});
