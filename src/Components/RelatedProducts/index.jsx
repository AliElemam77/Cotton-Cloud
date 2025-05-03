import React from 'react'
import Product from './../Product/index';

export default function RelatedProducts() {
  
  return (
      <section>
        <h3 className='text-2xl'>منتجات متشابهة </h3>
        <div className="flex justify-center gap-2 wrapper">
            <Product />
            <Product />
            <Product />
        </div>
        
      </section>
  )
}
