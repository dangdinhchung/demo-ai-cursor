<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="text-primary font-bold text-2xl">
              E-Learning
            </NuxtLink>
            <span class="text-gray-400 ml-1">VNPT-IT</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink
              to="/courses"
              class="text-gray-600 hover:text-primary font-medium"
            >
              Các khóa học
            </NuxtLink>
            <NuxtLink
              to="/exams"
              class="text-gray-600 hover:text-primary font-medium"
            >
              Các cuộc thi
            </NuxtLink>
          </nav>

          <!-- Search -->
          <div class="flex-1 max-w-lg mx-8">
            <div class="relative">
              <input
                type="text"
                placeholder="Tìm kiếm khóa học"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <button class="relative">
              <svg
                class="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="absolute -top-1 -right-1 bg-warning text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div class="flex items-center">
              <img
                src="https://via.placeholder.com/32"
                alt="User avatar"
                class="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="bg-gray-100">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center space-x-2 text-sm">
          <NuxtLink to="/" class="text-primary font-medium">
            Trang chủ
          </NuxtLink>
          <span class="text-gray-500">/</span>
          <span class="text-gray-600">Current Page</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-medium mb-4">CÁC DANH MỤC</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="text-gray-600 hover:text-primary">
                  Giới thiệu
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-gray-600 hover:text-primary">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-600 hover:text-primary">
                  Liên hệ
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="md:col-span-2">
            <h3 class="text-lg font-medium mb-4">
              TẢI ỨNG DỤNG E-LEARNING ĐỂ HỌC HIỆU QUẢ HƠN
            </h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.16-.24 2.27-.93 3.57-.84 1.67.13 2.94.83 3.79 2.11-3.35 2.09-2.81 6.21.51 7.68-.71 1.83-1.65 3.36-2.95 4.22zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.31 2.46-2.01 4.22-3.74 4.25z"
                  />
                </svg>
                <div class="text-left">
                  <div class="text-xs">Download on the</div>
                  <div class="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                class="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M3.609 1.814L13.792 12l-10.183 10.186L3.609 22.186 13.792 12 3.609 1.814zM14.396 1.814L24.579 12 14.396 22.186l10.183-10.186L14.396 1.814z"
                  />
                </svg>
                <div class="text-left">
                  <div class="text-xs">GET IT ON</div>
                  <div class="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <p class="text-gray-600">
              © E-Learning - Hệ thống đào tạo trực tuyến nền tảng Cloud
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script> 