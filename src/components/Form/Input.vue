<template>
    <div
        class="border-primary bg-secondary m-3 flex max-w-full items-center rounded-xl border-1 px-2 py-2">
        <div class="px-1 select-none">
            <span>姓名</span>
        </div>

        <input
            type="text"
            class="placeholder:text-secondary grow text-right text-sm outline-none"
            placeholder="Enter text..."
            v-model="inputValue" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
