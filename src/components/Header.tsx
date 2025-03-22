import { useSelector } from 'react-redux';
import { RootState } from '../store/index.ts';

const Header = () => {
  const itemCount = useSelector((state: RootState) => state.cart.itemCount);

  return (
    <header className="bg-white text-lavender py-4 px-6 shadow-sm border-b border-lavender/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-lavender">BM Store</h1>
          </div>
          
          <div className="relative">
            <button className="p-2 rounded-full transition-colors hover:bg-cream/50 text-powder">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-lavender text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 