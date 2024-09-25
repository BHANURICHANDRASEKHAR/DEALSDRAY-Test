import React from 'react'
import { Image } from 'antd'
export default function ImageSlide(img) {
  return (
    <Image
    width={100}
    className='m-4 image-slide'
    src= 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg'

    preview={{
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }}
  />
  )
}
