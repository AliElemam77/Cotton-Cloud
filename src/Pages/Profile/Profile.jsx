import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb';

export default function Profile() {
    const getTabClasses = ({ isActive }) =>
        `font-semibold w-full p-4 ${
            isActive
            ? "text-primary-550 bg-secondary-550 fill-secondary-550"
            : "text-gray-600 hover:text-secondary-600"}`
  return (
    <main className='container-fluid'>
        <section className='my-6'>
            <BreadCrumb/>
        </section>
        <section>
            <div className='grid items-start grid-cols-1 gap-4 md:grid-cols-3'>
            <aside className='flex flex-col bg-white md:col-span-1'>
                <NavLink to="/profile" end className= {getTabClasses} >
                    <div className='flex items-center justify-between gap-2'>
                        <h3>الملف الشخصي</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="black"/>
                        </svg>
                    </div>
                </NavLink>
                <NavLink to="/profile/orders" className= {getTabClasses} >
                    <div className='flex items-center justify-between gap-2'>
                        <h3>المفضلة</h3>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0C13.5523 0 14 0.44772 14 1V3H19C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V4C0 3.44772 0.44772 3 1 3H6V1C6 0.44772 6.44772 0 7 0H13ZM14 5H6V16H14V5ZM2 5V16H4V5H2ZM12 2H8V3H12V2ZM16 5V16H18V5H16Z" fill="black"/>
                        </svg>
                    </div>
                </NavLink>
                <NavLink to="/profile/favourites" className= {getTabClasses} >
                    <div className='flex items-center justify-between gap-2'>
                        <h3>طلباتي</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="black"/>
                        </svg>
                    </div>
                </NavLink>
            </aside>
            <section className='flex flex-col gap-4 p-4 bg-white md:col-span-2'>
                <div>
                    <Outlet></Outlet>
                </div>
            </section>
            </div>
        </section>
    </main>
  )
}
