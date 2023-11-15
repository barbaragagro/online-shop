export default function ProductCard(product) {
  return (
    <section className="m-5 sm:w-72 p-5 rounded-lg shadow-xl bg-custompaleorange bg-opacity-40 ">
      {product.product.images && (
        <img className="w-100"
          alt={product.product.name}
  
          src={product.product.images[0]}
        />
      )}
      <div>
        <p>{product.product.name}</p>
        <p>{product.product.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: product.product.features }}
        ></div>

        <p>{product.product.price}$</p>
        <p>{product.product.salePrice}$</p>
      </div>
      <button>Add to cart</button>
    </section>
  );
}
