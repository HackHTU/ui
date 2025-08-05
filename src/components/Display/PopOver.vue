<template>
    <div
        v-if="isOpen"
        class="border-primary bg-background relative m-1 flex h-60 max-h-full w-125 max-w-full flex-col items-start justify-between gap-3 rounded-xl border px-8 pt-6 pb-3 shadow-2xl">
        <div class="space-y-2">
            <span class="block text-2xl font-semibold">Title</span>
            <p>Description</p>
        </div>
        <div class="flex w-full items-center justify-between">
            <div
                class="border-primary text-primary bg-background m-1 rounded-xl border-2 px-2 py-1 select-none hover:invert">
                Button
            </div>
            <div
                class="hover:text-primary m-1 cursor-pointer rounded-xl border border-red-600 bg-red-600 px-2 py-1 text-neutral-50 select-none hover:border-neutral-300 hover:bg-neutral-200">
                Button
            </div>
        </div>

        <div class="absolute top-3 right-3 size-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 35 35"
                @click="isOpen = false">
                <path
                    fill="currentColor"
                    d="M11 26.8 9.2 25l7-7-7-7L11 9.2l7 7 7-7 1.8 1.8-7 7 7 7-1.8 1.8-7-7-7 7Z" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let isOpen = ref(true);
</script>
