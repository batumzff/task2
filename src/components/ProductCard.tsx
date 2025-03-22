import { useDispatch } from 'react-redux';
import { Product, addToCart } from '../store/cartSlice.ts';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-lavender/5 overflow-hidden group">
      <div className="relative h-48 p-4 flex items-center justify-center bg-white transition-all group-hover:bg-cream/30">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2 line-clamp-2 min-h-[3.5rem] text-lavender/90">{product.title}</h3>
        
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-powder">${product.price.toFixed(2)}</span>
            
            <button 
              onClick={handleAddToCart}
              className="bg-mint text-lavender px-4 py-2 rounded-lg text-sm font-medium hover:bg-lavender hover:text-white transition-all duration-300"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 