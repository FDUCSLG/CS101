// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h, type Plugin } from 'vue';
import { useData, useRoute } from 'vitepress';
import type { EnhanceAppContext } from 'vitepress';


import { NolebaseGitChangelogPlugin, Options } from '@nolebase/vitepress-plugin-git-changelog/client';
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties';
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu, } from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client';
import { InjectionKey } from '@nolebase/vitepress-plugin-git-changelog/client';
// import { ShareButton } from '@theojs/lumen';//不好看
import { Footer } from '@theojs/lumen'
import { Footer_Data } from '../data/footerData.ts';
import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@shikijs/vitepress-twoslash/style.css';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import 'vitepress-plugin-codeblocks-fold/style/index.css';
import '@nolebase/vitepress-plugin-page-properties/client/style.css';
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css';
import Confetti from "./components/Confetti.vue";
import EditButton from "./components/EditButton.vue";
import Hero from '../theme/Layout.vue';
import NCard from './components/NCard.vue';

import './custom.css';
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'aside-outline-before': () => h(ShareButton),
      'home-hero-before': () => h(Hero),
      'layout-bottom': () => h(Footer, { Footer_Data }),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [h(NolebaseHighlightTargetedHeading)],
    })
  },
  enhanceApp({ app }) {
    app.component("Confetti", Confetti); //注册全局组件
    app.component("EditButton", EditButton);
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        disableHelp: true,
        defaultToggle: true,
      }
    } as Options);
    app.use(TwoslashFloatingVue);
    app.component('NCard', NCard);
    app.use(TwoslashFloatingVue as unknown as Plugin);
    app.use(NolebaseGitChangelogPlugin);
    app.provide(InjectionKey, {
      hideChangelogNoChangesText: true,
      commitsRelativeTime: true,
      displayAuthorsInsideCommitLine: true,
      hideContributorsHeader: true,
      hideChangelogHeader: true
    });
    app.use(NolebaseInlineLinkPreviewPlugin as Plugin);
    app.use(NolebasePagePropertiesPlugin<{
      progress: number
    }>() as Plugin, {
      properties: {
        'zh-CN': [
          {
            key: 'wordCount',
            type: 'dynamic',
            title: '字数',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: '阅读时间',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'zhCN',
            },
          },
          {
            key: 'updatedAt',
            type: 'datetime',
            title: '更新时间',
            formatAsFrom: true,
            dateFnsLocaleName: 'zhCN',
          },
        ],
      },
    });
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();
    codeblocksFold({ route, frontmatter }, true, 400);
  }
}