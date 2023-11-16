import { createContext, useEffect, useState } from 'react';
import { useProductContext } from '../hooks/useProductContext';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = useProductContext();

  const AddToCart = (productId) => {
    const addedItem = cart.find((cartItem) => cartItem.id === productId);
    addedItem.cartNumber++;
    setCart((prev) => [...prev, prev.addedItem++]);
  };
  const RemoveFromCart = (productId) => {
    const removedItem = cart.find((cartItem) => cartItem.id === productId);
    if (removedItem.cartNumber > 0) removedItem.cartNumber--;
    setCart((prev) => [...prev, prev.removedItem--]);
  };

  useEffect(() => {
    const addInitialCartNumber = () => {
      const cart = products.map((product) => {
        product.cartNumber = 0;
        return product;
      });
      setCart(cart);
    };

    if (products) addInitialCartNumber();
  }, [products]);

  return (
    <ShopContext.Provider value={{ cart, AddToCart, RemoveFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
