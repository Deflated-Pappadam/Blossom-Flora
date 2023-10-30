import React from 'react'
import Image from 'next/image'

type ItemProps = {
  ImageUrl: string;
  name: string;
  price: number;
  id: string
}

export default function CollectionItem({ImageUrl, name, price, id}: ItemProps) {
  return (
    <a href={`/item/${id}`} className='relative md:w-[300px] md:h-[360px] w-[250px] h-[250px]'>
          <Image src={ImageUrl} alt={'Product Image'} width="300" height="400" className='md:h-[300px] h-[250px] object-cover'/>
        <div>
          <h1 className='md:text-xl text-md'>{name}</h1>
          <p className='md:text-md text-sm'>${price}</p>
        </div>
    </a>
  )
}
