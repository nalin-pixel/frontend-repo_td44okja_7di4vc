import { Menu, Snowflake, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 px-4 py-2">
            <motion.div
              className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 grid place-items-center shadow-inner"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <Snowflake className="h-6 w-6 text-white drop-shadow" />
            </motion.div>
            <div>
              <p className="text-white font-semibold leading-tight">Your Venue</p>
              <p className="text-white/70 text-xs -mt-0.5">Festive Experiences</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#packages" className="hover:text-white transition">Packages</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-2 pr-3">
            <a href="#book" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium shadow-md hover:shadow-red-500/30 transition">
              <Phone className="h-4 w-4" /> Book Now
            </a>
            <button className="md:hidden p-3 text-white/80 hover:text-white"><Menu /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
