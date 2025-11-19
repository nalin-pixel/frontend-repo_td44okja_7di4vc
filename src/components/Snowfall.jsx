import { motion } from 'framer-motion';

// Simple snowfall effect using framer-motion
// Renders a set of softly glowing flakes drifting down with slight sway
export default function Snowfall({ count = 80 }) {
  const flakes = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // viewport width percent
    size: Math.random() * 3 + 1.2, // px
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 10, // seconds
    sway: (Math.random() * 20 + 10) * (Math.random() > 0.5 ? 1 : -1),
    opacity: Math.random() * 0.4 + 0.3,
  }));

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      {flakes.map((f) => (
        <motion.span
          key={f.id}
          className="absolute rounded-full shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          style={{ left: `${f.left}vw`, width: f.size, height: f.size, background: 'rgba(255,255,255,0.9)', opacity: f.opacity }}
          initial={{ y: '-10vh', x: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, f.sway, 0, -f.sway * 0.6, 0],
            opacity: [0, f.opacity, f.opacity, f.opacity, 0],
          }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
