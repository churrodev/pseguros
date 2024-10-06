<template>
    <section class="services-empresas py-8 md:py-12 bg-gray-50">
        <div class="container mx-auto px-4">
            <h3 class="text-xl md:text-2xl font-semibold mb-6">Seguros para Empresas</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div class="service-item p-4 md:p-6 bg-white rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">PyME</h4>
                    <p class="text-sm md:text-base">Seguro para proteger tu negocio.</p>
                    <router-link to="/seguros/pyme" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
                <div class="service-item p-4 md:p-6 bg-white rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">Transporte de Mercancía</h4>
                    <p class="text-sm md:text-base">Cobertura para el traslado de mercancía.</p>
                    <router-link to="/seguros/transporte" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
                <div class="service-item p-4 md:p-6 bg-white rounded shadow-md">
                    <h4 class="text-lg md:text-xl font-semibold">Responsabilidad Civil</h4>
                    <p class="text-sm md:text-base">Cobertura para proteger tu empresa de reclamaciones.</p>
                    <router-link to="/seguros/responsabilidad" class="text-blue-600 hover:underline">Más información</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>