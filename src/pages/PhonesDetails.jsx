import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { addCarts, addFavorite, getCarts} from '../utils';
import { CartContext } from '../providers/Contexts';
import { Helmet } from 'react-helmet-async';
const PhonesDetails = () => {

    const {setCart} = useContext(CartContext)

    const data = useLoaderData();
    const {id} = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    
    const {brand,name,model,image,price,description,storage,camera_info} = singlePhone || {};


    const handleFavorite = ()=>{
        addFavorite(singlePhone)
    }
    const handleCarts = () =>{
        addCarts(singlePhone)
        setCart(getCarts())
    }
    

    return (
        <div className='w-full py-9 px-5 text-center'>
            <Helmet>
                <title>Phones-Details-{id}</title>
            </Helmet>
            <img className='w-full mx-auto md:w-auto mb-9' src={image} alt="" />
            <div className='flex justify-between'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 p-2 text-start'>{name}</h1>
            <div className='text-center space-y-2 md:space-x-2'>
                <Button onClick={handleCarts} label={<MdShoppingCartCheckout />}></Button>
                <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
            </div>
            </div>
            {/* Details */}

            <div className='text-start space-y-7'>
                <h1 className='text-5xl'>Details:</h1>
                <p className='font-bold text-xl'>Brand: <span className='font-normal'>{brand}</span></p>
                <p className='font-bold text-xl'>Model: <span className='font-normal'>{model}</span></p>
                <p className='font-bold text-xl'>Storage: <span className='font-normal'>{storage[0]},{storage[1]}</span></p>
                <p className='font-bold text-xl'>Price: <span className='font-normal'>{price}</span></p>
                <p className='font-bold text-xl'>Camera Info: <span className='font-normal'>{camera_info}</span></p>
                <p className='font-bold text-xl'>Description: <span className='font-normal'>{description}</span></p>

            </div>

        </div>
    );
};

export default PhonesDetails;