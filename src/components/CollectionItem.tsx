import React from 'react'
import Image from 'next/image'

export default function CollectionItem() {
  return (
    <div>
        <Image src={'/Item01.jpg'} alt={'Product Image'} width={400} height={400}/>
        <div>
          <h1>Item name</h1>
          <p>price</p>
        </div>
    </div>
  )
}
