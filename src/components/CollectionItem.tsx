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
    <a href={`/item/${id}`} className='relative md:w-[400px] md:h-[400px] w-[250px] h-[250px]'>
          <Image src={ImageUrl} alt={'Product Image'} width={400} height={250} />
        <div>
          <h1 className='md:text-xl text-md'>{name}</h1>
          <p className='md:text-md text-sm'>{price}</p>
        </div>
    </a>
  )
}
