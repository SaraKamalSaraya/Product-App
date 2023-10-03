import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeProduct } from '../../store/Slice/cart'

export default function Cart() {
    const counter = useSelector((state) => state.cart.counter)
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.price * product.quantity
        });
        return total;
    };

    return (
        <div className='mx-5'>
            {
                counter == 0 ?
                    <div>
                        Cart is Empty!
                    </div>
                    :
                    <div>
                        <table class="table align-middle">
                            <thead>
                                <tr className=''>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Remove</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    cart.map((product => {
                                        return (
                                            <tr>
                                                <td className='d-flex justify-content-center align-items-center text-start'>
                                                    <img src={product.thumbnail} height={150} width={150} className='mx-4 p-0' />
                                                    <div className='text-start'>
                                                        <p className='m-0 p-0 fw-bold'>{product.title}</p>
                                                        <p className='m-0 p-0 fw-bold'>Product ID: {product.id}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <button className="btn btn-outline-success fw-bold border border-0 mx-1" onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                                                        <button className="btn btn-outline-success fw-bold border border-0 mx-1" disabled>{product.quantity}</button>
                                                        <button className="btn btn-outline-success fw-bold border border-0 mx-1" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-success fw-bold" onClick={() => dispatch(removeProduct(product.id))}>x</button>
                                                </td>
                                                <td>
                                                    {product.price * product.quantity}$
                                                </td>
                                            </tr>

                                        )
                                    }))
                                }
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-end' >
                            <button className="btn btn-outline-success fw-bold w-25 d-flex justify-content-between align-items-center py-3 px-5" disabled>
                                <span className='text-black fs-5'>
                                    Total
                                </span>
                                <span className=''>
                                    ${getTotalPrice()}$
                                </span>
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}
