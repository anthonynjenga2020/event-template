import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Loader from '../components/Loader.jsx'

export default function GiftCardsPage({ config }) {
  const [loading, setLoading] = useState(true)
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [recipientName, setRecipientName] = useState('')
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')
  const [purchased, setPurchased] = useState(false)

  const amounts = [50, 100, 150, 200, 300, 500]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      window.scrollTo(0, 0)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar config={config} />
      
      <AnimatePresence>
        {loading && <Loader config={config} />}
      </AnimatePresence>

      <main className={`min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] pt-24 pb-20 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-1000'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
          
          <div className="text-center mb-16">
            <h1 className="font-headline font-normal text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4">
              Give the Gift of Luxury
            </h1>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Treat someone special to a rejuvenating experience at {config.businessName}. Our digital gift cards are delivered instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Card Preview */}
            <div className="sticky top-32">
              <motion.div 
                className="relative w-full aspect-[1.58/1] rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Card Background */}
                <img 
                  src={config.heroImageUrl} 
                  alt="Spa background" 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80" />
                
                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-headline text-3xl font-normal drop-shadow-md">{config.businessName}</h2>
                      <p className="text-sm font-light text-white/80 tracking-widest uppercase mt-1">Digital Gift Card</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-light text-white/80 uppercase tracking-widest">Value</p>
                      <p className="font-headline text-4xl font-normal text-primary drop-shadow-md">${selectedAmount}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-1">
                    <p className="text-sm font-light text-white/80 uppercase tracking-widest">To</p>
                    <p className="text-xl font-headline italic">{recipientName || 'Recipient Name'}</p>
                  </div>
                </div>
              </motion.div>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 font-light">
                *Gift cards never expire and can be used for any service or retail product.
              </p>
            </div>

            {/* Right: Customization Form */}
            <motion.div 
              className="bg-white dark:bg-[#111111] p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-[#222222]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!purchased ? (
                <form onSubmit={(e) => { e.preventDefault(); setPurchased(true); }} className="space-y-8">
                  
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-4">Select Amount</label>
                    <div className="grid grid-cols-3 gap-3">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setSelectedAmount(amount)}
                          className={`py-3 rounded-none border transition-all duration-200 ${
                            selectedAmount === amount 
                              ? 'border-primary bg-primary text-white' 
                              : 'border-gray-200 dark:border-[#333333] text-gray-600 hover:border-primary hover:text-primary'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-2">Who is this for?</label>
                      <input 
                        type="text" 
                        required
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Recipient's Name"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#333333] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-2">Recipient's Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Delivery Email Address"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#333333] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-2">Who is this from?</label>
                      <input 
                        type="text" 
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#333333] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-2">Personal Message (Optional)</label>
                      <textarea 
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Add a special note..."
                        className="w-full px-4 py-3 border border-gray-200 dark:border-[#333333] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-base">
                    Checkout — ${selectedAmount}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-3xl mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    Your gift card has been successfully purchased and sent to the recipient. A receipt has been emailed to you.
                  </p>
                  <button onClick={() => setPurchased(false)} className="btn-outline">
                    Purchase Another
                  </button>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </main>

      <Footer config={config} />
    </>
  )
}



