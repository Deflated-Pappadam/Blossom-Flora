import React from 'react'
import Image from 'next/image'

export default function CollectionItem() {
  return (
    <div className='md:w-[400px] md:h-[400px] w-[250px] h-[250px]'>
        <Image src={'/Item01.jpg'} alt={'Product Image'} width={400} height={400}/>
        <div>
          <h1 className='md:text-xl text-md'>Item name</h1>
          <p className='md:text-md text-sm'>price</p>
        </div>
    </div>
  )
}
