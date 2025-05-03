import React from 'react'
import BreadCrumbs from '../../Components/BreadCrumb/index';
import img from '../../Assets/Images/contact.png'
export default function Contact() {
  return (
    <main className="container-fluid">
        <section className='mb-32'>
            <BreadCrumbs />
        </section>
        <section className='relative px-10 pt-20 pb-10 border lg:px-20'>
          <div className='absolute left-1/2 top-0 bg-main -translate-x-1/2 -translate-y-1/2 w-[160px]'>
            <img src={img} alt="form-img"className='w-full' />
          </div>
          <div className='flex flex-col items-stretch justify-between gap-y-4 lg:flex-row lg:gap-x-10'>
            <form className='grow'>
                <div className="form-group grow">
                  <label htmlFor="">الاسم</label>
                  <input type="text" />
                </div>
                <div className="form-group grow">
                  <label htmlFor="">الاسم</label>
                  <textarea name="message" id="message" rows="7"></textarea>
                </div>
                <div className="send-btn grow">
                  <button className='w-full p-2 rounded-2xl bg-secondary-550'>ارسال</button>
                </div>
            </form>
            <div>
            <ul className='flex flex-col gap-5 mt-10'>
                <li className='flex items-center gap-2 md:gap-x-4'>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0483 16.0232C15.453 18.4932 17.5068 20.547 19.9768 21.9516L21.3036 20.0942C21.7448 19.4768 22.5774 19.2859 23.2434 19.6497C25.3536 20.8025 27.6856 21.503 30.1183 21.6956C30.8985 21.7574 31.5 22.4083 31.5 23.1909V29.8851C31.5 30.6542 30.9183 31.2985 30.1533 31.3772C29.3584 31.4589 28.5565 31.5 27.75 31.5C14.9094 31.5 4.5 21.0906 4.5 8.25C4.5 7.44341 4.54113 6.64156 4.62284 5.84664C4.70145 5.08162 5.34591 4.5 6.11498 4.5H12.8091C13.5917 4.5 14.2427 5.10156 14.3044 5.88163C14.497 8.31432 15.1975 10.6465 16.3503 12.7567C16.7141 13.4226 16.5232 14.2553 15.9058 14.6964L14.0483 16.0232ZM10.2664 15.0378L13.1163 13.0021C12.3082 11.2577 11.7544 9.40774 11.4709 7.5H7.5136C7.50454 7.74948 7.5 7.9995 7.5 8.25C7.5 19.4337 16.5663 28.5 27.75 28.5C28.0005 28.5 28.2505 28.4955 28.5 28.4864V24.529C26.5923 24.2455 24.7423 23.6917 22.9978 22.8837L20.9622 25.7337C20.1387 25.4137 19.3434 25.0372 18.5811 24.6091L18.4939 24.5595C15.5546 22.888 13.112 20.4454 11.4405 17.5061L11.3909 17.4189C10.9627 16.6566 10.5863 15.8613 10.2664 15.0378Z" fill="#CAA34E"/>
                      </svg>
                    </span>
                    <span className='ltr'>01023384485</span>
                </li>
                <li className='flex items-center gap-2 md:gap-x-4'>
                  <span>
                    <svg width="30" height="20" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 0.5H28.5C29.3284 0.5 30 1.17158 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.67158 27.5 0 26.8284 0 26V2C0 1.17158 0.67158 0.5 1.5 0.5ZM27 6.85688L15.1077 17.507L3 6.82391V24.5H27V6.85688ZM3.76719 3.5L15.0928 13.493L26.2515 3.5H3.76719Z" fill="#CAA34E"/>
                    </svg>
                  </span>
                  <span className='ltr'>01023384485</span>
                </li>
                <li className='flex items-center gap-2 md:gap-x-4'>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 31.3493L25.4245 23.9246C29.5251 19.8242 29.5251 13.1759 25.4245 9.07538C21.3242 4.97487 14.6759 4.97487 10.5754 9.07538C6.47487 13.1759 6.47487 19.8242 10.5754 23.9246L18 31.3493ZM18 35.5919L8.45406 26.046C3.18198 20.7738 3.18198 12.2261 8.45406 6.95406C13.7261 1.68198 22.2738 1.68198 27.546 6.95406C32.8181 12.2261 32.8181 20.7738 27.546 26.046L18 35.5919ZM18 19.5C19.6569 19.5 21 18.1569 21 16.5C21 14.8431 19.6569 13.5 18 13.5C16.3431 13.5 15 14.8431 15 16.5C15 18.1569 16.3431 19.5 18 19.5ZM18 22.5C14.6863 22.5 12 19.8137 12 16.5C12 13.1863 14.6863 10.5 18 10.5C21.3137 10.5 24 13.1863 24 16.5C24 19.8137 21.3137 22.5 18 22.5Z" fill="#CAA34E"/>
                      </svg>
                    </span>
                    <span className=''>نص تجريبي يمكن استبداله في هذه المساحة.</span>
                </li>
            </ul>
        </div>
          </div>
        </section>
    </main>
  )
}
