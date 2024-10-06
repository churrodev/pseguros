<template>
    <section class="banner bg-cover bg-center h-64 flex items-center justify-center" style="background-image: url('https://www.provinciaseguros.com.ar/wp-content/uploads/2019/03/Sin-ti%CC%81tulo-1.jpg');">
        <div class="text-center text-white">
            <h2 class="text-3xl font-semibold">Cotizá y contratá tu seguro</h2>
            <button class="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">Cotizá acá</button>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .banner {
        background-image: url('@/assets/banner.jpg');
        height: 500px;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .banner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .text-center {
        position: relative;
        z-index: 1;
    }
</style>