<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Các cuộc thi</h1>
      <div class="flex space-x-4">
        <button class="px-4 py-2 text-gray-600 hover:text-gray-900">
          <i class="fas fa-filter mr-2"></i>
          Lọc
        </button>
        <button class="px-4 py-2 text-gray-600 hover:text-gray-900">
          <i class="fas fa-sort mr-2"></i>
          Sắp xếp
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Exam Card 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative">
          <img :src="defaultExamImage" alt="Exam thumbnail" class="w-full h-48 object-cover"/>
          <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Đang diễn ra
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-900">Cuộc thi lập trình web</h3>
          <p class="text-gray-600 mb-4">Thời gian: 120 phút</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              <i class="fas fa-users mr-2"></i>
              50 thí sinh
            </span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Tham gia
            </button>
          </div>
        </div>
      </div>

      <!-- Exam Card 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative">
          <img :src="defaultExamImage" alt="Exam thumbnail" class="w-full h-48 object-cover"/>
          <div class="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
            Sắp diễn ra
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-900">Cuộc thi thuật toán</h3>
          <p class="text-gray-600 mb-4">Thời gian: 90 phút</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              <i class="fas fa-users mr-2"></i>
              30 thí sinh
            </span>
            <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
              Sắp mở
            </button>
          </div>
        </div>
      </div>

      <!-- Exam Card 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative">
          <img :src="defaultExamImage" alt="Exam thumbnail" class="w-full h-48 object-cover"/>
          <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Đã kết thúc
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-900">Cuộc thi cơ sở dữ liệu</h3>
          <p class="text-gray-600 mb-4">Thời gian: 60 phút</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              <i class="fas fa-users mr-2"></i>
              45 thí sinh
            </span>
            <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
              Đã đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Import default exam image
const defaultExamImage = new URL('@/assets/images/default-exam.jpg', import.meta.url).href
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style> 