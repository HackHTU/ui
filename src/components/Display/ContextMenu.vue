<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue';
const open = ref(false);
const menuRef = useTemplateRef('menuRef');

function handleClickOutside(event: MouseEvent) {
    if (
        open.value &&
        menuRef.value &&
        !menuRef.value.contains(event.target as Node)
    ) {
        open.value = false;
    }
}

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});
onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>
<template>
    <div class="relative inline-block text-left" ref="menuRef">
        <button
            class="border-primary flex bg-background items-center gap-2 rounded-xl border-2 px-4 py-1 outline-none"
            @click="open = !open">
            Menu
            <svg
                class="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18">
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
        </button>

        <div
            v-if="open"
            class="shadow-3xl bg-background absolute mt-2 w-fit space-y-2 rounded-xl border border-gray-200 p-3 shadow-lg">
            <button
                class="hover:invert-25 bg-background w-full rounded-3xl px-3 py-1 text-nowrap"
                @click="open = false">
                Button 1
            </button>
            <button
                class="hover:invert-25 bg-background w-full rounded-3xl px-3 py-1 text-nowrap"
                @click="open = false">
                Button 2
            </button>

            <hr class="border-gray-200" />

            <button
                class="hover:invert-25 bg-background w-full rounded-3xl px-3 py-1 text-nowrap"
                @click="open = false">
                Button 3
            </button>
        </div>
    </div>
</template>
