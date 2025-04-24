import React, { use, useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { CartContext } from '../../providers/Contexts';
import { getCarts } from '../../utils';

const Navbar = () => {

  const {cart} = useContext(CartContext)


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/about'>About</NavLink>
        </li>
        <li >
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/carts'><FaCartShopping size={20} /></NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/favorites'><MdBookmarkAdd size={20} /></NavLink>
    </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1"> 
    <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/about'>About</NavLink>
        </li>
        <li className='relative'>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/carts'><FaCartShopping size={20} /><p>{cart.length}</p></NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-700' : "")} to='/favorites'><MdBookmarkAdd size={20} /></NavLink>
    </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;