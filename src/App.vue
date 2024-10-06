<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Mostrar el navbar solo si el usuario está autenticado y no está en la página de login -->
    <Navbar v-if="shouldShowNavbar" />
    <!-- Rutas de la aplicación -->
    <router-view></router-view>
    <Footer v-if="shouldShowNavbar" />
  </div>
</template>

<script setup>
  import { computed, watch } from 'vue';
  import { useAuthStore } from './store/auth';
  import { useRoute } from 'vue-router';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  // Acceso al store de autenticación y la ruta actual
  const authStore = useAuthStore();
  const route = useRoute();

  // Computed para determinar si mostrar el Navbar
  const shouldShowNavbar = computed(() => {
    return route.path !== '/login' && authStore.user !== null;
  });

  // Watch para observar cambios en la ruta o el usuario autenticado
  watch(
    [() => authStore.user, () => route.path],
    () => {
      // Forzar el ajuste para mostrar u ocultar el Navbar automáticamente si cambian el usuario o la ruta
    },
    { immediate: true }
  );
</script>

<style>
/* Estilo global si se necesita */
</style>