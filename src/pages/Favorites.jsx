import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard/PhoneCard';
import { getFavorites, removeFavorites } from '../utils';
import EmptySate from '../components/ui/EmptySate';
import { Helmet } from 'react-helmet-async';

const Favorites = () => {

    const [displayPhones, setDisplayPhones] = useState([]);

    useEffect(()=>{
        const savedPhones = getFavorites();
        setDisplayPhones(savedPhones)
    },[])

    const handleDelete = id => {
      removeFavorites(id)
      setDisplayPhones(getFavorites())
    }

    if(displayPhones.length <1 ) return <EmptySate></EmptySate>

    return (

        <div className="mt-12 p-6 mb-12">
          <Helmet>
            <title>Favorites</title>
          </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard handleDelete={handleDelete} deletable={true} key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>

    );
};

export default Favorites;