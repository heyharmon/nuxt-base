<template>
  <section :class="[PaddingTop[paddingTop], PaddingBottom[paddingBottom]]" class="relative bg-white">
    <slot/>
  </section>
</template>

<script setup>
import { PaddingTop, PaddingBottom } from '@/dictionaries/Padding.js'

const props = defineProps({
  paddingTop: {
    type: String,
    default: '5xl',
  },
  paddingBottom: {
    type: String,
    default: '5xl',
  },
})

// const PaddingTop = {
//     'sm': 'pt-10',
//     'md': 'pt-20',
//     'base': 'pt-32',
//     'lg': 'pt-36',
// }

// const PaddingBottom = {
//     'sm': 'pb-10',
//     'md': 'pb-20',
//     'base': 'pb-32',
//     'lg': 'pb-36',
// }

// const paddingTop = computed(() => {
//   return PaddingTop[props.padding_top]
// })

// const paddingBottom = computed(() => {
//   return PaddingBottom[props.padding_bottom]
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const appendToSet = (str, set) => {
//   if (set.trim().length) {
//     set += ` ${str}`;
//   } else {
//     set = `${str}`;
//   }
//   return set;
// };

// const classNames = computed(() => {
//   return [
//     'pt-' + props.paddingTop,
//     'pb-' + props.paddingBottom
//   ]
// })
</script>
  