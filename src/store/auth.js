import { defineStore } from 'pinia';
import usersData from '../user.json';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        logoutTimer: null,
    }),
    actions: {
        login(username, password) {
            const user = usersData.users.find(
                (u) => u.username === username && u.password === password
            );
        
            if (user) {
                this.user = { username: user.username };
                this.startLogoutTimer();
            } else {
                this.user = null;
            }
        },
        logout() {
            this.user = null;
            // Limpio el almacenamiento local para eliminar la persistencia del usuario
            localStorage.removeItem('auth');
            // Limpiar el temporizador de logout si existe
            if (this.logoutTimer) {
                clearTimeout(this.logoutTimer);
                this.logoutTimer = null;
            }
        },
        startLogoutTimer() {
            // Limpiar el temporizador anterior si existe
            if (this.logoutTimer) {
                clearTimeout(this.logoutTimer);
            }
            // Configurar el temporizador para cerrar sesión después de 5 minutos (300000 ms) de inactividad
            this.logoutTimer = setTimeout(() => {
                this.logout();
                // Redirigir al usuario a la página de login
                window.location.href = '/login'
            }, 300000); // 5 minutos
        },
        resetLogoutTimer() {
            this.startLogoutTimer();
        },
    },
    persist: {
        key: 'auth',
        storage: localStorage, // Usa el almacenamiento local para persistir el estado
    },
});

// Detectar la actividad del usuario y reiniciar el temporizador
window.addEventListener('mousemove', () => {
    const authStore = useAuthStore();
    if (authStore.user) {
        authStore.resetLogoutTimer();
    }
});

window.addEventListener('keydown', () => {
    const authStore = useAuthStore();
    if (authStore.user) {
        authStore.resetLogoutTimer();
    }
});