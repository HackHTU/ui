<script setup lang="ts">
import { computed, reactive } from 'vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const codeConfig = reactive({
    language: 'javascript',
    codeString: `function greet(name) {
    return \`Hello, \${name}!\`;
}`,
});

const highlightedCode = computed(() => {
    return hljs.highlight(codeConfig.codeString, {
        language: codeConfig.language,
        ignoreIllegals: true,
    }).value;
});

const copyToClipboard = () => {
    navigator.clipboard
        .writeText(codeConfig.codeString)
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
        class="text-background min-w-80 overflow-hidden rounded-xl bg-neutral-600">
        <div class="flex items-center justify-between px-4 py-2 font-bold">
            <div class="flex items-center gap-2">
                <svg
                    class="size-5"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M32 12L44 24L32 36M16 36L4 24L16 12"
                        stroke="currentColor"
                        stroke-width="6"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span class="capitalize">{{ codeConfig.language }}</span>
            </div>

            <div
                class="flex cursor-copy items-center gap-2 select-none"
                @click="copyToClipboard">
                <span>复制</span>
                <svg
                    class="size-5"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 30H40C41.0609 30 42.0783 29.5786 42.8284 28.8284C43.5786 28.0783 44 27.0609 44 26V8C44 6.93913 43.5786 5.92172 42.8284 5.17157C42.0783 4.42143 41.0609 4 40 4H22C20.9391 4 19.9217 4.42143 19.1716 5.17157C18.4214 5.92172 18 6.93913 18 8V10M26 18H8C5.79086 18 4 19.7909 4 22V40C4 42.2091 5.79086 44 8 44H26C28.2091 44 30 42.2091 30 40V22C30 19.7909 28.2091 18 26 18Z"
                        stroke="currentColor"
                        stroke-width="6"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>

        <pre
            class="bg-neutral-700 p-4"><code v-html="highlightedCode"></code></pre>
    </div>
</template>
