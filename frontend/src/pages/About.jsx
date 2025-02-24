// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Chào mừng bạn đến với QuickSafe, đối tác đáng tin cậy trong nhà bếp của bạn. Các giải pháp bảo quản tiên tiến của chúng tôi đảm bảo nguyên liệu của bạn luôn tươi ngon và an toàn, bảo toàn chất lượng và hương vị cho mọi món ăn.</p>
          <p>Với QuickSafe, hãy tự tin khi biết nguyên liệu của bạn luôn ở trạng thái tốt nhất, sẵn sàng truyền cảm hứng cho kiệt tác ẩm thực tiếp theo của bạn.</p>
          <b className='text-gray-800'>Tầm nhìn của chúng tôi</b>
          <p>Để cách mạng hóa việc lưu trữ nhà bếp bằng các giải pháp tiên tiến nhằm đảm bảo chất lượng và độ tươi ngon nhất của nguyên liệu. Chúng tôi mong muốn trao quyền cho những người đam mê ẩm thực bằng cách cung cấp các lựa chọn lưu trữ sáng tạo và đáng tin cậy, truyền cảm hứng cho sự sáng tạo trong nhà bếp. Tại QuickSafe, mục tiêu của chúng tôi là nâng cao niềm vui nấu nướng bằng cách duy trì tính toàn vẹn và hương vị của mọi nguyên liệu, thúc đẩy một môi trường ẩm thực nơi sự xuất sắc phát triển.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Tại sao <span className='text-gray-700 font-semibold'>Chọn chúng tôi</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>SỰ AN TOÀN:</b>
          <p>Giữ nguyên liệu của bạn tươi, an toàn và sẵn sàng cho mọi sáng tạo ẩm thực.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CHẤT LƯỢNG:</b>
          <p>Đảm bảo nguyên liệu của bạn được duy trì ở tiêu chuẩn cao nhất để có kết quả ẩm thực tốt nhất.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TÙY CHỈNH:</b>
          <p>Được chế tạo đặc biệt để phù hợp với sở thích lưu trữ ẩm thực của bạn.</p>
        </div>
      </div>
    </div>
  )
}

export default About
