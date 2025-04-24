import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { addCart, addFavorite, getCart } from '../utils';
import { CartContext } from '../providers/Contexts';
import { Helmet } from 'react-helmet-async';
const PhonesDetails = () => {

    const {setCart} = useContext(CartContext)

    const data = useLoaderData();
    const {id} = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    
    const {brand,name,model,image,price,description,storage,camera_info} = singlePhone;


    const handleFavorite = ()=>{
        addFavorite(singlePhone)
    }
    const handleCart = ()=>{
        addCart(singlePhone)
        setCart(getCart())
    }

    return (
        <div className='w-full py-12'>
            <Helmet>
                <title>Phones-Details-{id}</title>
            </Helmet>
            <img className='w-full mx-auto md:w-auto mb-9' src={image} alt="" />
            <div className='flex justify-between'>
            <h1 className='text-6xl font-thin mb-8'>{name}</h1>
            <div className='space-x-4'>
                <Button onClick={handleCart} label={<MdShoppingCartCheckout />}></Button>
                <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
            </div>
            </div>
            {/* Details */}

            <div>

            </div>

        </div>
    );
};

export default PhonesDetails;