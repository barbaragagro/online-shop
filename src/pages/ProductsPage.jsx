import { useState } from 'react';
import Category from '../components/Category';
import Input from '../components/Input';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../hooks/useProductContext';
import Sort from '../components/Sort';

export default function ProductsPage() {
  const products = useProductContext();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const filteredProducts = products.filter(
    (prod) =>
      prod.keywords.toLowerCase().includes(searchText.toLowerCase()) &&
      prod.category.includes(selectedCategory)
  );

  const sortedProducts =
    selectedSort === 'low-high'
      ? filteredProducts.sort(
          (a, b) =>
            (a.salePrice ? a.salePrice : a.price) -
            (b.salePrice ? b.salePrice : b.price)
        )
      : selectedSort === 'high-low'
      ? filteredProducts
          .sort(
            (a, b) =>
              (a.salePrice ? a.salePrice : a.price) -
              (b.salePrice ? b.salePrice : b.price)
          )
          .reverse()
      : filteredProducts;

  return (
    <section className="mx-5 pt-28 ">
      <div className="flex flex-col lg:flex-row justify-around">
        <Input searchText={searchText} setSearchText={setSearchText} />
        <Category setSelectedCategory={setSelectedCategory} />
        <Sort setSelectedSort={setSelectedSort} />
      </div>
      <div className="flex flex-wrap justify-center">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
