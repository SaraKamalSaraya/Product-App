import React from 'react'
import Cart from '../Components/Cart/Cart'

export default function CartPage() {
  return (
    <div className='m-5 ' style={{ padding: '0px 60px' }}>
      <h4 className='fw-bold mb-3 text-start'>My Cart</h4>
      <Cart />
    </div>
  )
}
