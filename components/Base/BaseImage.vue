<template>
  <NuxtImg :src="src" :alt="alt" :format="format" :width="width" :height="height"/>
</template>
  
<script setup>
const props = defineProps({
    src: {
        type: String,
        default: 'https://dummyimage.com/1200x800/f0f4f8/111827'
    },
    alt: {
        type: String,
        default: null
    },
    format: {
        type: String,
        default: null
    },
    width: {
        type: String,
        default: null
    },
    height: {
        type: String,
        default: null
    },
})
</script>
