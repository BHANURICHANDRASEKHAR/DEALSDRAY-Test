import React from 'react'
import { Image } from 'antd'
export default function ImageSlide(img) {
    const img1=img.img
    
  return (
    <Image
    width={80}
    height={80}
    className='m-3 image-slide'
    src= {img.img}

  />
  )
}
