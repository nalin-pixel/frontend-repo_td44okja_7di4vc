import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-white/90 mb-6">
            <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
            Now booking festive events
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Celebrate Christmas in spectacular style
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
            Host your holiday party at our immersive venue. Snow-kissed decor, seasonal menus, and magical moments designed to wow your guests.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#packages" className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition">View Packages</a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20 transition">Enquire</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
