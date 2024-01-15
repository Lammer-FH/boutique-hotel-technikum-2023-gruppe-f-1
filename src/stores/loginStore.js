import { defineStore } from 'pinia';
import { login as loginService } from '@/api/loginService';
import axios from "axios";

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
            window.alert('Logout erfolgreich');
        }
    }
});
