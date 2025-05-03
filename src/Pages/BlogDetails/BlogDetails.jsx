import React from 'react'
import BreadCrumbs from '../../Components/BreadCrumb/index';
import img from '../../Assets/Images/placeholder.png'

export default function BlogDetails() {
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



    ]
  return (
    <main className='container-fluid'>
        <section>
            <BreadCrumbs />
        </section>
        <section>
            <div className='grid grid-cols-1 gap-10 my-6 lg:grid-cols-3'>
                <div className='w-full lg:col-span-1'>
                    <img src={img} alt="img name" className='w-full '/>
                </div>
                <div className='lg:col-span-2'>
                    <h2 className='text-2xl font-bold'>عنوان المقالة</h2>
                    <p className='text-sm text-gray-500'>تاريخ المقالة</p>
                    <p className='text-sm text-gray-500'>المؤلف</p>
                    <p className='text-sm text-gray-500'>التصنيف</p>
                    <p className='text-sm text-gray-500'>عدد المشاهدات</p>
                </div>
            </div>
            <div>
                <div className='mb-5'>
                    <h2 className='mb-4 text-xl font-bold'>نص المقالة</h2>
                    <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus deserunt vero amet blanditiis esse laborum consequuntur totam a officiis!
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-4 text-xl font-bold'>نص المقالة</h2>
                    <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus deserunt vero amet blanditiis esse laborum consequuntur totam a officiis!
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-4 text-xl font-bold'>نص المقالة</h2>
                    <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus deserunt vero amet blanditiis esse laborum consequuntur totam a officiis!
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-4 text-xl font-bold'>نص المقالة</h2>
                    <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus deserunt vero amet blanditiis esse laborum consequuntur totam a officiis!
                    </p>
                </div>
            </div>
        </section>
        <section>
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
