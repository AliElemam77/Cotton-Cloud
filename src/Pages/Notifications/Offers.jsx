import React from 'react'

export default function Offers() {
  return (
    <section>
        <div className='flex flex-col gap-4 p-4'>
            <div>
            <h1 className='text-lg font-semibold'>العروض</h1>
            </div>
            <div>
            <p className='text-sm text-gray-500'>لا توجد عروض حاليا</p>
            </div>
        </div>
    </section>
  )
}
