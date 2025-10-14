<script setup>
// extract ?path=... argument
const paramsString = window.location.search;
const params = new URLSearchParams(paramsString)
const path = params.get('path')

// fallback if not present
const editUrl = path
  ? `https://github.com/${path}`
  : 'https://github.com/FDUCSLG/CS101'
</script>

<template>
  <a
    v-if="editUrl"
    :href="editUrl"
    target="_blank"
    class="vp-button"
    style="display:inline-block;padding:0.4em 1em;
           background:#0366d6;color:white;
           border-radius:4px;text-decoration:none;">
    开始编辑
  </a>
</template>
