<template>
  <div>
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[18rem] lg:flex-col">
      <slot name="left" />
    </div>

    <div class="lg:pl-[18rem]">
      <slot name="top" />

      <main class="py-10">
        <slot name="right" />
      </main>
    </div>
  </div>
</template>