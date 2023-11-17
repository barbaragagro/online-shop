import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import logo from '../assets/logo.png';
import { useShopContext } from '../hooks/useShopContext';

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { numberOfItems } = useShopContext();
  return (
    <>
      <nav className="fixed w-full bg-custompaleorange flex border-b-2 border-customdarkblue border-opacity-30 justify-between items-center lg:px-32 px-4 py-4 z-40">
        <Link className="lg:ml-20" to="/online-shop">
          <img src={logo} width="200" alt="logo" />
        </Link>

        <div className="hidden sm:flex">
          <Link
            className="flex hover:scale-105 transition-all  text-customdarkblue mr-4  py-2 px-4"
            to="/online-shop"
          >
            <h1 className="pr-2 text-xl font-bold self-center">Home</h1>
            <AiOutlineHome size={30} />
          </Link>
          <Link
            className="flex hover:scale-105 transition-all  text-customdarkblue mr-4  py-2 px-4"
            to="/online-shop/shoppingcart"
          >
            <h1 className="pr-2 text-xl font-bold self-center">
              Shopping Cart
            </h1>
            <AiOutlineShoppingCart size={30} />
            {numberOfItems > 0 && (
              <div className="bg-red-500 rounded-full w-8 h-8 text-xl border-red-800 text-red-800 border-2 font-extrabold flex justify-center items-center">
                {numberOfItems}
              </div>
            )}
          </Link>
        </div>
      </nav>
      <div className="fixed top-5 right-6 sm:hidden z-50">
        {mobileMenuIsOpen ? (
          <div className=" w-screen rounded-md pt-20 h-screen px-10 translate-x-6 -translate-y-5 p-5 flex flex-col gap-10 text-center bg-[#958577] text-custompaleorange">
            <img src={logo} alt="logo" width={150} className=" self-center" />
            <Link onClick={() => setMobileMenuIsOpen(false)} to="/online/shop">
              Home
            </Link>
            <Link onClick={() => setMobileMenuIsOpen(false)} to="/online-shop/shoppingcart">
              Shopping Cart
            </Link>
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
