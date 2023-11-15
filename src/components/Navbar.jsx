import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import logo from '../assets/logo.png';
export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full bg-custompaleorange flex border-b-2 border-customdarkblue border-opacity-30 justify-between items-center md:px-32 px-4 py-4 z-40">
        <div className="lg:ml-20 ">
          <img src={logo} width="200" alt="logo" />
        </div>

        <div className="hidden sm:flex">
          <Link to="/">
            <AiOutlineHome
              size={50}
              className="hover:bg-opacity-70 hover:scale-105 transition-all border-customdarkblue border text-customdarkblue mr-4 rounded-full bg-customblue p-2"
            />
          </Link>
          <Link to="/shoppingcart">
            <AiOutlineShoppingCart
              size={50}
              className="hover:bg-opacity-70 hover:scale-105 transition-all border-customdarkblue border text-customdarkblue mr-4 rounded-full bg-customblue p-2"
            />
          </Link>
        </div>
      </nav>
      <div className="fixed top-5 right-6 sm:hidden z-50">
        {mobileMenuIsOpen ? (
          <div className=" w-screen rounded-md pt-20 h-screen px-10 translate-x-6 -translate-y-5 p-5 flex flex-col gap-10 text-center bg-[#958577] text-custompaleorange">
           <img src={logo} alt='logo' width={150} className=" self-center"/>
            <Link onClick={()=>setMobileMenuIsOpen(false)} to="/">Home</Link>
            <Link onClick={()=>setMobileMenuIsOpen(false)} to="/shoppingcart">Shopping Cart</Link>
            <AiOutlineClose
              size={30}
              className=" self-center bg-customdarkorange p-2 rounded-md"
              onClick={() => setMobileMenuIsOpen(false)}
            />
          </div>
        ) : (
          <AiOutlineMenu
            onClick={() => setMobileMenuIsOpen(true)}
            size={40}
            className="text-customdarkorange bg-customorange bg-opacity-50 border border-customdarkorange rounded-lg p-2"
          />
        )}
      </div>
    </>
  );
}
