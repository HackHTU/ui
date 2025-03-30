<script setup lang="ts">
import { ref } from 'vue';
const isShowCode = ref<boolean>(false);

const props = defineProps<{
    code: string;
}>();

import hljs from 'highlight.js';
const highlightedCode = hljs.highlight(props.code, {
    language: 'javascript',
}).value;

const copyToClipboard = () => {
    navigator.clipboard
        .writeText(props.code)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
};
</script>
<template>
    <div
        class="border-primary m-1 flex flex-col items-start gap-2 rounded-lg border-1 bg-gray-100 p-3 dark:bg-neutral-800">
        <div class="flex gap-1">
            <div
                class="m-1 cursor-pointer rounded-xl border-2 px-2 py-1 font-medium select-none hover:border-neutral-300 hover:bg-neutral-200"
                :class="{
                    'bg-background text-primary border-neutral-900': isShowCode,
                    'bg-background text-primary border-neutral-300':
                        !isShowCode,
                }"
                @click="isShowCode = false">
                演示
            </div>
            <div
                class="m-1 cursor-pointer rounded-xl border-2 px-2 py-1 font-medium select-none hover:border-neutral-300 hover:bg-neutral-200"
                :class="{
                    'bg-background text-primary border-neutral-900':
                        !isShowCode,
                    'bg-background text-primary border-neutral-300': isShowCode,
                }"
                @click="isShowCode = true">
                代码
            </div>
        </div>
        <div
            class="bg-background relative flex min-h-80 w-full resize flex-col items-center justify-center rounded-2xl border p-3">
            <div v-if="isShowCode" class="w-full">
                <pre
                    class="block h-60 max-h-full max-w-full overflow-auto text-wrap dark:invert-25"
                    v-html="highlightedCode"></pre>
                <span class="absolute top-2 left-4">Raw Code</span>
                <button class="absolute top-2 right-4" @click="copyToClipboard">
                    Copy
                </button>
            </div>
            <div
                v-else
                class="rounded-2xl p-2 hover:outline-3 hover:outline-dashed">
                <slot name="view">View</slot>
            </div>
        </div>
    </div>
</template>
