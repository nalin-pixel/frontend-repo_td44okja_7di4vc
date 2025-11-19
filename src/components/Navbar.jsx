import { Menu, Snowflake, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-emerald-900/30 backdrop-blur-md border border-emerald-300/20 shadow-lg">
          <div className="flex items-center gap-3 px-4 py-2">
            <motion.div
              className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 grid place-items-center shadow-inner"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <Snowflake className="h-6 w-6 text-amber-200 drop-shadow" />
            </motion.div>
            <div>
              <p className="text-amber-50 font-semibold leading-tight">Your Venue</p>
              <p className="text-amber-100/70 text-xs -mt-0.5">Winter Wonderland</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-amber-100/80">
            <a href="#about" className="hover:text-amber-100 transition">About</a>
            <a href="#contact" className="hover:text-amber-100 transition">Contact</a>
          </div>
          <div className="flex items-center gap-2 pr-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-amber-50 font-medium shadow-md hover:shadow-emerald-500/30 transition">
              <Phone className="h-4 w-4" /> Enquire
            </a>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden p-3 text-amber-100/80 hover:text-amber-100"><Menu /></button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-emerald-300/20 bg-emerald-900/50 backdrop-blur p-4 md:hidden text-amber-50">
            <div className="flex flex-col gap-3">
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-amber-200">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-amber-200">Contact</a>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-amber-50 font-medium shadow-md">Enquire</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
