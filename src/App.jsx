import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Ambient background pattern in sage + gold */}
      <div className="fixed inset-0 -z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_20%_-10%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(16,185,129,0.14),transparent_40%)]" />
      </div>

      <Navbar />
      <Hero />
      <ParallaxShowcase />

      {/* Subtle divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      </div>

      <CTA />

      <footer className="py-12 text-center text-amber-100/70">
        © {new Date().getFullYear()} Your Venue • Winter Season
      </footer>
    </div>
  )
}

export default App
