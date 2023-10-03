import { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../../apis/config';

const CardList = () => {
    const [card, setCards] = useState([])
    useEffect(() => {
        axiosInstance
        .get('products')
        .then((res) => setCards(res.data.products))
        .catch((err) => console.log(err))
    },[])

    const navigate = useNavigate();
    const redirectToDetails = (id) => {
        navigate(`/Product-Details/${id}`);
      };
    
    return (
        <div className="" style={{ padding: '2% 7%' }}>
            <p className='text-start py-2'>Welcome to our shopping website, start browsing ...</p>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    card.map((card, index) => {
                        return (
                            <div key={card.id} className=" mx-3 mb-5">
                                <Card card={card} handleNavigate={(id) => redirectToDetails(id)}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CardList;