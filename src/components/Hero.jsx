import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Sage overlay with golden glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-emerald-900/40 to-emerald-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,158,11,0.22),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-emerald-900/40 backdrop-blur px-3 py-1 text-amber-100/90 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
            Christmas bookings now open
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-amber-50">
            A Winter Wonderland at Your Venue
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-amber-100/90 max-w-2xl">
            Step into timeless tradition with a modern touch — evergreen garlands, candlelight, and a touch of gold. Host an unforgettable festive celebration.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#about" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-amber-50 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">Discover More</a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-emerald-900/50 text-amber-50 border border-amber-200/20 backdrop-blur hover:bg-emerald-900/70 transition">Enquire</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-emerald-950" />
    </section>
  );
}
