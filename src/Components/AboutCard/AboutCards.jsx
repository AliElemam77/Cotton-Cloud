import React from 'react'
import img from "../../assets/icons/khet.png" 
export default function AboutCards() {
  return (
    <div className='flex flex-col justify-between text-center container-fluid gap-y-5 md:flex-row'>
      <article className='flex flex-col items-center justify-center gap-y-4'>
        <div className="flex items-center justify-center w-12 rounded-full aspect-square bg-secondary-200 md:w-24">
            <div className='w-8 md:w-12'>
                <img src={img} alt="about img" className='w-full' />
            </div>
        </div>
        <h1 className="text-third-900 text-[24px] font-bold mt-4 md:mt-6">جودة عالية تدوم طويلًا</h1>
        <p className="text-third-700 text-[16px] font-normal mt-2 md:mt-4">
          نص تجريبي يمكن استبداله في هذه المساحة.
           نص تجريبي يمكن استبداله في هذه المساحة.
          </p>
      </article>
      
      <article className='flex flex-col items-center justify-center gap-y-4'>
        <div className="flex items-center justify-center w-12 rounded-full aspect-square bg-secondary-200 md:w-24">
            <div className='w-8 md:w-12'>
                <img src={img} alt="about img" className='w-full' />
            </div>
        </div>
        <h1 className="text-third-900 text-[24px] font-bold mt-4 md:mt-6">جودة عالية تدوم طويلًا</h1>
        <p className="text-third-700 text-[16px] font-normal mt-2 md:mt-4">
          نص تجريبي يمكن استبداله في هذه المساحة.
           نص تجريبي يمكن استبداله في هذه المساحة.
          </p>
      </article>
      
      <article className='flex flex-col items-center justify-center gap-y-4'>
        <div className="flex items-center justify-center w-12 rounded-full aspect-square bg-secondary-200 md:w-24">
            <div className='w-8 md:w-12'>
                <img src={img} alt="about img" className='w-full' />
            </div>
        </div>
        <h1 className="text-third-900 text-[24px] font-bold mt-4 md:mt-6">جودة عالية تدوم طويلًا</h1>
        <p className="text-third-700 text-[16px] font-normal mt-2 md:mt-4">
          نص تجريبي يمكن استبداله في هذه المساحة.
           نص تجريبي يمكن استبداله في هذه المساحة.
          </p>
      </article>
      
    </div>
  )
}
