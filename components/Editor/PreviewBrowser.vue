<template>
  <div class="relative min-h-screen overflow-hidden rounded-xl border drop-shadow-lg">
    <div class="relative flex items-center justify-between z-20 h-[50px] border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter">
      <div class="w-16 mx-4">
        <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.75" fill="#ED6A5E" stroke="#CF594E" stroke-width="0.5"></circle>
          <circle cx="26" cy="6" r="5.75" fill="#F4BD50" stroke="#D79F3E" stroke-width="0.5"></circle>
          <circle cx="46" cy="6" r="5.75" fill="#61C355" stroke="#52A63D" stroke-width="0.5"></circle>
        </svg>
      </div>
      
      <div class="w-full min-w-xl truncate rounded-2xl bg-black bg-opacity-5 text-gray-600 text-center text-xs leading-7">https://heyharmon.lemonsqueezy.com</div>

      <div class="w-10 ml-4">
        <Icon name="heroicons:chevron-down" class="h-5 w-5" aria-hidden="true" />
      </div>
    </div>

    <div class="absolute inset-0 pt-[50px] z-10 bg-white">
      <slot />
    </div>
  </div>
</template>

<script setup></script>