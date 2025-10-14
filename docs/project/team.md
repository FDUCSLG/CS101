---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers, VPTeamPageSection
} from 'vitepress/theme'

const orgnization = [
    {
    avatar: 'https://www.github.com/FDUCSLG.png',
    name: 'FDUCSLG',
    desc: '复旦大学开放原子开源社团',
    links: [
      { icon: 'github', link: 'https://github.com/FDUCSLG' },
    ]
  },
]

const members = [
  {
    avatar: 'https://www.github.com/Boreas618.png',
    name: 'Boreas618',
    links: [
      { icon: 'github', link: 'https://github.com/Boreas618' },
    ]
  },
  {
    avatar: 'https://www.github.com/Jingyijun.png',
    name: 'JingYiJun',
    links: [
      { icon: 'github', link: 'https://github.com/Jingyijun' },
    ]
  },
  {
    avatar: 'https://www.github.com/w568w.png',
    name: 'w568w',
    links: [
      { icon: 'github', link: 'https://github.com/w568w' },
    ]
  },{
    avatar: 'https://www.github.com/Zecyel.png',
    name: 'Zecyel',
    links: [
      { icon: 'github', link: 'https://github.com/Zecyel' },
    ]
  },
  {
    avatar: 'https://www.github.com/ShizuhaAki.png',
    name: 'ShizuhaAki',
    links: [
      { icon: 'github', link: 'https://github.com/ShizuhaAki' },
    ]
  },
  {
    avatar: 'https://www.github.com/Jerry-Wu-GitHub.png',
    name: 'Jerry-Wu-GitHub',
    links: [
      { icon: 'github', link: 'https://github.com/Jerry-Wu-GitHub' },
    ]
  },
  {
    avatar: 'https://www.github.com/kaysonyu.png',
    name: 'kaysonyu',
    links: [
      { icon: 'github', link: 'https://github.com/kaysonyu' },
    ]
  },
  {
    avatar: 'https://www.github.com/koowz.png',
    name: 'koowz',
    links: [
      { icon: 'github', link: 'https://github.com/koowz' },
    ]
  },
  {
    avatar: 'https://www.github.com/fduTristin.png',
    name: 'fduTristin',
    links: [
      { icon: 'github', link: 'https://github.com/fduTristin' },
    ]
  },
]

const contributors = [

  {
    avatar: 'https://www.github.com/anzeameol.png',
    name: 'anzeameol',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/anzeameol' },
    ]
  },
  {
    avatar: 'https://www.github.com/ekonwang.png',
    name: 'ekonwang',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/ekonwang' },
    ]
  },
  {
    avatar: 'https://www.github.com/ika-twb.png',
    name: 'ika-twb',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/ika-twb' },
    ]
  },
{
    avatar: 'https://www.github.com/k4if3ng.png',
    name: 'k4if3ng',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/k4if3ng' },
    ]
  },
]
</script>

<VPTeamPage>
<VPTeamPageSection>
    <template #title>组织</template>
    <template #members>
      <VPTeamMembers size="small" :members="orgnization" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>核心成员</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>其他贡献者</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
