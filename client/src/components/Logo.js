import React from 'react'
import { BsWifi } from 'react-icons/bs'


export default function Logo() {
   return (
      <div className='d-flex align-items-center gap-2'>
         <BsWifi className='fs-1 text-muted' />
         <span className='text-muted display-6'>asil gsm</span>
      </div>
   )
}