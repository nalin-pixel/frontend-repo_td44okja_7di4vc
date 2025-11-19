import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-8 sm:p-12 text-center text-white">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-rose-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-red-500/20 blur-3xl rounded-full" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Ready to plan your Christmas celebration?
          </motion.h3>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Share your date, group size and vision — our planners will craft the perfect festive experience.
          </p>

          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Your name" />
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Email" />
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Party size" />
            <textarea className="sm:col-span-3 w-full h-28 rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Tell us about your event" />
            <button className="sm:col-span-3 mt-2 inline-flex justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition">Enquire Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
