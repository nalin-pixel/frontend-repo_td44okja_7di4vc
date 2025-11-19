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
    <section id="about" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div style={{ y: y3 }} className="absolute -top-10 right-10 h-40 w-40 bg-amber-300/10 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-10 -left-10 h-56 w-56 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: y1 }} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-50">Traditional spirit, modern details</h2>
            <p className="text-amber-100/80 text-lg">
              Evergreen garlands, warm brass, and candlelit corners pair with contemporary lighting and immersive sound for a truly magical atmosphere.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Gift, title: 'Bespoke Experiences', desc: 'Curated to your group and occasion.' },
                { icon: GlassWater, title: 'Seasonal Menus', desc: 'Mulled wine, craft cocktails, and canapés.' },
                { icon: TreePine, title: 'Luxe Decor', desc: 'Sage greens, gold accents, and winter florals.' },
                { icon: Sparkles, title: 'Concierge Team', desc: 'From enquiry to final toast.' },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border border-amber-100/15 bg-emerald-900/30 backdrop-blur p-5 text-amber-50">
                  <f.icon className="h-6 w-6 text-amber-300" />
                  <p className="mt-3 font-semibold">{f.title}</p>
                  <p className="text-amber-100/70 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-amber-100/15 bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.25),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.25),transparent_40%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <Sparkles className="h-16 w-16 text-amber-200/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
