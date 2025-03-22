import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import ProductList from './components/ProductList.tsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
