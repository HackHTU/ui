<template>
    <div class="m-3 flex w-80 max-w-full flex-col gap-3">
        <div
            v-for="option in options"
            :key="option.title"
            @click="selectOption(option)"
            class="border-primary flex cursor-pointer items-start rounded-xl border px-4 py-3 shadow-md">
            <span
                class="relative mr-2 flex h-8 w-8 items-center justify-center">
                <svg
                    v-if="selectedValue.title === option.title"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-6"
                    fill="none"
                    viewBox="0 0 48 48">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M40 14 20 34 8 22" />
                </svg>
            </span>
            <div>
                <div class="font-bold">{{ option.title }}</div>
                <div class="text-xs opacity-80">{{ option.description }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options: Array<{ title: string; description: string }> = [
    { title: 'Option 1', description: 'Description for option 1' },
    { title: 'Option 2', description: 'Description for option 2' },
    { title: 'Option 3', description: 'Description for option 3' },
];

const selectedValue = ref(options[0]);
function selectOption(option: { title: string; description: string }) {
    selectedValue.value = option;
}
</script>
