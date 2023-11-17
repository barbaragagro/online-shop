import React, { useEffect, useState } from 'react';
import { useShopContext } from '../hooks/useShopContext';
import {
  AiOutlineDelete,
  AiOutlinePlusCircle,
  AiOutlineShopping,
} from 'react-icons/ai';

export default function ShoppingCart() {
  const { cart, AddToCart, RemoveFromCart, totalPrice } = useShopContext();
  const [filteredCart, setFilteredCart] = useState([]);
  useEffect(() => {
    const filterCart = () => {
      const filteredCart = cart.filter((cartItem) => cartItem.cartNumber > 0);
      setFilteredCart(filteredCart);
    };
    filterCart();
  }, [cart]);
  return (
    <section className="mx-5 pt-28 ">
      <h1 className="sm:text-5xl text-xl font-bold text-customdarkorange sm:m-10 shadow-md p-5 bg-custompaleorange  rounded-lg">
        Your Shopping Cart
      </h1>
      <div className="">
        {filteredCart.length ? (
          filteredCart.map((cartItem, index) => (
            <div
              className="flex sm:flex-row flex-col justify-between my-5 sm:my-12 sm:mx-12 shadow-lg p-5"
              key={cartItem.id + index}
            >
              <div className="flex sm:flex-row flex-col">
                <img
                  alt={cartItem.name}
                  className="lg:w-80 sm:w-32 mb-5 sm:mb-0"
                  src={cartItem.images[0]}
                />
                <div className="flex flex-col justify-around ml-5">
                  <p className="font-bold sm:text-lg">{cartItem.name}</p>
                  <div className="flex items-center">
                    <span className="text-lg">quantity:</span>
                    <div className=" min-w-fit w-8 flex justify-center ml-2 bg-custompaleorange p-1 rounded-lg shadow-sm border border-customdarkorange text-customdarkorange">
                      {cartItem.cartNumber}
                    </div>
                  </div>
                  <p>
                    <span className="text-lg">price: </span>
                    <span
                      className={`${
                        cartItem.salePrice && 'text-red-700'
                      } text-lg font-bold `}
                    >
                      {cartItem.salePrice ? cartItem.salePrice : cartItem.price}
                      $
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:pl-16 sm:mt-0 mt-5">
                <button
                  className="hover:scale-105 transition-all flex justify-center rounded-lg sm:w-32 sm:h-1/2 items-center border border-green-500 bg-green-100 w-2/3 py-1 px-3 self-center mb-4"
                  onClick={() => AddToCart(cartItem.id)}
                >
                  <AiOutlinePlusCircle color="green" size={25} />
                </button>
                <button
                  className="hover:scale-105 transition-all flex justify-center rounded-lg sm:w-32 sm:h-1/2 items-center border border-red-500 bg-red-100 w-2/3 py-1 px-3 self-center"
                  onClick={() => RemoveFromCart(cartItem.id)}
                >
                  <AiOutlineDelete color="red" size={25} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="flex justify-center text-2xl font-bold m-24 text-center">
            No items in the cart!
          </h1>
        )}
      </div>
      <div className="pb-8 flex flex-col justify-center items-center sm:items-end my-5 sm:my-12 sm:mx-12 shadow-lg p-5">
        <p className='text-3xl font-bold'>TOTAL: {totalPrice.toFixed(2)}$</p>
        <button className='hover:scale-105 sm:w-fit w-2/3 transition-all font-semibold shadow-lg border border-customdarkorange mt-5 flex justify-center bg-custompaleorange p-5 rounded-lg '>
          CHECKOUT <AiOutlineShopping className='ml-1' size={25}/>
        </button>
      </div>
    </section>
  );
}
