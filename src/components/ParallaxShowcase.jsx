import { motion, useScroll, useTransform } from 'framer-motion';
import { Gift, Sparkles, TreePine, GlassWater } from 'lucide-react';
import { useRef } from 'react';

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div style={{ y: y3 }} className="absolute -top-10 right-10 h-40 w-40 bg-rose-500/10 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-10 -left-10 h-56 w-56 bg-red-500/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: y1 }} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A venue made for wonder</h2>
            <p className="text-white/80 text-lg">
              From twinkling lights to custom cocktail menus, every detail is curated to deliver a seamless, unforgettable celebration for teams of all sizes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Gift, title: 'Tailored Packages', desc: 'Choose from relaxed drinks to full private hire.' },
                { icon: GlassWater, title: 'Seasonal Menus', desc: 'Festive cocktails, canapés, and dining.' },
                { icon: TreePine, title: 'Immersive Decor', desc: 'Snow, sparkle and modern ambient lighting.' },
                { icon: Sparkles, title: 'Concierge Team', desc: 'Dedicated planners from enquiry to last toast.' },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 text-white">
                  <f.icon className="h-6 w-6 text-rose-300" />
                  <p className="mt-3 font-semibold">{f.title}</p>
                  <p className="text-white/70 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.3),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.25),transparent_40%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <Sparkles className="h-16 w-16 text-white/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
