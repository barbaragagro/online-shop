import { createContext, useEffect, useState } from 'react';
import { useProductContext } from '../hooks/useProductContext';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = useProductContext();
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const AddToCart = (productId) => {
    const addedItem = cart.find((cartItem) => cartItem.id === productId);
    addedItem.cartNumber++;
    setCart((prev) => [...prev, prev.addedItem++]);
    if (addedItem.salePrice) {
      setTotalPrice((prev) => prev + +addedItem.salePrice);
    } else {
      setTotalPrice((prev) => prev + +addedItem.price);
    }
    setNumberOfItems((prev) => prev + 1);
  };
  const RemoveFromCart = (productId) => {
    const removedItem = cart.find((cartItem) => cartItem.id === productId);
    if (removedItem.cartNumber > 0) {
      removedItem.cartNumber--;
      if (removedItem.salePrice) {
        setTotalPrice((prev) => prev - +removedItem.salePrice);
      } else {
        setTotalPrice((prev) => prev - +removedItem.price);
      }
    }
    setCart((prev) => [...prev, prev.removedItem--]);
    if (numberOfItems > 0) setNumberOfItems((prev) => prev - 1);
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
    <ShopContext.Provider
      value={{ cart, AddToCart, RemoveFromCart, numberOfItems, totalPrice }}
    >
      {children}
    </ShopContext.Provider>
  );
};
