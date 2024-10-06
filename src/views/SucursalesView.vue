<template>
    <div class="sucursales min-h-screen flex flex-col items-center py-8">
        <h2 class="text-2xl font-semibold mb-6 text-blue-800">Sucursales Disponibles</h2>
        <div class="container flex mx-auto px-4">
            <ul v-if="branches.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <li v-for="branch in branches" :key="branch.id" class="p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
                <h3 class="text-lg font-semibold text-gray-700">{{ branch.nombre }}</h3>
                </li>
            </ul>
            <p v-else class="text-gray-500">Cargando sucursales...</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { getBranches } from '../services/branchesService';

    // Definimos una ref para almacenar las sucursales
    const branches = ref([]);

    // Cargamos las sucursales al montar el componente
    onMounted(async () => {
        try {
            const data = await getBranches();
            // Filtrar las provincias requeridas
            branches.value = data.provincias.filter(provincia =>
                ['Buenos Aires', 'Neuquén', 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', 'Córdoba', 'Misiones', 'Santa Fe'].includes(provincia.nombre)
            );
        } catch (error) {
            console.error('Error al cargar las sucursales:', error);
        }
    });
</script>

<style scoped>
/* Estilos personalizados aquí */
</style>

<style scoped>
    .sucursales {
        background-color: #f8fafc;
    }
</style>