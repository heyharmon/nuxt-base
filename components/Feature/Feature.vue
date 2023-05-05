<template>
  <BlockWrapper :data-theme="theme" v-bind="padding" class="overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary-600">
              Deploy faster
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Look trustworthy online.
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-11">
                <dt class="inline font-semibold text-gray-900">
                  <Icon :name="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-primary-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <BaseImage v-bind="image" class="w-[48rem] sm:w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"/>
      </div>
    </div>
  </BlockWrapper>
</template>

<script setup>
const props = defineProps({
  theme: String,
  image: Object,
  padding: Object,
})

const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: 'heroicons:cloud-arrow-up',
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: 'heroicons:lock-closed',
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: 'heroicons:server',
  },
]
</script>
