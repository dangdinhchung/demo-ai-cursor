<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Placeholder for blog posts -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-2">Chưa có bài viết</h3>
        <p class="text-gray-600">Các bài viết sẽ sớm được cập nhật.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 