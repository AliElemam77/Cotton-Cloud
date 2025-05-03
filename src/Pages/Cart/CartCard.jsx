import React from "react";

export default function CartCard() {
  return (
    // <tr className='border-b border-gray-300'>
    //             <td class="py-4">
    //                 <img src="https://placehold.co/150x150" alt="" />
    //             </td>
    //             <td class="px-6 py-4 font-semibold text-gray-900">
    //                 Apple Watch
    //             </td>
    //             <td class="px-6 py-4">
    //                 <div class="flex items-center justify-center">
    //                     <button class="inline-flex items-center justify-center p-1 text-sm font-medium w-8 rounded-s-lg aspect-square text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
    //                         {/* <span class="sr-only">Quantity button</span> */}
    //                         <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
    //                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
    //                         </svg>
    //                     </button>
    //                     <div>
    //                         <input type="number" id="first_product" class="bg-gray-50 border border-gray-300 w-8 aspect-square text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block text-center " placeholder="1" required />
    //                     </div>
    //                     <button class="inline-flex items-center justify-center w-8 aspect-square p-1 rounded-e-lg text-sm font-medium text-gray-500 bg-white border border-gray-300  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
    //                         <span class="sr-only">Quantity button</span>
    //                         <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    //                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </td>
    //             <td class="px-6 py-4 ">
    //                 <p className='text-2xl font-bold'>100 ر.س</p>
    //                 <p className='text-gray-400'>200 ر.س</p>
    //             </td>
    //             <td class="px-6 py-4 font-semibold text-gray-900 ">
    //                 <button className='p-1 text-red-600 bg-red-200 rounded-lg'>
    //                     remove
    //                 </button>
    //             </td>
    // </tr>
    <article className="flex items-center justify-between">
      <div class="p-4">
        <img src="https://placehold.co/150x150" alt="" />
      </div>
      <div class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        Apple Watch
      </div>
      <div class="px-6 py-4">
        <div class="flex items-center">
          <button
            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
            type="button"
          >
            <span class="sr-only">Quantity button</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <input
              type="number"
              id="first_product"
              class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1  appearance-none"
              placeholder="1"
              required
            />
          </div>
          <button
            class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
            type="button"
          >
            <span class="sr-only">Quantity button</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-6 py-4 font-semibold text-gray-900 ">$599</div>
      <div class="px-6 py-4 flex flex-col grow">
        <span>100 ر.س</span>
        <span className="text-gray-400">200 ر.س</span>
        {/* <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
      </div>
    </article>
  );
}
