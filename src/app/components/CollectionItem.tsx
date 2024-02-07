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
    <a href={`/item/${id}`} className='relative'>
          <Image src={ImageUrl} alt={'Product Image'} width={300} height={300} className='md:h-[250px] h-[200px] md:w-[250px] w-[200px] object-cover'/>
        <div>
          <h1 className='md:text-xl text-md'>{name}</h1>
          <p className='md:text-md text-sm'>${price}</p>
        </div>
    </a>
  )
}
