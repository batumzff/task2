import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api.ts';
import { Product } from '../store/cartSlice.ts';
import ProductCard from './ProductCard.tsx';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-powder"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-lavender text-lg">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-mint text-lavender px-5 py-2.5 rounded-lg font-medium hover:bg-lavender hover:text-white transition-all duration-300"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10">
        <div className="inline-block">
          <h2 className="text-3xl font-bold mb-1 text-lavender">Ürünlerimiz</h2>
          <div className="h-1 w-1/3 bg-mint rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList; 