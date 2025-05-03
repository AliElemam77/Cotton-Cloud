import React from 'react'
import img from '../../assets/images/FooterSlogan.png'
export default function FooterMain() {
  return (
    <div>
        <div className='w-[90px] md:w-[220px] mb-3 md:mb-9'>
            <img className='object-cover w-full h-full' src={img} alt="cotton cloud"/>
        </div>
        <div>
            <p className='text-[10px] md:text-[16px] text-third-550'>
            نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.
            </p>
        </div>
    </div>
  )
}
