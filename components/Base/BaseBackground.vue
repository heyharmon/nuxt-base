<template>
  <div>
    <!-- Background image-->
    <div v-if="image" aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <BaseImage v-bind="image" class="h-full w-full object-cover object-center"/>
    </div>

    <!-- Overlay -->
    <div v-if="overlay" aria-hidden="true" class="absolute inset-0 bg-primary-100 opacity-70"/>

    <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden bg-[url('@/public/images/blurry-gradient-haikei.svg')] bg-cover bg-center opacity-30"></div> -->
  </div>
</template>

<script setup>
const props = defineProps({
  image: Object,
  overlay: {
    type: Boolean,
    default: false
  }
})
</script>
  