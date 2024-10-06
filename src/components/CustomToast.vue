<template>
    <div v-if="visible" :class="['fixed', 'top-5', 'right-5', 'max-w-xs', 'p-4', 'rounded-md', 'shadow-lg', toastTypeClass]">
        <div class="flex items-center">
            <div class="mr-3">
                <span v-if="type === 'success'" class="text-green-600">✔️</span>
                <span v-if="type === 'error'" class="text-red-600">⚠️</span>
            </div>
            <div>
                <p class="font-medium text-sm">{{ message }}</p>
            </div>
            <button @click="hideToast" class="ml-auto text-gray-500 hover:text-gray-800">&times;</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';
    import { defineProps, defineEmits } from 'vue';
    
    // Definimos las propiedades que recibe el componente
    const props = defineProps({
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            validator(value) {
                return ['success', 'error'].includes(value);
            },
        },
    });
    
    // Definimos los eventos que puede emitir el componente
    const emit = defineEmits(['hide']);
    
    // Reactive ref to control visibility of toast
    const visible = ref(false);
    
    // Computed property to determine the class based on type
    const toastTypeClass = computed(() => {
        return props.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    });
    
    // Method to show the toast
    const showToast = () => {
        visible.value = true;
        setTimeout(() => {
            hideToast();
        }, 3000);
    };
    
    // Method to hide the toast
    const hideToast = () => {
        visible.value = false;
        emit('hide'); // Emit an event if needed
    };
    
    // Watch for changes in visibility and auto-hide after 3 seconds
    watch(visible, (newVal) => {
        if (newVal) {
            setTimeout(() => {
                hideToast();
            }, 3000);
        }
    });
    
    // Auto-show toast on mount
    showToast();
</script>
<style scoped>
    .toast {
        transition: opacity 0.5s ease;
    }
</style>