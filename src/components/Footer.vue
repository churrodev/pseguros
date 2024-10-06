<template>
    <footer class="footer bg-slate-100 text-black py-6 shadow-lg mt-auto w-full">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div class="text-center md:text-left mb-4 md:mb-0">
                <p>&copy; 2024 Provincia Seguros. Todos los derechos reservados.</p>
            </div>
            <div class="flex space-x-4">
                <router-link to="/terminos" class="hover:text-gray-300">Términos y Condiciones</router-link>
                <router-link to="/privacidad" class="hover:text-gray-300">Política de Privacidad</router-link>
                <router-link to="https://www.facebook.com" target="_blank" class="hover:text-gray-300">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </router-link>
                <router-link to="https://www.instagram.com" target="_blank" class="hover:text-gray-300">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </router-link>
                <router-link to="https://www.linkedin.com" target="_blank" class="hover:text-gray-300">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </router-link>
                <router-link to="https://www.twitter.com" target="_blank" class="hover:text-gray-300">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style lang="scss" scoped>

</style>