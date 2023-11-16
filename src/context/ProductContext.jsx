import data from '../assets/data/products.json';
import { createContext } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={data.products.data.items}>
      {children}
    </ProductContext.Provider>
  );
};
