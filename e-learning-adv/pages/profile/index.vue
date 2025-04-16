<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation breadcrumb -->
    <div class="bg-gray-100 py-4 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-gray-600">
          Trang chủ / Thông tin cá nhân
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Profile Information Card -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold">Thông tin cá nhân</h1>
          <button class="text-blue-500 font-medium text-sm hover:text-blue-600">
            Chỉnh sửa thông tin
          </button>
        </div>

        <div class="border-b border-gray-200 pb-6 mb-6">
          <!-- Avatar and Name Section -->
          <div class="flex items-center">
            <div class="relative">
              <img 
                src="/images/avatar-placeholder.svg" 
                alt="Profile Avatar" 
                class="w-20 h-20 rounded-full object-cover bg-gray-100"
              />
            </div>
            <div class="ml-4">
              <h2 class="text-lg font-medium">Nguyễn Huy Hoàng</h2>
              <p class="text-gray-600">nghuyhoang@vnpt.vn</p>
            </div>
          </div>
        </div>

        <!-- Account Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-gray-600 mb-2">Tên đăng nhập</h3>
            <p class="font-medium">nghuyhoang</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Đơn vị</h3>
            <p class="font-medium">Trung tâm sáng tạo</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Chức danh</h3>
            <p class="font-medium">Design lead</p>
          </div>
        </div>

        <!-- Personal Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-gray-600 mb-2">Ngày sinh</h3>
            <p class="font-medium">13/04/1990</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Giới tính</h3>
            <p class="font-medium">Nam</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Địa chỉ</h3>
            <p class="font-medium">57 Huỳnh Thúc Kháng</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Tỉnh/Thành phố</h3>
            <p class="font-medium">Hà Nội</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Quận/Huyện</h3>
            <p class="font-medium">Đống Đa</p>
          </div>
          <div>
            <h3 class="text-gray-600 mb-2">Số điện thoại</h3>
            <p class="font-medium">09123456543</p>
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
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 