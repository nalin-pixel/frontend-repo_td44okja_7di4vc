import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import Packages from './components/Packages';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Ambient background pattern */}
      <div className="fixed inset-0 -z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(244,63,94,0.06),transparent_40%),radial-gradient(circle_at_20%_-10%,rgba(244,63,94,0.12),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(239,68,68,0.12),transparent_40%)]" />
      </div>

      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <Packages />

      {/* Snowfall line divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <CTA />

      <footer className="py-12 text-center text-white/60">
        © {new Date().getFullYear()} Your Venue • Winter Season
      </footer>
    </div>
  )
}

export default App
