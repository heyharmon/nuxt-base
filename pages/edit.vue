<template>
  <NuxtLayout name="three-column">
    <template #top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-slate-700" aria-hidden="true" />
          </button>

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-slate-700" aria-hidden="true" />
          </button>
        </div>

        <nav class="flex items-center gap-x-4">
          <!-- Page title -->
          <div class="text-[15px]">Page 1</div>

          <!-- Badge -->
          <span class="inline-flex items-center gap-x-1 rounded-md bg-indigo-100 text-indigo-700 text-[13px] px-[6px] py-[2px]">
            <svg class="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
            Draft
          </span>
        </nav>

        <div class="flex flex-1 items-center justify-end gap-x-3">
          <!-- Profile dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="-m-1.5 flex items-center p-1.5">
              <img class="h-8 w-8 rounded-full bg-slate-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-slate-50' : '', 'block px-3 py-1 text-sm leading-6 text-slate-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-900/10" aria-hidden="true" />

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-slate-700" aria-hidden="true" />
          </button>

          <!-- Publish -->
          <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 py-[6px] px-[12px] text-[13px] text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-px">
            Publish
          </button>
        </div>
      </div>
    </template>

    <template #left>
      <!-- Panel top -->
      <div class="flex items-center justify-between border-b px-4 py-3">
        <p class="font-medium">Panel title</p>
        <button type="button" class="inline-flex items-center rounded-md border border-slate-300 p-[6px] hover:bg-slate-100 active:translate-y-px">
          <Icon name="heroicons:x-mark" class="h-5 w-5 text-slate-400" aria-hidden="true" />
        </button>
      </div>

      <!-- Content group -->
      <div class="border-b px-4 py-6">
        <div class="flex flex-col gap-y-5">
          <!-- Pretitle -->
          <FormKit type="text" label="Pretitle"/>

          <!-- Title -->
          <FormKit type="text" label="Title"/>

          <!-- Subtitle -->
          <FormKit type="text" label="Subtitle"/>
        </div>
      </div>
      
      <!-- Buttons -->
      <div class="border-b px-4 py-6">
        <span class="block text-xs leading-6 font-medium text-slate-900 mb-1.5">Buttons</span>

        <div class="flex flex-col gap-y-2.5">
          <!-- Button 1 -->
          <div class="group sm:flex sm:items-start sm:justify-between rounded-md border border-slate-300 bg-white hover:bg-slate-50 cursor-pointer px-2 py-3">
            <div class="sm:flex sm:items-center">
              <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
                <Icon name="heroicons:bars-3" class="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>
              
              <div class="truncate">
                <div class="text-xs text-slate-900">Homepage</div>
                <div class="mt-1 text-xs text-slate-400">/homepage</div>
              </div>
            </div>

            <div class="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
              <button type="button" class="invisible group-hover:visible inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
              </button>
            </div>
          </div>

          <!-- Button 2 -->
          <div class="group sm:flex sm:items-start sm:justify-between rounded-md border border-slate-300 bg-white hover:bg-slate-50 cursor-pointer px-2 py-3">
            <div class="sm:flex sm:items-center">
              <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
                <Icon name="heroicons:bars-3" class="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>
              
              <div class="truncate">
                <div class="text-xs text-slate-900">Learn more</div>
                <div class="mt-1 text-xs text-slate-400">/learn-more</div>
              </div>
            </div>

            <div class="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
              <button type="button" class="invisible group-hover:visible inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Background -->
      <div class="border-b px-4 py-6">
        <span class="block text-xs leading-6 font-medium text-slate-900 mb-1.5">Background</span>

        <!-- Image -->
        <div class="group flex rounded-md shadow-sm cursor-pointer">
          <div class="flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-slate-300"></div>

          <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-slate-300 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-xs">
              <div class="text-slate-900">Image title</div>
              <div class="text-slate-400 mt-1">png</div>
            </div>

            <div class="invisible group-hover:visible flex-shrink-0 pr-2">
              <button type="button" class="inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <!-- Overlay -->
        <div class="last:border-t">
          <SwitchGroup as="div" class="flex items-center cursor-pointer">
            <SwitchLabel as="span" class="flex-1 text-xs font-medium text-slate-900 py-4">
              Overlay
            </SwitchLabel>

            <Switch v-model="overlayEnabled" :class="[overlayEnabled ? 'bg-indigo-600' : 'bg-slate-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
              <span aria-hidden="true" :class="[overlayEnabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
            </Switch>
          </SwitchGroup>
        </div>

        <div class="last:border-t">
          <SwitchGroup as="div" class="flex items-center cursor-pointer">
            <SwitchLabel as="span" class="flex-1 text-xs font-medium text-slate-900 py-4">
              Gradient
            </SwitchLabel>

            <Switch v-model="gradientEnabled" :class="[gradientEnabled ? 'bg-indigo-600' : 'bg-slate-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
              <span aria-hidden="true" :class="[gradientEnabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
            </Switch>
          </SwitchGroup>
        </div>

        <!-- <Menu as="div" class="relative">
          <MenuButton class="flex items-center">
            <div class="h-8 w-8 rounded-full bg-white"></div>
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute left-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <a :href="item.href" :class="[active ? 'bg-slate-50' : '', 'block px-3 py-1 text-sm leading-6 text-slate-900']">{{ item.name }}</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu> -->
        
        <!-- Background color -->
        <!-- <FormKit
          type="select"
          label="Background color"
          :options="[
            {label: 'Primary', value: '#fff'},
            {label: 'Secondary', value: '#fff'},
            {label: 'Accent', value: '#fff'},
          ]"
        >
          <template #option="{ option }">
            <div class="formkit-option">
              <div class="h-8 w-8 rounded-full" :style="`background-color: ${option.value};`"></div>
              <span>
                {{ option.label }}
              </span>
            </div>
          </template>
        </FormKit> -->

      </div>
    </template>

    <template #middle>
      <BlockEditor
        v-for="(block, index) in store.page.blocks"
        :key="index"
        :active="block.id === activeBlockId"
        :total="store.page.blocks.length"
        :index="index"
        :block="block"
        @close="closeBlockEditor"
        @delete="deleteBlock"
        @move="moveBlock"
      >
        <Block v-bind="block" @click="toggleActiveBlockId(block.id)"/>
      </BlockEditor>
    </template>

    <template #right>
      <div>Right...</div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const overlayEnabled = ref(false)
const gradientEnabled = ref(false)

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const store = usePageStore()

let activeBlockId = ref('')

await useAsyncData('page', () => store.show('page-1'))

function toggleActiveBlockId(id) {
  activeBlockId.value = id;
}

function closeBlockEditor() {
  activeBlockId.value = ''
}

function deleteBlock(block) {
  console.log('deleting...')
}

function moveBlock({index, block, direction} = {}) {
  console.log('moving...')
}
</script>