import React from 'react'
import Product from '../../Components/Product'

export default function RecentlyAdded() {
  return (
    <>
    <section>
        <div className='flex flex-col gap-4 p-4 lg:flex-row lg:gap-8'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
    </section>
    </>
  )
}
