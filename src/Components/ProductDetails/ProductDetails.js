import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Stars from '../Cards/Stars'
import { axiosInstance } from '../../apis/config';
import { addToCart, removeProduct } from '../../store/Slice/cart';
import { useDispatch } from "react-redux";


export default function ProductDetails() { 
    // Get api
    const parms = useParams()
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        axiosInstance
            .get(`products/${parms.id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

    // Get quantity of items of wanted to add to cart
    const [quantity] = useState(1)
    const dispatch = useDispatch();
   
    const handleStockText = product ? ((product.stock) !== 0 ? `${product.stock} items in stock` : 'Out of stock') : ''
    const handleStockColor = product ? ((product.stock) !== 0 ? '#2A8854' : '#DC3545') : ''
    const handleDiscountPercentage = product ? ((product.discountPercentage) ? `${product.discountPercentage}% discount on this item!` : '') : ''
    const handleNewPrice = product ? ((product.discountPercentage) ? `${Math.round(product.price-(product.discountPercentage/100 * product.price))}` : `${product.price}`) : ''
    

    const addToCartButton = (id) => {
        dispatch(addToCart({...product,quantity:quantity}))
    };

    return product ? (
        <div className='my-5 mx-5 row text-start'>
            {/* Imgs */}
            <div className='col mx-5 text-center' style={{ width: '50vh' }}>
                <img src={product.images[0]} style={{ width: '100%' }} className='mb-1' />
                <div className='d-flex justify-content-between'>
                    <img src={product.images[1]} height={150} width={150} alt='' />
                    <img src={product.images[2]} height={150} width={150} alt='' />
                    <img src={product.images[3]} height={150} width={150} alt='' />
                </div>
            </div>
            {/* Details */}
            <div className='col pe-5 m-0'>
                <h1 className="card-title fw-bold" style={{ color: '#2A8854' }}>{product.title}</h1>
                <p className="card-text text-start">{product.description}</p>
                <div className='d-flex justify-content-between align-items-center'>
                <Stars rating={product.rating}/>
                <button disabled className="btn fw-bold rounded-pill border border-0 text-light" style={{ fontSize: '14px', backgroundColor: handleStockColor }}>{handleStockText}</button>
                </div>
                <hr style={{ color: '#2A8854' }}></hr>
                {/* -------------------------------------- */}

                <div className='d-flex align-items-center'>
                    <h5 className="card-title fw-semibold me-3" style={{ color: '#2A8854',textDecoration: 'line-through', opacity: '50%' }}>{product.price}$</h5>
                    <h3 className="card-title fw-bold me-3" style={{ color: '#2A8854' }}>{handleNewPrice}$</h3>        
                </div>
                <p className="card-title fw-bold me-3" style={{ color: '#2A8854', opacity: '50%' }}>{handleDiscountPercentage}</p>
                <hr style={{ color: '#2A8854' }}></hr>
                {/* -------------------------------------- */}

                <p className="card-text text-start">More Information</p>
                <div className='d-flex'>
                    <p className="me-3" style={{ fontSize: '16px' }}><span style={{ color: '#2A8854', fontWeight: '900' }}>Brand:</span> {product.brand}</p>
                    <p className="me-3" style={{ fontSize: '16px' }}><span style={{ color: '#2A8854', fontWeight: '900' }}>Categoty:</span> {product.category}</p>
                </div>

                <div className='row d-flex justify-content-between'>
                <button className="col btn btn-outline-success rounded-pill fw-bold mt-4" onClick={() => addToCartButton(product.id)}>Add To Cart</button>
                </div>
            </div>
        </div>
    ) : <></>
}
