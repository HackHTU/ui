<template>
    <div
        class="border-primary relative m-3 min-w-80 rounded-xl border px-2 py-2 bg-secondary">
        <input
            type="text"
            class="placeholder:text-primary w-full pr-6 pl-2 text-sm outline-none placeholder:font-bold"
            placeholder="Search..."
            v-model="inputValue" />

        <div class="absolute top-3 right-3 size-4 cursor-pointer">
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
