<template>
  <p
    :class="`
      ${baseClasses} 
      ${sizeClasses[size]}
    `"
  >
    <slot></slot>
  </p>
</template>
  
<script setup>
const props = defineProps({
  size: {
      type: String,
      default: 'base' // xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
    },
  isTruncated: Boolean
})

const baseClasses = ``

const sizeClasses = {
	'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
}
</script>
