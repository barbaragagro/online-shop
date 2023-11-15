import data from '../assets/data/products.json';
import Input from '../components/Input';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <section className="mx-5 pt-28 md:mx-32 lg:mx-44">
      <Input />
      <div className='flex flex-wrap justify-center'>
        {data.products.data.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
