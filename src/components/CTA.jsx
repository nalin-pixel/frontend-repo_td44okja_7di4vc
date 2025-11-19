import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/15 bg-emerald-900/30 backdrop-blur p-8 sm:p-12 text-center text-amber-50">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-amber-300/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-emerald-400/20 blur-3xl rounded-full" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Enquire for Christmas bookings
          </motion.h3>
          <p className="mt-4 text-amber-100/80 max-w-2xl mx-auto">
            Tell us your preferred date, group size and any special touches you have in mind.
          </p>

          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input aria-label="Name" className="w-full rounded-xl bg-emerald-950/40 border border-amber-200/20 px-4 py-3 placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Your name" />
            <input aria-label="Email" className="w-full rounded-xl bg-emerald-950/40 border border-amber-200/20 px-4 py-3 placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Email" />
            <input aria-label="Party size" className="w-full rounded-xl bg-emerald-950/40 border border-amber-200/20 px-4 py-3 placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Party size" />
            <textarea aria-label="Message" className="sm:col-span-3 w-full h-28 rounded-xl bg-emerald-950/40 border border-amber-200/20 px-4 py-3 placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Tell us about your event" />
            <button className="sm:col-span-3 mt-2 inline-flex justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-amber-50 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">Send enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
