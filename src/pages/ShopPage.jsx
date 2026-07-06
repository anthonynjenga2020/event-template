import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const PRODUCTS = [
  { id: 1, name: "Rejuvenating Moisture Complex", price: 85.00, category: "Skincare", image: "/salon.jpg" },
  { id: 2, name: "Botanical Cleansing Oil", price: 42.00, category: "Skincare", image: "/salon1.jpg" },
  { id: 3, name: "Olaplex No.7 Bonding Oil", price: 30.00, category: "Haircare", image: "/salon2.jpg" },
  { id: 4, name: "Signature Room Diffuser", price: 55.00, category: "Lifestyle", image: "/salon3.jpg" },
  { id: 5, name: "Hydrating Rosewater Mist", price: 38.00, category: "Skincare", image: "/salon4.jpg" },
  { id: 6, name: "Intensive Repair Mask", price: 65.00, category: "Haircare", image: "/salon5.jpg" },
]

export default function ShopPage({ config }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
    setIsCartOpen(true)
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar config={config} />
      <main className="pt-32 pb-24 min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-gray-200 dark:border-[#333333] pb-8 gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-5xl lg:text-6xl font-headline font-normal text-gray-900 dark:text-white tracking-tight mb-4">
                The Boutique
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Curated premium products to extend your spa experience at home.</p>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-4 bg-white dark:bg-[#111111] rounded-full shadow-sm hover:shadow-md transition-shadow group border border-gray-100 dark:border-[#222222]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-white">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#111111] group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-[#1A1A1A] mb-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 bg-white dark:bg-[#111111]/90 backdrop-blur-sm text-[10px] font-medium uppercase tracking-widest px-3 py-1 text-gray-900 dark:text-white shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-headline font-normal text-gray-900 dark:text-white mb-2 leading-snug">{product.name}</h3>
                  <div className="flex justify-between items-end mt-4">
                    <span className="text-lg font-medium text-primary">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="text-xs uppercase tracking-widest font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Slide-out Cart */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4, ease: "easeOut" }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-[#111111] border-l border-gray-100 dark:border-[#222222] z-[101] flex flex-col shadow-2xl"
              >
                <div className="p-8 border-b border-gray-100 dark:border-[#222222] flex justify-between items-center bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                  <h2 className="text-2xl font-headline font-normal text-gray-900 dark:text-white">Your Bag</h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 dark:bg-[#222222] rounded-full transition-colors text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                  {cart.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20 font-light">
                      <p>Your bag is currently empty.</p>
                    </div>
                  ) : (
                    cart.map((item, index) => (
                      <div key={index} className="flex gap-6 items-center">
                        <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-gray-50 dark:bg-[#1A1A1A] mix-blend-multiply" />
                        <div className="flex-1">
                          <h4 className="font-normal text-gray-900 dark:text-white text-sm leading-snug mb-1">{item.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-3">{item.category}</p>
                          <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-8 border-t border-gray-100 dark:border-[#222222] bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">Subtotal</span>
                    <span className="text-3xl font-headline font-normal text-gray-900 dark:text-white">${total}</span>
                  </div>
                  <button 
                    className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-all ${cart.length > 0 ? 'bg-primary text-white hover:bg-[#B38458]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    disabled={cart.length === 0}
                    onClick={() => alert("Checkout flow preview!")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer config={config} />
    </>
  )
}



