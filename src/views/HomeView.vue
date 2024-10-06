<template>
    <div class="home">

        <!-- Banner Principal -->
        <Banner />

        <!-- Servicios para Personas -->
        <SectionPeople />

        <!-- Servicios para Empresas -->
        <SectionEmpresa />

        <!-- Sección de Contacto -->
        <Contact />

    </div>
</template>

<script setup>
    import Banner from '../components/Banner.vue';
    import SectionPeople from '../components/SectionPeople.vue';
    import SectionEmpresa from '../components/SectionEmpresa.vue';
    import Contact from '../components/Contact.vue';
</script>