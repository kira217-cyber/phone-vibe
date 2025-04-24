import React, { useState } from 'react';
import banner from '../../assets/banner.png'
import Button from '../ui/Button';

const Hero = ({handelSearch}) => {

    const [searchText, setSearchText] = useState('');
    


    return (
        <div>
            <img className='w-full mx-auto ' src={banner} alt="" />
            <div className='text-center space-y-6'>
        <h1 className='font-thin text-7xl text-gray-700'>Browse, Search, View, Buy</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={(e)=>{
            handelSearch(e,searchText)
            // reset input state
            setSearchText('')
        }} className='flex flex-col md:flex-row justify-center items-center mb-5'>
            <input value={searchText}
            onChange={e=>setSearchText(e.target.value)}
             type="text" placeholder='Search Phone by Name' 
            className='bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-1' />
            <Button type='submit' label="Search"></Button>
        </form>
            </div>
        </div>
    );
};

export default Hero;