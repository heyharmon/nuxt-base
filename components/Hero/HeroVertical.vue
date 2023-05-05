<template>
  <BlockWrapper :data-theme="theme" v-bind="padding" class="isolate">
    <BaseBackground v-bind="background"/>
    
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <BaseHeading as="h1">{{ title }}</BaseHeading>
          <BaseText size="xl" class="mt-6 leading-9 text-gray-600">{{ subtitle }}</BaseText>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <BaseButton to="/homepage" label="Homepage"/>
            <BaseButton variant="text" to="/page-1" label="Learn more" icon="heroicons:arrow-right"/>
          </div>
        </div>

        <div class="mt-16 flow-root sm:mt-24">
          <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <BaseImage v-bind="image" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-gray-900/10"/>
          </div>
        </div>
      </div>
  </BlockWrapper>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: Object,
  background: Object,
  theme: String,
  overlay: Boolean,
  padding: Object,
})
</script>
