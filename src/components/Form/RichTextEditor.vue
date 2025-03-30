<template>
    <div class="w-92 space-y-2 p-3">
        <div class="flex gap-1">
            <!-- bold -->
            <div
                class="inline-block aspect-square h-8 hover:invert"
                @click="bold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        fill="#171717"
                        d="M13.6 27.9V12.1h6.8a6 6 0 0 1 3.9 1.1c.9.8 1.3 1.8 1.3 3.2 0 .8-.1 1.5-.5 2-.3.6-.8 1-1.3 1.2v.1c.8.3 1.4.7 2 1.3.4.6.6 1.4.6 2.4 0 1.4-.5 2.5-1.4 3.3a6 6 0 0 1-4 1.2h-7.4Zm7-3.4c.5 0 1 0 1.4-.3.4-.3.6-.7.6-1.2 0-.4-.2-.8-.6-1-.4-.3-.9-.4-1.5-.4h-3.7v-3.4h3.1c.7 0 1.1-.1 1.4-.3.4-.3.5-.7.5-1.1 0-.5-.1-.8-.4-1-.4-.2-.8-.3-1.4-.3h-2.7v9h3.3Z" />
                </svg>
            </div>
            <!-- italic -->
            <div
                class="inline-block aspect-square h-8 hover:invert"
                @click="italic">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path fill="#171717" d="M20 27.5h-2l2-15h2l-2 15Z" />
                </svg>
            </div>
            <!-- underline -->
            <div
                class="inline-block aspect-square h-8 hover:invert"
                @click="underline">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        fill="#171717"
                        d="M12.9 28.2H27v1H13v-1Zm7.1-4.1c1.1 0 2-.3 2.6-1 .7-.8 1-1.8 1-3v-9.3h2v9.4c0 1.2-.2 2.2-.7 3.1-.4.9-1 1.5-2 2a6 6 0 0 1-3 .7 6 6 0 0 1-2.9-.7 4.9 4.9 0 0 1-2-2c-.4-.9-.6-1.9-.6-3v-9.5h2V20c0 1.3.3 2.3 1 3 .6.8 1.5 1.1 2.6 1.1Z" />
                </svg>
            </div>
            <!-- strikethrough -->
            <div
                class="inline-block aspect-square h-8 hover:invert"
                @click="strikethrough">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <g fill="#000">
                        <path
                            d="M19.8 27.4c-1.1 0-2.1-.3-3-.7-1-.5-1.7-1.2-2.2-2l1.4-1a4.2 4.2 0 0 0 3.8 2.1c.6 0 1.2 0 1.7-.3.5-.2.9-.5 1.2-.8.3-.4.4-.8.4-1.2 0-.5-.1-1-.4-1.2a3 3 0 0 0-1.1-.9l-2.1-.7h-.1l-2.4-.9a4.1 4.1 0 0 1-1.5-1.2c-.4-.5-.6-1.2-.6-2s.2-1.5.6-2c.4-.7 1-1.1 1.8-1.5.7-.3 1.6-.5 2.6-.5s2 .2 2.8.7c.8.4 1.4 1 2 1.8l-1.4 1a5 5 0 0 0-1.5-1.4c-.6-.4-1.3-.5-2-.5-.6 0-1.1 0-1.6.3-.5.2-.9.5-1.2.8-.3.4-.4.7-.4 1.2s.2 1 .5 1.3c.3.4.7.7 1.2.9l2 .6c.9.2 1.7.5 2.3.8a4.3 4.3 0 0 1 1.6 1.2c.4.6.6 1.3.6 2.1s-.2 1.5-.6 2.1c-.4.6-1 1-1.8 1.4-.7.3-1.6.5-2.6.5Z" />
                        <path
                            d="M20.2 19.3c1 .2 1.8.5 2.4.8l1 .6h3.9v-1.4h-7.3Zm-.8 1.4-2.4-.9-.9-.5h-3.6v1.3h6.9Z" />
                    </g>
                </svg>
            </div>
            <!-- reference -->
            <div
                class="inline-block aspect-square h-8 hover:invert"
                @click="reference">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h16c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        fill="#171717"
                        d="M13 10.8c.4 0 .7.3.7.7v17.1c0 .3-.3.6-.6.6a.7.7 0 0 1-.7-.7v-17c0-.4.3-.7.7-.7Z" />
                    <path
                        fill="#71CBFF"
                        d="M13.7 26.6h11.9a2 2 0 0 0 2-2v-9.2a2 2 0 0 0-2-2H13.7v13.2Z" />
                </svg>
            </div>
            <!-- link -->
            <div class="inline-block h-8 w-11 hover:invert" @click="link">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 56 40">
                    <path
                        fill="#FAFAFA"
                        d="M12 1h32c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        stroke="#E5E5E5"
                        stroke-width="2"
                        d="M12 1h32c6 0 11 5 11 11v16c0 6-5 11-11 11H12C6 39 1 34 1 28V12C1 6 6 1 12 1Z" />
                    <path
                        fill="#000"
                        d="M12.7 17.5a20.4 20.4 0 0 0 2.1-4.8l1 .2a18.9 18.9 0 0 1-2.4 5.4l-.7-.8Zm1.8-2.6h3V16h-3v-1Zm-.9 2.9h3.5v1.1h-3.5v-1.1Zm-.5 3.2h4.4v1.2h-4.4V21Zm1.1 5.4c.2-.1.3-.2.3-.4l.1-.4V18h1v7.2l1.5-1.2.2 1.1-2.5 2.1-.6-.9Zm6.3-11.6h6.3V16h-6.3v-1.2Zm.4 4.3a41.3 41.3 0 0 0 1.9-6.3l1 .2a47.3 47.3 0 0 1-1.8 6h4.6v1.2H21v-1Zm2.5-2.3h1.1v8.7h-1v-8.7Zm-3 5.5H27v1h-6.6v-1Zm-1.8-9.1.7 1.6a36 36 0 0 0 .7 1.6l-1 .4a19.9 19.9 0 0 0-.7-1.8 109.7 109.7 0 0 1-.6-1.4l1-.4ZM17 26.4l1.8-2.2v-4.6h-1.1v-1.2h2.1v5.8c.4.7.8 1.2 1.3 1.4.5.3 1.1.4 1.9.4h4.2l-.2 1.2h-4.1a4 4 0 0 1-2.1-.5 4 4 0 0 1-1.5-1.4l-1.7 2.1-.6-1ZM29.1 16h4.4v1H29v-1Zm4.2 5H43v1.1h-9.7v-1Zm.2-2.9h9.4v1h-9.4v-1Zm.5-3.5h8.5v1H34v-1ZM28.7 21a65.5 65.5 0 0 0 4.6-1.7v1.2a4615.7 4615.7 0 0 1-4.3 1.7l-.3-1.2Zm1.1 5.1h.6c.2 0 .3-.2.3-.3l.1-.5V13H32v12.6c0 .4 0 .7-.2 1a1 1 0 0 1-.6.5l-1 .1h-1l-.3-1.2h1Zm3.1.3 4-1.1a5 5 0 0 0 2-1.4 8 8 0 0 0 1.3-2.2h1.2L40 24.5c-.6.6-1.3 1.2-2.4 1.7-1 .5-2.4 1-4.3 1.4l-.4-1.2Zm1.5-2.5a28.1 28.1 0 0 0 2.2-4.4l1.1.3a6.9 6.9 0 0 1-.3.8L36 23.3a47.5 47.5 0 0 1 6.9 3.2l-.6 1a81.3 81.3 0 0 0-7.9-3.6Zm4.7-5.4.9-3.2 1 .2a34.3 34.3 0 0 1-.9 3.3l-1-.3Zm-2.6-3.1.7 2.9-1 .2a57.3 57.3 0 0 0-.5-1.8l-.3-1.2 1.1-.1Zm2-2.5a26.3 26.3 0 0 1 .9 2.2l-1.3.2a29.4 29.4 0 0 0-.9-2.1l1.3-.3Z" />
                </svg>
            </div>
        </div>
        <hr class="border-0.5 text-secondary" />
        <div class="flex w-full items-center gap-2">
            <textarea
                ref="input"
                class="bg-background h-10 w-full resize-none rounded-xl border-1 pt-2 pl-2 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                v-model="inputValue">
            </textarea>
            <!-- Send -->
            <div
                class="bg-primary flex aspect-square size-10 grow-0 cursor-pointer items-center justify-center rounded-xl hover:invert">
                <svg
                    class="text-background dark:text-primary size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 10 3-3 3 3m-3-3v6m-8-3a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';

