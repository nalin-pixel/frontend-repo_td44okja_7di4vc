import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Fireside',
    price: '£39pp',
    features: ['Welcome fizz', 'Festive canapés', 'House DJ', 'Snowfall reveal'],
    accent: 'from-red-500 to-rose-500'
  },
  {
    name: 'Wonderland',
    price: '£69pp',
    features: ['Signature cocktails', 'Premium canapés', 'Live entertainment', 'Photo & props'],
    accent: 'from-rose-500 to-pink-500'
  },
  {
    name: 'Private Hire',
    price: 'POA',
    features: ['Exclusive venue access', 'Bespoke menus', 'Branding & AV', 'Concierge planning'],
    accent: 'from-pink-500 to-red-500'
  }
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Festive Packages</h2>
          <p className="mt-3 text-white/70">Choose the vibe, we handle the magic.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur px-6 py-7 text-white overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br ${t.accent} opacity-30`} />
              <div className="relative">
                <p className="text-sm text-white/70">{t.name}</p>
                <p className="mt-2 text-4xl font-extrabold">{t.price}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90">
                      <span className="h-5 w-5 rounded-full bg-white/10 grid place-items-center">
                        <Check className="h-3.5 w-3.5 text-rose-300" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 font-semibold shadow hover:shadow-rose-500/30 transition">Enquire</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
