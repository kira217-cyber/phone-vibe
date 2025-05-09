import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

const EmptySate = () => {
    return (
        <div className='py-24 text-center px-12'>
      <h1 className='mb-3 text-5xl md:text-7xl font-thin text-gray-900'>No Data Found!</h1>
      <p className='mb-8 text-xl  text-gray-900 md:text-2xl'>
        Browse, Search Phones. Add to Cart, Favorites.
      </p>
      <Link to='/'>
        <Button label='Browse Phones' />
      </Link>
    </div>
    );
};

export default EmptySate;