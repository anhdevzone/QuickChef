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

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>VĂN PHÒNG CỦA CHÚNG TÔI</p>
          <p className='text-gray-500'> Đại học Vinh <br/> 01 Lê Duẩn, TP Vinh, Nghệ An</p>
          <p className='text-gray-500'>Ph:0820937843 <br/> Email: dhv@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>NGHỀ NGHIỆP TẠI QUCIKCHEF</p>
          <p className='text-gray-500'>Tìm hiểu thêm về đội ngũ của chúng tôi và cơ hội việc làm.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Khám phá việc làm</button>
        </div>


      </div>
    </div>
  )
}

export default Contact
