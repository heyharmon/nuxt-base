<template>
  <header class="bg-white">
    <!-- Desktop -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg" alt="" />
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-4">
        <NuxtLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          :class="{
            'text-primary-500': item.href === $route.path,
            'text-gray-900': item.href !== $route.path
          }"
          class="text-sm font-semibold leading-6 rounded-lg px-3 py-2 hover:bg-gray-50"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink 
          to="#" 
          :class="{
            'text-primary-500': '#' === $route.path,
            'text-gray-900': '#' !== $route.path
          }"
          class="text-sm font-semibold leading-6 rounded-lg px-3 py-2 hover:bg-gray-50"
        >
        Log in <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <!-- Mobile menu trigger -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon name="heroicons:bars-3" class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <ClientOnly fallback-tag="div">
      <HeadlessDialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <HeadlessDialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <Icon name="heroicons:x-mark" class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink 
                  v-for="item in navigation" 
                  :key="item.name" 
                  :to="item.href" 
                  :class="{
                    'text-primary-500': item.href === $route.path,
                    'text-gray-900': item.href !== $route.path
                  }"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </HeadlessDialogPanel>
      </HeadlessDialog>
    </ClientOnly>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { 
    name: 'Product',
    href: '/homepage',
    children: [
      { name: 'Analytics', href: '#' },
      { name: 'Engagement', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Automations', href: '#' },
      { name: 'Reports', href: '#' },
    ]
  },
  { 
    name: 'Features',
    href: '/page-1',
  },
  { 
    name: 'Marketplace',
    href: 'https://google.com',
  },
  { 
    name: 'Company',
    href: '#',
  },
]
</script>
