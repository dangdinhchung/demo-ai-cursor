<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Liên hệ</h1>
    <div class="max-w-2xl mx-auto">
      <div class="bg-white rounded-lg shadow-md p-6">
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Nội dung</label>
            <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
              Gửi tin nhắn
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 