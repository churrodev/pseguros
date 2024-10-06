<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white shadow-md rounded-md">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
            <img src="../assets/logo.png" alt="Logo Provincia Seguros" class="h-16" />
            </div>

            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-700">Acceder a tu cuenta</h2>

            <form @submit.prevent="submitForm">
            <!-- Campo Usuario -->
            <div class="mb-4">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Usuario o email</label>
                <Field
                name="username"
                type="text"
                :class="{'border-red-500': errors.username, 'border-gray-300': !errors.username}"
                class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Ingresa tu usuario o email"
                />
                <ErrorMessage name="username" class="text-red-500 text-sm" />
            </div>
    
            <!-- Campo Contraseña -->
            <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
                <Field
                name="password"
                type="password"
                :class="{'border-red-500': errors.password, 'border-gray-300': !errors.password}"
                class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Ingresa tu contraseña"
                />
                <ErrorMessage name="password" class="text-red-500 text-sm" />
            </div>
    
            <!-- Botón de Iniciar Sesión -->
            <button
                type="submit"
                class="w-full px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
                Iniciar sesión
            </button>
            </form>

            <CustomToast 
                v-if="showToast"
                :message="toastMessage"
                :type="toastType"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '../store/auth';
    import { useRouter } from 'vue-router';
    import { useForm, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';
    import CustomToast from '../components/CustomToast.vue';
    
    // Definimos el store y router
    const authStore = useAuthStore();
    const router = useRouter();
    
    // Estado para manejar el toast
    const showToast = ref(false);
    const toastMessage = ref('');
    const toastType = ref('');
    
    // Definición del esquema de validación con Yup
    const schema = yup.object({
        username: yup.string().required('El nombre de usuario es obligatorio'),
        password: yup.string().required('La contraseña es obligatoria'),
    });
    
    // Definimos el formulario utilizando VeeValidate
    const { handleSubmit, errors } = useForm({
        validationSchema: schema,
        validateOnMount: false,
        validateOnBlur: false,
        validateOnChange: false,
    });
    
    // Función para mostrar el Toast con mensaje y tipo (éxito o error)
    const triggerToast = (message, type) => {
        toastMessage.value = message;
        toastType.value = type;
        showToast.value = true;
        setTimeout(() => {
            showToast.value = false;
        }, 3000);
    };
    
    // Método que se ejecuta cuando se intenta enviar el formulario
    const onSubmit = (values) => {
        // Intentar login en el store
        authStore.login(values.username, values.password);

        if (authStore.user) {
            // Si el usuario se ha autenticado correctamente, redirigir a la página principal (/home)
            router.push('/');
        } else {
            // Mostrar un error en caso de que los datos sean incorrectos
            triggerToast('Usuario o contraseña incorrectos', 'error');
        }
    };
    
    // Método para enviar el formulario
    const submitForm = handleSubmit(onSubmit);
</script>

<style scoped>
  /* Estilos personalizados aquí */
</style>
