import React from 'react'

export default function favourites() {
  return (
    <section>
        <div className='flex flex-col gap-4 p-4'>
            <div>
            <h1 className='text-lg font-semibold'>المفضلة</h1>
            </div>
            <div>
            <p className='text-sm text-gray-500'>لا توجد عناصر مفضلة بعد</p>
            </div>
        </div>
    </section>
  )
}
