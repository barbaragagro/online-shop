import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../hooks/useShopContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { AddToCart } = useShopContext();

  const handleClick = () => {
    navigate(`/online-shop/productdetail/:${product.url}`);
  };
  return (
    <section className="flex flex-col justify-between m-5 sm:w-72 p-5 rounded-lg shadow-xl bg-custompaleorange bg-opacity-40 ">
      <div className="cursor-pointer" onClick={handleClick}>
        {product.images && (
          <img
            className="w-100 mb-2"
            alt={product.name}
            src={product.images[0]}
          />
        )}
        <p className="text-customdarkorange font-bold mb-1">{product.name}</p>
      </div>
      <div className="flex flex-col shadow-lg rounded-lg">
        <p
          className={`${
            product.salePrice && 'line-through'
          } font-bold self-center`}
        >
          {product.price}$
        </p>
        {product.salePrice && (
          <p className="self-center text-xl text-red-700 font-bold">
            {product.salePrice}$
          </p>
        )}
        <button
          onClick={() => AddToCart(product.id)}
          className="hover:scale-105 transition-all hover:bg-opacity-95 self-center text-custompaleorange rounded-lg px-5 py-2 my-2 bg-customdarkblue w-3/4"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
