<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
</script>
<template>
    <div
        class="relative inline-block"
        @mouseenter="show = true"
        @mouseleave="show = false">
        <span>Hover me</span>

        <div
            v-if="show"
            class="bg-primary text-background absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap">
            <div
                class="border-t-primary absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-r-transparent border-l-transparent"></div>
            Top Tooltip
        </div>
        <div
            v-if="show"
            class="bg-primary text-background absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap">
            <div
                class="border-b-primary absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-4 border-b-4 border-l-4 border-r-transparent border-l-transparent"></div>
            Bottom Tooltip
        </div>
        <div
            v-if="show"
            class="bg-primary text-background absolute top-1/2 right-full z-50 mr-2 -translate-y-1/2 rounded px-2 py-1 text-xs whitespace-nowrap">
            <div
                class="border-l-primary absolute top-1/2 left-full h-0 w-0 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent"></div>
            Left Tooltip
        </div>
        <div
            v-if="show"
            class="bg-primary text-background absolute top-1/2 left-full z-50 ml-2 -translate-y-1/2 rounded px-2 py-1 text-xs whitespace-nowrap">
            <div
                class="border-r-primary absolute top-1/2 right-full h-0 w-0 -translate-y-1/2 border-t-4 border-r-4 border-b-4 border-t-transparent border-b-transparent"></div>
            Right Tooltip
        </div>
    </div>
</template>
