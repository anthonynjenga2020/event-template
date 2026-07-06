import { motion } from 'framer-motion'
import { Calendar, MessageSquare, PhoneMissed, Users, Star, BellRing } from 'lucide-react'

export default function SaaSFeatures() {
  const features = [
    {
      title: 'Automated Appointment Reminders',
      subtitle: 'The "Golden" Feature',
      icon: <BellRing className="w-8 h-8" />,
      description: 'How much money did you lose last month to no-shows? Our system automatically sends an SMS & email reminder 24 and 2 hours before the appointment. Clients can reply C to confirm or R to reschedule. Drastically reduce your no-show rate.',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10'
    },
    {
      title: 'Self-Serve Online Booking',
      subtitle: 'The 24/7 Receptionist',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Most people decide they need a haircut at 10 PM. If they have to wait until 9 AM to call, they book somewhere else. Give them a beautiful 24/7 calendar to choose their service and stylist without your front desk answering a call.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Missed Call Text Back',
      subtitle: 'Capture Every Lead',
      icon: <PhoneMissed className="w-8 h-8" />,
      description: 'When your front desk is slammed on a Saturday and misses a call, that is a lost appointment. Our system instantly texts them back: "Hi! We are helping another client. Book instantly here: [Link]." Capture bookings without picking up.',
      color: 'text-red-500',
      bg: 'bg-red-500/10'
    },
    {
      title: 'VIP Database Reactivation',
      subtitle: 'The "6-Week" Campaign',
      icon: <Users className="w-8 h-8" />,
      description: 'If a client comes in every 6 weeks and it has been 8, they are slipping away. We set up an automated Win-Back campaign that texts them: "Hey, it\'s been a while! We have openings left this week." Free money sitting in your database.',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Review Funnels',
      subtitle: 'The "Selfie" Request',
      icon: <Star className="w-8 h-8" />,
      description: 'When a client leaves looking amazing, they are happiest. We automatically send a text 1 hour later: "We loved having you! If you love your new look, we\'d appreciate a quick Google review." Dominate local search effortlessly.',
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
    {
      title: 'The "Cancellation Filler"',
      subtitle: 'Waitlist Blast',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'When someone cancels for tomorrow morning, what do you do? Send a single text blast to your VIP list: "A 10 AM slot just opened for a cut & color tomorrow! First to reply gets 10% off." Turn a lost $200 appointment into instant cash.',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white dark:bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500 dark:text-gray-400">
            Salon Growth Engine
          </h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-gray-900 dark:text-white mb-6 leading-tight">
            Put Your Salon on Autopilot
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stop losing money to no-shows, missed calls, and empty chairs. Our integrated tools do the heavy lifting so you can focus on your craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl p-8 border border-gray-100 dark:border-[#222222] hover:border-gray-200 dark:border-[#333333] hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl \${feature.bg} \${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{feature.subtitle}</h4>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



