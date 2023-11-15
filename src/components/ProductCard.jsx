export default function ProductCard(product) {
  return (
    <section className="cursor-pointer flex flex-col justify-between m-5 sm:w-72 p-5 rounded-lg shadow-xl bg-custompaleorange bg-opacity-40 ">
      <div>
        {product.product.images && (
          <img
            className="w-100 mb-2"
            alt={product.product.name}
            src={product.product.images[0]}
          />
        )}
        <p className="font-bold mb-1">{product.product.name}</p>
        <p className="text-xs mb-1">{product.product.description}</p>
        <div
          className="text-customorange italic text-sm mb-2"
          dangerouslySetInnerHTML={{ __html: product.product.features }}
        ></div>
      </div>
      <div className="flex flex-col shadow-lg rounded-lg">
        <p
          className={`${
            product.product.salePrice && 'line-through'
          } font-bold self-center`}
        >
          {product.product.price}$
        </p>
        {product.product.salePrice && (
          <p className="self-center text-xl text-red-700 font-bold">
            {product.product.salePrice}$
          </p>
        )}
        <button className="hover:scale-105 transition-all hover:bg-opacity-95 self-center text-custompaleorange rounded-lg px-5 py-2 my-2 bg-customdarkblue w-3/4">Add to cart</button>
      </div>
    </section>
  );
}
