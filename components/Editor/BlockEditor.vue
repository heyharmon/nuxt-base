<template>
  <div class="relative">
    <!-- Outline -->
    <div v-if="active" class="z-10 h-full w-full absolute rounded-xl border-2 border-indigo-500">

      <!-- Controls -->
      <div class="flex justify-between w-full p-3">
        <div>
          <button class="text-xs font-semibold inline-block py-2 px-3 rounded-md text-slate-900 bg-white shadow-md hover:bg-slate-50 active:translate-y-px">
            <Icon name="heroicons:swatch" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div>
          <span class="isolate inline-flex rounded-md shadow-md mr-2">
            <button
              @click="emitMove('up')"
              :disabled="index < total - 1"
              class="relative text-xs font-semibold inline-block py-2 px-3 border-r rounded-l-md text-slate-900 bg-white hover:bg-slate-50 active:translate-y-px"
            >
              <Icon name="heroicons:arrow-up" class="h-5 w-5" aria-hidden="true" />
              {{ index }}
            </button>

            <button
              @click="emitMove('down')"
              :disabled="index > 0"
              class="relative text-xs font-semibold inline-block py-2 px-3 rounded-r-md text-slate-900 bg-white hover:bg-slate-50 active:translate-y-px disabled:opacity-25 disabled:pointer-events-none"
            >
              <Icon name="heroicons:arrow-down" class="h-5 w-5" aria-hidden="true" />
              {{ index }}
            </button>
          </span>

          <!-- <button
            v-if="index < total - 1"
            @click="emitMove('down')"
            class="text-xs font-semibold inline-block py-2 px-3 rounded-md text-slate-900 bg-white shadow hover:bg-slate-50 active:translate-y-px mr-2"
          >
            <Icon name="heroicons:arrow-down" class="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            v-if="index > 0"
            @click="emitMove('up')"
            class="text-xs font-semibold inline-block py-2 px-3 rounded-md text-slate-900 bg-white shadow hover:bg-slate-50 active:translate-y-px mr-2"
          >
            <Icon name="heroicons:arrow-up" class="h-5 w-5" aria-hidden="true" />
          </button> -->

          <button
            @click="emitDelete()"
            class="text-xs font-semibold inline-block py-2 px-3 rounded-md text-slate-900 bg-white shadow hover:bg-slate-50 active:translate-y-px mr-2"
          >
            <Icon name="heroicons:trash" class="h-5 w-5" aria-hidden="true" />
          </button>
          
          <button
            @click="emitClose()"
            class="text-xs font-semibold inline-block py-2 px-3 rounded-md text-slate-900 bg-white shadow hover:bg-slate-50 active:translate-y-px ml-12"
          >
            <Icon name="heroicons:x-mark" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean,
  total: Number,
  index: Number,
  block: Object,
})

const emit = defineEmits(['move', 'delete', 'close'])

function emitMove(direction) {
  emit('move', {
    index: props.index,
    block: props.block,
    direction: direction,
  });
}

function emitDelete() {
 emit('delete', props.block)
}

function emitClose() {
 emit('close')
}
</script>