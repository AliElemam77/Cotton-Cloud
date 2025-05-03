import React from 'react'
import Breadcrumbs from '../../Components/BreadCrumb'
import { Divider } from '@heroui/react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Notifications() {
  const getTabClasses = ({ isActive }) =>
    `${
        isActive
        ? "text-secondary-550"
        : "text-gray-600 hover:text-black"}`
  return (
    <main className='container-fluid'>
      <section className='my-6'>
        <Breadcrumbs/>
      </section>
      <section>
      <div className="flex items-stretch h-5 gap-5 text-small">
        <NavLink to= "." end className={getTabClasses}>الكل</NavLink>
        <hr className='w-[1px] h-full bg-third-550 block'/>
        <NavLink to="offers" className={getTabClasses}>العروض</NavLink>
        <hr className='w-[1px] h-full bg-third-550 block'/>
        <NavLink to="track-orders" className={getTabClasses}>متابعى الطللبات</NavLink>
        <hr className='w-[1px] h-full bg-third-550 block'/>
        <NavLink to="recently-added" className={getTabClasses}>مضافة حديثا</NavLink>
      </div>
      </section>
      <section className='p-4 my-5 bg-white'>
        <Outlet/>
      </section>
    </main>
  )
}
