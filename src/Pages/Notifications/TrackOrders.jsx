import React from 'react'

export default function TrackOrders() {
  return (
    <>
      <section>
        <div className='flex flex-col gap-4 p-4'>
          <div>
            <h1 className='text-lg font-semibold'>تتبع الطلبات</h1>
          </div>
          <div>
            <p className='text-sm text-gray-500'>لا توجد طلبات قيد التتبع حاليا</p>
          </div>
        </div>
      </section>
    </>
  )
}
