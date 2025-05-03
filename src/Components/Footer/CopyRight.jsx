import React from 'react'
import tabby from '../../assets/tabby.png'
import tamara from '../../assets/tamara.png'
export default function CopyRight() {
  return (
    <div className='flex justify-between items-center mt-3 text-[10px]  text-third-100 md:text-[16px]'>
        <p>جميع الحقوق محفوظة</p>
        <div className="flex gap-2">
            <div className='w-[70px]'><img src={tabby} alt="tabby" className='w-full'/></div>
            <div className='w-[70px]'><img src={tamara} alt="tamara" className='w-full' /></div>
        </div>
    </div>
  )
}
