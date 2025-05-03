import React from 'react'

export default function All() {
  return (
    <>
        <section>
            <div className='flex flex-col gap-4 p-4'>
            <div>
                <h1 className='text-lg font-semibold'>كل الإشعارات</h1>
            </div>
            <div>
                <p className='text-sm text-gray-500'>لا توجد إشعارات جديدة</p>
            </div>
            </div>
        </section>
    </>
  )
}
