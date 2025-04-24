import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import PhonesContainer from '../components/PhonesContainer/PhonesCotainer';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const data = useLoaderData();

    const [phones,setPhones] = useState(data)

    const handelSearch = (e,text)=>{
        e.preventDefault()
        
        if(text.length === 0) return setPhones(data) 
            
        const searchedPhones  = data.filter(phone=>phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) || phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    
    )
    console.log(searchedPhones)
    setPhones(searchedPhones)
    }


    return (
        <div>
            <Helmet>
                <title>Phone-Vibe | Home</title>
            </Helmet>
            <Hero handelSearch={handelSearch}></Hero>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;