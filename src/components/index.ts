import { defineAsyncComponent } from 'vue';

// Display Components
import CodeBlockCode from './Display/CodeBlock.vue?raw';
import CollapseCode from './Display/Collapse.vue?raw';
import ContextMenuCode from './Display/ContextMenu.vue?raw';
import MenuCode from './Display/Menu.vue?raw';
import NotificationCode from './Display/Notification.vue?raw';
import PopOverCode from './Display/PopOver.vue?raw';
import TagCode from './Display/Tag.vue?raw';
import TooltipCode from './Display/Tooltip.vue?raw';

// Form Components
import ButtonCode from './Form/Button.vue?raw';
import InputCode from './Form/Input.vue?raw';
import RichTextEditorCode from './Form/RichTextEditor.vue?raw';
import SearchCode from './Form/Search.vue?raw';
import SelectCode from './Form/Select.vue?raw';

// Navigation Components
import FooterCode from './Navigation/Footer.vue?raw';
import NavigationBarCode from './Navigation/NavigationBar.vue?raw';
import SidebarCode from './Navigation/Sidebar.vue?raw';
import WidgetCode from './Navigation/Widget.vue?raw';

// Official Components
import LogoVCode from './Official/logo-v.vue?raw';
import LogoHCode from './Official/logo-h.vue?raw';

interface componentGroup {
    title: string;
    components: ComponentInfo[];
}

interface ComponentInfo {
    name: string;
    description?: string;
    code: string;
    view: ReturnType<typeof defineAsyncComponent>;
}

export const components: componentGroup[] = [
    {
        title: 'Display Components',
        components: [
            {
                name: 'CodeBlock',
                description: '用于显示代码块的组件，支持复制和语法高亮。您需要首先安装 hightlight.js (npm i highlight.js)。',
                code: CodeBlockCode,
                view: defineAsyncComponent(
                    () => import('./Display/CodeBlock.vue')
                ),
            },
            {
                name: 'Collapse',
                code: CollapseCode,
                view: defineAsyncComponent(
                    () => import('./Display/Collapse.vue')
                ),
            },
            {
                name: 'ContextMenu',
                code: ContextMenuCode,
                view: defineAsyncComponent(
                    () => import('./Display/ContextMenu.vue')
                ),
            },
            {
                name: 'Menu',
                code: MenuCode,
                view: defineAsyncComponent(() => import('./Display/Menu.vue')),
            },
            {
                name: 'Notification',
                code: NotificationCode,
                view: defineAsyncComponent(
                    () => import('./Display/Notification.vue')
                ),
            },
            {
                name: 'PopOver',
                code: PopOverCode,
                view: defineAsyncComponent(
                    () => import('./Display/PopOver.vue')
                ),
            },
            {
                name: 'Tag',
                code: TagCode,
                view: defineAsyncComponent(() => import('./Display/Tag.vue')),
            },
            {
                name: 'Tooltip',
                code: TooltipCode,
                view: defineAsyncComponent(
                    () => import('./Display/Tooltip.vue')
                ),
            },
        ],
    },
    {
        title: 'Form Components',
        components: [
            {
                name: 'Button',
                code: ButtonCode,
                view: defineAsyncComponent(() => import('./Form/Button.vue')),
            },
            {
                name: 'Input',
                code: InputCode,
                view: defineAsyncComponent(() => import('./Form/Input.vue')),
            },
            {
                name: 'RichTextEditor',
                code: RichTextEditorCode,
                view: defineAsyncComponent(
                    () => import('./Form/RichTextEditor.vue')
                ),
            },
            {
                name: 'Search',
                code: SearchCode,
                view: defineAsyncComponent(() => import('./Form/Search.vue')),
            },
            {
                name: 'Select',
                code: SelectCode,
                view: defineAsyncComponent(() => import('./Form/Select.vue')),
            },
        ],
    },
    {
        title: 'Navigation Components',
        components: [
            {
                name: 'Footer',
                code: FooterCode,
                view: defineAsyncComponent(
                    () => import('./Navigation/Footer.vue')
                ),
            },
            {
                name: 'NavigationBar',
                code: NavigationBarCode,
                view: defineAsyncComponent(
                    () => import('./Navigation/NavigationBar.vue')
                ),
            },
            {
                name: 'Sidebar',
                code: SidebarCode,
                view: defineAsyncComponent(
                    () => import('./Navigation/Sidebar.vue')
                ),
            },
            {
                name: 'Widget',
                code: WidgetCode,
                view: defineAsyncComponent(
                    () => import('./Navigation/Widget.vue')
                ),
            },
        ],
    },
    {
        title: 'Official Components',
        components: [
            {
                name: 'logo-v.svg',
                code: LogoVCode,
                view: defineAsyncComponent(
                    () => import('./Official/logo-v.vue')
                ),
            },
            {
                name: 'logo-h.svg',
                code: LogoHCode,
                view: defineAsyncComponent(
                    () => import('./Official/logo-h.vue')
                ),
            },
        ],
    },
];
