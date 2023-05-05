<template>
  <!-- Wrap -->
  <div class="flex-grow overflow-auto">
    <!-- Wrap inner -->
    <div class="flex h-full">

      <!-- Left -->
      <aside class="w-80 flex-shrink-0 overflow-auto bg-light-95 py-3 dark:bg-dark-16">
        <div class="border-b border-light-91 px-3 pb-2">
          <a class="mx-1 mb-4 block h-5 w-5 rounded p-1 text-wedges-gray-400 hover:bg-light-91" href="https://app.lemonsqueezy.com/dashboard">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-transparent stroke-current"><path d="M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          
          <div class="rounded hover:bg-light-91">
            <div class="flex items-center px-2 py-1">
              <label class="form-label mb-0 flex-grow">Enable your store</label>
            </div>
            <p class="form-input-desc m-0 px-2 pb-1"> Display your store or hide it and redirect to your website instead.</p>
          </div>
        </div>
      </aside>

      <!-- Right -->
      <section class="relative mx-auto w-full max-w-200 overflow-auto">
        <div class="relative min-h-screen px-5 pt-3 pb-16">
          <div>Header</div>

          <PreviewBrowser>
            <Block 
              v-for="(block, index) in store.page.blocks" 
              :key="index" 
              v-bind="block" 
            />
          </PreviewBrowser>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const store = usePageStore()

await useAsyncData('page', () => store.show('page-1'))
</script>