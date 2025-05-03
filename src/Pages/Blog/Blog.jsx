import React from 'react'
import Breadcrumbs from './../../Components/BreadCrumb/index';
import img from  '../../assets/images/placeholder.png'
export default function Blog() {
    const posts = [
        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

        {
            name: 'اسم المقالة',
            description: 'وصف المقالة  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate.',
            image: 'https://via.placeholder.com/150',
        },

    ]
  return (
    <main className='container-fluid'>
      <section>
        <Breadcrumbs />
      </section>
      <section>
        <h2 className='flex my-8 text-2xl'>احدث المقالات
                
        </h2>
        <div className='grid grid-cols-2 gap-5 lg:grid-cols-3'>
            {posts.map((post, index) => (
                <div key={index} className='flex flex-col gap-2 mb-5 bg-white rounded shadow-md'>
                    <div className='overflow-hidden rounded-t'>
                        <img src={img} alt={post.name} className='object-cover w-full' />
                    </div>
                    <div className='p-4'>
                        <h5>{post.name}</h5>
                        <p className='my-4 text-third-800'>{post.description}</p>
                    <div>
                        <a className='block w-full underline text-end text-secondary-550 hover:text-secondary-700 visited:text-primary-550' href=''>show details</a>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </main>
)
}
