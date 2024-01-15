import { defineStore } from 'pinia';
import { login as loginService } from '@/api/loginService';

export const useLoginStore = defineStore('loginStore', {
    state: () => ({
        jwt: localStorage.getItem('jwt') || null,
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false
    }),
    actions: {
        async login(clientId, secret) {
            try {
                const jwt = await loginService(clientId, secret);
                this.jwt = jwt;
                this.isLoggedIn = true;
                console.log('Logged in. isLoggedIn:', this.isLoggedIn);
                console.log('Logged in. JWT:', this.jwt);
                localStorage.setItem('jwt',jwt)
                localStorage.setItem('isLoggedIn','true')
            } catch (error) {
                console.error('Login fehlgeschlagen:', error);
                throw error;
            }
        },
        logout() {
            this.jwt = null;
            this.isLoggedIn = false;
            // Entfernen des JWT aus Axios Header
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('jwt')
            localStorage.removeItem('isLoggedIn')
        }
    }
});
