<template>
    <nav class="bg-slate-50 text-black px-8 py-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex justify-center">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo Provincia Seguros" class="h-auto w-24" />
                </router-link>
            </div>
    
            <!-- Navegación -->
            <div class="flex space-x-6 items-center">
                <!-- Link a Inicio -->
                <router-link to="/" class="hover:text-blue-300">Inicio</router-link>
                <!-- Link a Sucursales (visible solo si está autenticado) -->
                <router-link v-if="user" to="/sucursales" class="hover:text-blue-300">Sucursales</router-link>
        
                <!-- Usuario y Logout -->
                <div v-if="user" class="flex items-center space-x-4">
                    <span>Bienvenido, <b>{{ user.username }}</b></span>
                    <font-awesome-icon 
                        icon="fa-solid fa-power-off"
                        @click="handleLogout" 
                        class="w-6 h-6 text-black cursor-pointer flex justify-center items-center"
                    />
                </div>
        
                <!-- Link a Login (Si no hay usuario) -->
                <router-link v-else to="/login" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                    Iniciar sesión
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { useAuthStore } from '../store/auth';
    import { useRouter } from 'vue-router';
    
    // Accedemos al store y router
    const authStore = useAuthStore();
    const router = useRouter();
    
    // Función para manejar el logout
    const handleLogout = () => {
        authStore.logout();
        router.push('/login'); // Redirigir al login después de hacer logout
    
        // Verificar si el estado persistido se limpia correctamente
        if (authStore.user === null) {
            console.log("Logout exitoso.");
        }
    };
    
    // Obtenemos el usuario del store
    const user = authStore.user;
</script>

<style scoped>
  /* Estilos personalizados aquí */
</style>