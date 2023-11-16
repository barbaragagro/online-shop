import Input from '../components/Input';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../hooks/useProductContext';

export default function ProductsPage() {
  const products = useProductContext();
  return (
    <section className="mx-5 pt-28 md:mx-32 lg:mx-44">
      <Input />
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
