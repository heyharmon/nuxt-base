<template>
  <component 
    v-for="(block, index) in blocks" 
    :is="block.component"
    v-bind="block.data"
    :key="index"
  />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
// import { usePageStore } from '@/stores/pageStore'

const route = useRoute()
const store = usePageStore()

// const { data } = await useAsyncData('page', () => store.show(route.params.slug))
await useAsyncData('page', () => store.show(route.params.slug))
// const {data: page, pending, refresh} = await useAsyncData('page', () => $fetch(`/api/pages?slug=${route.params.slug}`))

let blocks = store.page.blocks.map((block) => {
  const {id, name, group, data} = block;
  
  return {
    id: id,
    name: name,
    group: group,
    data: data,
    component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
  }
})

// let blocks = computed(() => {
//   return store.page.blocks.map((block) => {
//     const {name, group, data} = block;
    
//     return {
//       name: name,
//       group: group,
//       data: data,
//       component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
//     }
//   })
// })

useHead({
  title: store.page.title
})
</script>