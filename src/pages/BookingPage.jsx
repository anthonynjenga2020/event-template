import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Scissors, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

export default function BookingPage({ config }) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedStylist, setSelectedStylist] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM']

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleBookingComplete = () => {
    // In a real app, this would hit an API to create the booking
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header & Progress */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black font-headline text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-gray-600">Our 24/7 self-serve system. Lock in your slot instantly.</p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold \${
                  step >= num ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`w-16 h-1 mx-2 rounded \${step > num ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[500px] relative">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Scissors className="text-primary" /> Select Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => { setSelectedService(service); nextStep() }}
                      className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 \${
                        selectedService?.name === service.name 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{service.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: STYLIST */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8"
              >
                <button onClick={prevStep} className="mb-6 flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <User className="text-primary" /> Choose Stylist
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {config.team.map((stylist) => (
                    <button
                      key={stylist.name}
                      onClick={() => { setSelectedStylist(stylist); nextStep() }}
                      className={`text-center p-6 rounded-2xl border-2 transition-all duration-200 \${
                        selectedStylist?.name === stylist.name 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <img src={stylist.image} alt={stylist.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900">{stylist.name}</h3>
                      <p className="text-sm text-gray-500">{stylist.specialty}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8"
              >
                <button onClick={prevStep} className="mb-6 flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </button>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Calendar className="text-primary" /> Pick a Date
                    </h2>
                    {/* Mock Calendar Grid */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <ChevronLeft className="text-gray-400 cursor-pointer hover:text-gray-900" />
                        <span className="font-bold">October 2025</span>
                        <ChevronRight className="text-gray-400 cursor-pointer hover:text-gray-900" />
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-gray-500">
                        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 30 }).map((_, i) => {
                          const date = i + 1;
                          const isSelected = selectedDate === date;
                          const isPast = date < 15;
                          return (
                            <button
                              key={date}
                              disabled={isPast}
                              onClick={() => setSelectedDate(date)}
                              className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-colors \${
                                isPast ? 'text-gray-300 cursor-not-allowed' :
                                isSelected ? 'bg-primary text-white shadow-md' :
                                'hover:bg-gray-200 text-gray-700'
                              }`}
                            >
                              {date}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Clock className="text-primary" /> Available Times
                    </h2>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border font-medium text-sm transition-all \${
                              selectedTime === time 
                                ? 'border-primary bg-primary text-white shadow-md' 
                                : 'border-gray-200 hover:border-primary text-gray-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl p-6 text-center">
                        Select a date first to see available times
                      </div>
                    )}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="mt-12 flex justify-end"
                  >
                    <button 
                      onClick={handleBookingComplete}
                      className="btn-primary px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/30 flex items-center gap-2"
                    >
                      Confirm Appointment
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black mb-4 text-gray-900">You're Booked!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                  Your appointment with <span className="font-bold text-gray-900">{selectedStylist?.name}</span> for <span className="font-bold text-gray-900">{selectedService?.name}</span> is confirmed for Oct {selectedDate} at {selectedTime}.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-primary font-medium">
                  We'll send you an automated SMS reminder 24 hours before!
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
