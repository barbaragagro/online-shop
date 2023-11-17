import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../hooks/useProductContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../hooks/useShopContext';

export default function ProductDetail() {
  const [Product, setProduct] = useState({});
  const params = useParams();
  const Url = params.productUrl.slice(1);
  const products = useProductContext();
  const navigate = useNavigate();
  const { AddToCart } = useShopContext();

  useEffect(() => {
    const getProductDetail = () => {
      if (Url) {
        const result = products.filter((product) => product.url === Url);
        setProduct(result[0]);
      }
    };

    getProductDetail();
  }, [Url, products]);

  return (
    <section className="mx-5 pt-28 md:mx-32 lg:mx-44">
      <div className="flex flex-col justify-between m-5 p-5 rounded-lg shadow-xl bg-custompaleorange bg-opacity-40 ">
        <div>
          <div className="mb-5 flex flex-col lg:flex-row">
            {Product.images &&
              Product.images.map((image, index) => (
                <img
                  key={'image' + index}
                  className="px-5 w-100 lg:w-1/3 mb-2"
                  alt={Product.name}
                  src={image}
                />
              ))}
          </div>
          <p className="shadow-md ml-5 text-2xl font-bold mb-5">
            category: {Product.category}{' '}
          </p>
          <p className="ml-5 text-2xl font-bold mb-5">{Product.name}</p>
          <p className="ml-5 text-xl mb-5">• {Product.description}</p>
          <div
            className="ml-5 text-lg text-customorange italic  mb-2"
            dangerouslySetInnerHTML={{ __html: Product.features }}
          ></div>
        </div>
        <div className="flex flex-col mt-5 shadow-lg rounded-lg">
          <p
            className={`${
              Product.salePrice && 'line-through'
            } font-bold self-center text-4xl`}
          >
            {Product.price}$
          </p>
          {Product.salePrice && (
            <p className="self-center text-6xl text-red-700 font-bold">
              {Product.salePrice}$
            </p>
          )}
          <div className="flex lg:flex-row flex-col lg:m-10">
            <button
              onClick={() => navigate('/online-shop')}
              className="font-bold lg:text-2xl justify-center hover:scale-105 transition-all hover:bg-opacity-95 text-customdarkblue rounded-lg mx-5 px-5 py-2 lg:mt-0 mt-5 mb-5 self-center  bg-customorange items-center w-3/4 lg:w-1/2 h-12 lg:h-24 "
            >
              Go back
            </button>
            <button
              onClick={() => AddToCart(Product.id)}
              className="flex font-bold lg:text-2xl justify-center hover:scale-105 transition-all hover:bg-opacity-95 text-custompaleorange rounded-lg mx-5 px-5 py-2 mb-5 self-center  bg-customdarkblue items-center w-3/4 lg:w-1/2  h-12 lg:h-24 "
            >
              Add to cart <AiOutlineShoppingCart className="pb-1" size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
