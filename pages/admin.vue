<template>
  <NuxtLayout name="two-column">
    <template #left>
      <AdminNavigation/>
    </template>

    <template #top>
      <AdminTopBar/>
    </template>

    <template #right>
      <div class="px-4 sm:px-6 lg:px-8">
        The right side...
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
</script>