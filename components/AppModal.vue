<template>
  <teleport to='body'>
    <div class="relative z-10">
      <!-- Backdrop -->
      <div @click="emit('close')" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <!-- The modal -->
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-12 text-center sm:items-center">
            <!-- Modal content -->
            <div 
              :class="sizeClasses[size]"
              class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:w-full"
            >
              <!-- Modal header -->
              <div class="flex items-center justify-between border-b px-6 py-3">
                <p v-if="title" class="text-lg font-medium">{{ title }}</p>
                <button @click="emit('close')" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
                  <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
              </div>

              <!-- Modal body -->
              <slot/>
            </div>
          </div>
        </div>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    size: {
      type: String,
      default: 'xl' // sm, base, lg
    },
})

const sizeClasses = {
	sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  full: '',
}

const emit = defineEmits(['close'])
</script>