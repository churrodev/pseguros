<template>
    <section class="services-personas py-8 md:py-12">
        <div class="container mx-auto px-4">
            <h3 class="text-xl md:text-2xl font-semibold mb-6">Seguros para Personas</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div class="service-item p-4 md:p-6 bg-gray-100 rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">Automotores</h4>
                    <p class="text-sm md:text-base">Coberturas completas para tu vehículo.</p>
                    <router-link to="/seguros/automotores" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
                <div class="service-item p-4 md:p-6 bg-gray-100 rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">Hogar</h4>
                    <p class="text-sm md:text-base">Protección integral para tu hogar.</p>
                    <router-link to="/seguros/hogar" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
                <div class="service-item p-4 md:p-6 bg-gray-100 rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">Vida y Salud</h4>
                    <p class="text-sm md:text-base">Coberturas para tu bienestar y el de tu familia.</p>
                    <router-link to="/seguros/vida" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>