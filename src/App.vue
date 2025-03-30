<script setup lang="ts">
import CodeView from './CodeView.vue';
import { components } from './components/index.ts';
</script>
<template>
    <h1 class="my-4 text-3xl font-black">HackHTU UI</h1>

    <div class="rounded-2xl bg-gray-200 p-4 dark:bg-gray-700">
        <p>
            这里是 HackHTU 官方 UI
            组件库，这是一个无头组件库，意味着这不是一个传统意义上的 NPM
            包，在使用时你只需将代码复制过去即可，因此您可以自行定制其外观和颜色。
        </p>

        <p>
            我们默认的环境是 TailwindCSS + Vue
            ，在这个环境下您无需做过多更改，但如果您在使用 React
            或其他框架，只需要调整除 HTML 与样式以外的部分内容即可。
        </p>
    </div>

    <p class="mx-2 my-5 space-x-2">
        See Also:
        <a class="text-blue-700" href="https://github.com/HackHTUTeam/ui"
            >GitHub 仓库</a
        >
        <a
            class="text-blue-700"
            href="https://www.figma.com/design/dg892ShubXBBfJQ8PANbMk/UI?node-id=0-1&t=voNFXUZztkQaqr5C-1"
            >Figma 设计文件</a
        >
    </p>

    <details class="mt-8 w-full">
        <summary class="my-4 text-xl font-bold">使用说明</summary>
        <p>
            使用前，您需要安装
            <a
                class="text-blue-700"
                href="https://tailwindcss.com/docs/installation/"
                target="_blank"
                rel="noopener noreferrer">
                TailwindCSS </a
            >(>=4.0) 的依赖
        </p>

        <p>
            如果您使用的是最流行的打包工具
            <span class="font-mono">Vite</span> ，您可以参考以下流程。
        </p>
        <pre
            class="m-2 bg-gray-100 p-2 dark:bg-gray-700"><code class="text-wrap">{{  `npm install tailwindcss @tailwindcss/vite`}}</code></pre>
        <p>
            然后，您需要在
            <span class="font-mono">vite.config.ts</span> 中添加 TailwindCSS
            的插件
        </p>
        <pre
            class="m-2 bg-gray-100 p-2 dark:bg-gray-700"><code class="text-wrap">{{ `import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})` }}</code></pre>

        <p>
            接着，您需要在您的网站 CSS （默认在
            <span class="font-mono">src/style.css</span>）中引入 TailwindCSS
            的样式文件，字体和预先定义的主题色变量。
        </p>
        <pre
            class="m-2 bg-gray-100 p-2 dark:bg-gray-700"><code class="text-wrap">{{ `@import url('https://cdn-font.hyperos.mi.com/font/css?family=MiSans_VF:VF:Chinese_Simplify,Latin&display=swap');
@import 'tailwindcss';

@theme {
    --color-theme: #71cbff; /* Theme color */
    --color-primary: light-dark(#171717, #fafafa); /* Primary color */
    --color-secondary: light-dark(#f0f0f0, #404040); /* Secondary color */
    --color-background: light-dark(#fafafa, #171717); /* Background color */

    --font-sans:
        'MiSans VF', 'MiSans', ui-sans-serif, system-ui, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
}

:root {
    color-scheme: light dark;
    @apply bg-background text-primary;
}` }}</code></pre>

        <p>最后，在下方查看组件，复制其代码即可。</p>
    </details>

    <details v-for="group in components" :key="group.title" class="mt-8 w-full">
        <summary class="mb-4 border-b pb-2 text-xl font-semibold">
            {{ group.title }}
        </summary>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div v-for="component in group.components" :key="component.name">
                <h3 class="mt-6 mb-2 text-lg font-medium">
                    {{ component.name }}
                </h3>
                <p>
                    {{ component?.description }}
                </p>
                <CodeView :code="component.code">
                    <template #view>
                        <component :is="component.view" />
                    </template>
                </CodeView>
            </div>
        </div>
    </details>

    <footer class="mt-8 text-center text-sm text-gray-500">
        Made with ❤️ by HackHTU Team. Preview Version.
    </footer>
</template>
