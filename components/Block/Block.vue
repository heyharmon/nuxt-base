<template>
  <component
    :is="component"
    v-bind="data"
  />
</template>

<script setup>
const props = defineProps({
  group: String,
  name: String,
  data: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`@/components/${props.group}/${props.name}.vue`))
})
</script>