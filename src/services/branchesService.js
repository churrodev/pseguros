// services/branchesService.js

import axios from 'axios';

// Creao una instancia de axios con la URL base desde el archivo .env
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getBranches = async () => {
    try {
        const response = await api.get('/georef/api/provincias');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las sucursales:', error);
        throw error;
    }
};