let input = useTemplateRef('input');
function wrapText(prefix: string, suffix: string) {
    const inputElem = input.value;
    if (!inputElem) return;

    const start = inputElem.selectionStart || 0;
    const end = inputElem.selectionEnd || 0;
    const selectedText = inputElem.value.substring(start, end);

    if (selectedText) {
        // 有选中文本，包装选中的文本
        const wrappedText = prefix + selectedText + suffix;
        inputElem.value =
            inputElem.value.substring(0, start) +
            wrappedText +
            inputElem.value.substring(end);
        inputValue.value = inputElem.value;

        // 设置光标位置到包装后文本的末尾
        const newPosition = start + wrappedText.length;
        inputElem.setSelectionRange(newPosition, newPosition);
    } else {
        // 没有选中文本，在光标位置插入
        const insertText = prefix + suffix;
        inputElem.value =
            inputElem.value.substring(0, start) +
            insertText +
            inputElem.value.substring(end);
        inputValue.value = inputElem.value;

        // 设置光标位置到前缀后面
        const newPosition = start + prefix.length;
        inputElem.setSelectionRange(newPosition, newPosition);
    }

    inputElem.focus();
}

function bold() {
    wrapText('**', '**');
}

function italic() {
    wrapText('*', '*');
}

function underline() {
    wrapText('<u>', '</u>');
}

function strikethrough() {
    wrapText('~~', '~~');
}

function link() {
    wrapText('[', '](url)');
}

function reference() {
    wrapText('\n > ', ' ');
}

const inputValue = ref('');
</script>
