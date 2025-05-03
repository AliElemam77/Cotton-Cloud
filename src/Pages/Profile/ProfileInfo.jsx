import React from 'react'

export default function ProfileInfo() {
  return (
    <div>
      <section >
        <div className='container-fluid'>
          <div className='flex flex-col gap-4 bg-white'>
            <form className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              <div className="form-group">
                <label htmlFor="name" className='text-sm font-semibold'>الاسم</label>
                <input type="text" id='name' className='w-full p-2 border rounded bg-third-100' />
              </div>
              <div className="form-group">
                <label htmlFor="name" className='text-sm font-semibold'>الاسم</label>
                <input type="text" id='name' className='w-full p-2 border rounded bg-third-100' />
              </div>
              <div className="form-group">
                <label htmlFor="name" className='text-sm font-semibold'>الاسم</label>
                <input type="text" id='name' className='w-full p-2 border rounded bg-third-100' />
              </div>
              <div className="form-group">
                <label htmlFor="name" className='text-sm font-semibold'>الاسم</label>
                <input type="text" id='name' className='w-full p-2 border rounded bg-third-100' />
              </div>
              <div className="form-group lg:col-span-2">
                <button className='block p-2 bg-secondary-550 rounded-xl'>send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
