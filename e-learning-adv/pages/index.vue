<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- Title -->
    <h1 class="text-2xl font-bold text-primary mb-6">
      Thi Quản trị rủi ro doanh nghiệp
    </h1>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Left Content - Takes 3 columns on large screens -->
      <div class="lg:col-span-3 space-y-6">
        <!-- Banner Image -->
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/exam-banner1.jpg"
            alt="Exam banner"
            class="w-full h-[206px] object-cover"
            width="770"
            height="206"
          />
        </div>

        <!-- Introduction Content -->
        <div class="space-y-6 bg-white rounded-lg shadow p-6">
          <div>
            <h3 class="font-medium mb-2">Tên cuộc thi</h3>
            <p>Thi Quản trị rủi ro doanh nghiệp</p>
          </div>
          <div>
            <h3 class="font-medium mb-2">Mô tả cuộc thi</h3>
            <p class="text-justify">
              Hầu như tất cả mọi việc chúng ta đang làm nhằm mục đích kinh doanh đều liên quan đến một loạt rủi ro nào đó: thói quen của khách hàng thay đổi, sự xuất hiện của đối thủ cạnh tranh mới, những yếu tố mới nằm ngoài tầm kiểm soát...nếu biết cách phân tích và quản lý rủi ro, doanh nghiệp có thể quyết định nên thực hiện những gì để giảm thiểu những nhân tố làm xáo trộn kế hoạch kinh doanh.
            </p>
          </div>
          <div>
            <h3 class="font-medium mb-2">Đối tượng tham gia cuộc thi</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Mọi mọi học viên trong Elearning VNPT đều có thể tham dự.</li>
              <li>Phải hoàn thành 50% khóa học.</li>
              <li>Thành viên ban tổ chức, ban giám khảo không được phép dự thi.</li>
            </ul>
          </div>
        </div>

        <!-- History Content -->
        <div class="space-y-6 bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold">Lịch sử thi</h2>
          <p class="mb-4">Bạn đã tham gia cuộc thi này 2 lần</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b">
                  <th class="text-left py-4 font-medium">Lần thi</th>
                  <th class="text-left py-4 font-medium">Làm bài lúc</th>
                  <th class="text-left py-4 font-medium">Nộp bài lúc</th>
                  <th class="text-left py-4 font-medium">Trạng thái</th>
                  <th class="text-left py-4 font-medium">Kết quả</th>
                  <th class="text-left py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-gray-50">
                  <td class="py-4">Lần 3</td>
                  <td class="py-4">14:16 11/11/2011</td>
                  <td class="py-4">—</td>
                  <td class="py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-warning">
                      Chưa thi xong
                    </span>
                  </td>
                  <td class="py-4">—</td>
                  <td class="py-4">
                    <button class="btn btn-primary text-sm">
                      THI TIẾP
                    </button>
                  </td>
                </tr>
                <tr class="border-b hover:bg-gray-50">
                  <td class="py-4">Lần 2</td>
                  <td class="py-4">14:16 11/11/2011</td>
                  <td class="py-4">14:16 11/11/2011</td>
                  <td class="py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-success">
                      Đạt
                    </span>
                  </td>
                  <td class="py-4">35/40</td>
                  <td class="py-4">
                    <button class="text-primary font-medium hover:underline">
                      XEM KẾT QUẢ
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="py-4">Lần 1</td>
                  <td class="py-4">14:16 11/11/2011</td>
                  <td class="py-4">14:16 11/11/2011</td>
                  <td class="py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-danger">
                      Không đạt
                    </span>
                  </td>
                  <td class="py-4">35/40</td>
                  <td class="py-4">
                    <button class="text-primary font-medium hover:underline">
                      XEM KẾT QUẢ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="bg-white rounded-lg shadow-lg p-6 h-fit">
        <h2 class="text-xl font-bold mb-6">Thông tin cuộc thi</h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Bắt đầu cuộc thi: 1/5/2019</span>
          </div>
          <div class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Kết thúc cuộc thi: 21/5/2019</span>
          </div>
          <div class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Thời gian làm bài: 40 phút</span>
          </div>
          <div class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Số câu hỏi: 50</span>
          </div>
          <div class="flex items-center space-x-3">
            <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Số học viên đã thi: 25</span>
          </div>
        </div>
        <div class="mt-8">
          <button class="btn btn-primary w-full shadow-md hover:shadow-lg transition-shadow">
            BẮT ĐẦU THI
          </button>
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