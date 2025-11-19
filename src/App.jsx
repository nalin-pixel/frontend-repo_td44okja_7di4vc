import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import CTA from './components/CTA';
import Snowfall from './components/Snowfall';
import OrnateDivider from './components/OrnateDivider';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-amber-50 relative">
      {/* Deep sage backdrop with subtle vignette and gold mist */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,78,59,0.6),transparent_60%),radial-gradient(1200px_800px_at_80%_20%,rgba(245,158,11,0.12),transparent_70%),radial-gradient(900px_600px_at_10%_90%,rgba(16,185,129,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />
      </div>

      <Navbar />
      <Snowfall count={120} />
      <Hero />

      <OrnateDivider />
      <ParallaxShowcase />
      <OrnateDivider />

      <CTA />

      <footer className="py-14 text-center text-amber-100/75">
        © {new Date().getFullYear()} Your Venue • Winter Season
      </footer>
    </div>
  )
}

export default App
