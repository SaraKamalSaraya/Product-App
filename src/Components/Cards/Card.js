import React, { useState } from 'react'
import Stars from './Stars';
import { addToCart } from '../../store/Slice/cart';
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
    const { card, handleNavigate } = props

    const handleStockText = (props.card.stock) !== 0 ? 'In stock' : 'Out of stock'
    const handleStockColor = (props.card.stock) !== 0 ? '#2A8854' : '#DC3545'
    const handleDescription = (props.card.description).length <= 35 ? props.card.description : `${props.card.description.slice(0, 35)}...`
    const handleTitle = (props.card.title).length <= 20 ? props.card.title : `${props.card.title.slice(0, 20)}...`
    
    const [quantity] = useState(1)
    const dispatch = useDispatch();

    const addToCartButton = (event) => {
        event.stopPropagation();
        dispatch(addToCart({...card,quantity:1}))
    };
    return (
        <div style={{ textDecoration: 'none' }} onClick={() => handleNavigate(props.card.id)}>
            <div className="card" style={{ width: '22rem' }}>
                <div className='position-relative'>
                    <img src={props.card.thumbnail} className="card-img-top p-5" height={300} />
                    <button disabled className="btn fw-bold rounded-pill position-absolute border border-0 text-light" style={{ top: '2%', left: '10px', fontSize: '12px', backgroundColor: handleStockColor }}>{handleStockText}</button>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-bold">{handleTitle}</h5>
                        <h5 className="card-title fw-bold">{props.card.price}$</h5>
                    </div>
                    <p className="card-text text-start" style={{ fontSize: '16px' }}>{handleDescription}</p>
                    <Stars rating={props.card.rating} />
                    <button className="btn btn-outline-success fw-bold" onClick={addToCartButton}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}