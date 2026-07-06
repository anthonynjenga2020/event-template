import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, MessageSquare, Settings, Users, PhoneMissed, BellRing } from 'lucide-react'

export default function DashboardDemoPage({ config }) {
  const [activeTab, setActiveTab] = useState('missedCall')
  const [isMissedCallActive, setIsMissedCallActive] = useState(true)
  const [isRemindersActive, setIsRemindersActive] = useState(true)
  const [blastSent, setBlastSent] = useState(false)

  const tabs = [
    { id: 'missedCall', label: 'Missed Call Text', icon: <PhoneMissed className="w-5 h-5" /> },
    { id: 'waitlist', label: 'Waitlist Blast', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'vip', label: 'VIP Reactivation', icon: <Users className="w-5 h-5" /> },
    { id: 'reminders', label: 'Reminders', icon: <BellRing className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1A1A] pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black font-headline text-gray-900 dark:text-white mb-4">Automation Dashboard</h1>
          <p className="text-gray-600">See how the backend runs your salon on autopilot.</p>
        </div>

        <div className="bg-white dark:bg-[#111111] rounded-3xl shadow-xl border border-gray-100 dark:border-[#222222] overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-900 text-white p-6">
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Automations</h2>
            <nav className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors \${
                    activeTab === tab.id ? 'bg-primary text-white' : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 md:p-12 relative flex">
            
            <div className="flex-1 max-w-lg">
              <AnimatePresence mode="wait">
                
                {/* Missed Call Demo */}
                {activeTab === 'missedCall' && (
                  <motion.div key="missedCall" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h2 className="text-2xl font-bold mb-2">Missed Call Text Back</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Never lose a lead when the front desk is busy.</p>
                    
                    <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-100 dark:border-[#222222] mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-gray-900 dark:text-white">Enable Feature</span>
                        <button 
                          onClick={() => setIsMissedCallActive(!isMissedCallActive)}
                          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 \${isMissedCallActive ? 'bg-green-500' : 'bg-gray-300'}`}
                        >
                          <div className={`w-6 h-6 bg-white dark:bg-[#111111] rounded-full shadow-md transform transition-transform duration-300 \${isMissedCallActive ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">When a call goes unanswered, send this template immediately:</p>
                      <textarea 
                        className="w-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#333333] rounded-xl p-4 text-sm text-gray-700 resize-none h-24"
                        defaultValue={`Hi! We're helping another client right now at \${config.businessName}. If you'd like to book an appointment, you can see our availability and book instantly right here: [Booking Link]`}
                        disabled
                      />
                    </div>
                  </motion.div>
                )}

                {/* Waitlist Blast Demo */}
                {activeTab === 'waitlist' && (
                  <motion.div key="waitlist" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h2 className="text-2xl font-bold mb-2">Cancellation Filler</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Fill sudden openings instantly by texting your VIP waitlist.</p>
                    
                    <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-100 dark:border-[#222222] mb-8">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">Blast Configuration</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Target Audience</label>
                          <div className="bg-white dark:bg-[#111111] border rounded-lg p-3 mt-1 text-sm font-medium">VIP Waitlist (142 Clients)</div>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Message</label>
                          <textarea 
                            className="w-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#333333] rounded-lg p-3 mt-1 text-sm text-gray-700 resize-none h-20"
                            defaultValue="A 10 AM slot just opened up for a cut & color tomorrow! First to reply gets 10% off."
                          />
                        </div>
                        <button 
                          onClick={() => setBlastSent(true)}
                          disabled={blastSent}
                          className={`w-full py-3 rounded-lg font-bold text-white transition-all \${blastSent ? 'bg-green-500' : 'bg-primary hover:bg-primaryDark'}`}
                        >
                          {blastSent ? 'Blast Sent Successfully!' : 'Send SMS Blast'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* VIP Reactivation Demo */}
                {activeTab === 'vip' && (
                  <motion.div key="vip" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h2 className="text-2xl font-bold mb-2">VIP Reactivation</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Automatically win back clients who haven't booked in 6 weeks.</p>
                    
                    <div className="bg-orange-50 border border-orange-100 text-orange-800 p-4 rounded-xl mb-6 flex gap-3">
                      <Users className="w-6 h-6 shrink-0" />
                      <p className="text-sm">You have <strong>84 clients</strong> who haven't booked in over 6 weeks. Potential revenue at risk: <strong>$12,600</strong>.</p>
                    </div>

                    <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-100 dark:border-[#222222]">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">"We Miss You" Campaign</h3>
                      <textarea 
                        className="w-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#333333] rounded-xl p-4 text-sm text-gray-700 resize-none h-24 mb-4"
                        defaultValue="Hey [Name], it's been a while! We have a few openings left this week at Lumina, want to claim a spot? Reply with Y!"
                        disabled
                      />
                      <button className="btn-primary px-6 py-3 rounded-lg text-sm font-bold w-full">
                        Activate Campaign
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Reminders Demo */}
                {activeTab === 'reminders' && (
                  <motion.div key="reminders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h2 className="text-2xl font-bold mb-2">Automated Reminders</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Kill no-shows with 24hr and 2hr SMS prompts.</p>
                    
                    <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-100 dark:border-[#222222] mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-gray-900 dark:text-white">Enable Reminders</span>
                        <button 
                          onClick={() => setIsRemindersActive(!isRemindersActive)}
                          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 \${isRemindersActive ? 'bg-green-500' : 'bg-gray-300'}`}
                        >
                          <div className={`w-6 h-6 bg-white dark:bg-[#111111] rounded-full shadow-md transform transition-transform duration-300 \${isRemindersActive ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <div className="space-y-4 border-t pt-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">24 Hour Reminder</span>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ACTIVE</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">2 Hour Reminder</span>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Mock Phone Preview */}
            <div className="hidden lg:flex flex-col items-center justify-center w-72 ml-12">
              <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl relative border-8 border-gray-800">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-40 mx-auto z-20"></div>
                
                <div className="bg-white dark:bg-[#111111] w-full h-full rounded-[2rem] overflow-hidden relative">
                  {/* Phone Header */}
                  <div className="bg-gray-100 dark:bg-[#222222] h-20 pt-8 px-4 flex items-center justify-center border-b">
                    <span className="font-bold text-gray-900 dark:text-white">{config.businessName}</span>
                  </div>
                  
                  {/* Phone Screen Content */}
                  <div className="p-4 space-y-4 h-[calc(100%-5rem)] bg-gray-50 dark:bg-[#1A1A1A] relative">
                    
                    <AnimatePresence mode="wait">
                      
                      {activeTab === 'missedCall' && isMissedCallActive && (
                        <motion.div key="phone-missed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-2">
                          <div className="bg-gray-200 self-end p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm text-gray-800">
                            Missed Voice Call
                          </div>
                          <div className="bg-blue-500 text-white self-start p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm shadow-sm">
                            Hi! We're helping another client right now at {config.businessName}. If you'd like to book an appointment, you can see our availability and book instantly right here: [Booking Link]
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'waitlist' && blastSent && (
                        <motion.div key="phone-blast" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-2">
                          <div className="bg-blue-500 text-white self-start p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm shadow-sm">
                            A 10 AM slot just opened up for a cut & color tomorrow! First to reply gets 10% off.
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'vip' && (
                        <motion.div key="phone-vip" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-2">
                          <div className="bg-blue-500 text-white self-start p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm shadow-sm">
                            Hey Jessica, it's been a while! We have a few openings left this week at Lumina, want to claim a spot? Reply with Y!
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'reminders' && isRemindersActive && (
                        <motion.div key="phone-reminders" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-2">
                          <div className="bg-blue-500 text-white self-start p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm shadow-sm">
                            Your appointment at {config.businessName} is tomorrow at 2:00 PM. Reply C to confirm or R to reschedule.
                          </div>
                          <div className="bg-gray-200 self-end p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm text-gray-800">
                            C
                          </div>
                          <div className="text-xs text-center text-gray-400 mt-2">Appointment Confirmed</div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}



