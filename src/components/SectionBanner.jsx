import { motion } from 'framer-motion'

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 70,
  left: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  opacity: Math.random() * 0.7 + 0.2,
  delay: Math.random() * 3,
}))

export default function SectionBanner({ title, highlight, id }) {
  const words = title.split(' ')

  return (
    <div id={id} className="relative overflow-hidden" style={{ background: '#06080f', minHeight: '280px' }}>
      {/* Stars */}
      {STARS.map((s) => (
        <motion.div
          key={s.id}
          animate={{ opacity: [s.opacity, s.opacity * 0.3, s.opacity] }}
          transition={{ duration: 2 + s.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
          }}
        />
      ))}

      {/* Back mountains — deep purple */}
      <svg
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mt1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e1040" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="mt2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="mt3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#022c22" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Layer 1 – back purple peaks */}
        <path
          fill="url(#mt1)"
          d="M0,200 L90,110 L180,155 L290,60 L420,130 L550,45 L680,115 L800,55 L930,100 L1060,35 L1180,90 L1300,50 L1380,80 L1440,60 L1440,280 L0,280 Z"
        />
        {/* Layer 2 – mid teal peaks */}
        <path
          fill="url(#mt2)"
          d="M0,240 L120,170 L240,210 L380,150 L510,190 L640,130 L760,175 L890,140 L1020,178 L1150,145 L1270,175 L1380,155 L1440,165 L1440,280 L0,280 Z"
        />
        {/* Layer 3 – front dark */}
        <path
          fill="url(#mt3)"
          d="M0,280 L80,245 L180,265 L300,230 L430,255 L560,220 L690,248 L820,215 L950,242 L1080,218 L1200,244 L1330,228 L1440,240 L1440,280 Z"
        />
      </svg>

      {/* Moon glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 100,
          height: 100,
          top: '10%',
          right: '12%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.25) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />
      <div
        className="absolute rounded-full border border-[#00d4ff]/20 pointer-events-none"
        style={{ width: 50, height: 50, top: '12%', right: '14.5%' }}
      />

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center" style={{ minHeight: '280px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-5xl sm:text-7xl font-black text-white text-center px-4 leading-tight drop-shadow-2xl"
        >
          {words.map((word, i) =>
            word === highlight ? (
              <span key={i} className="text-[#00d4ff]">
                {word}{' '}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h2>
      </div>
    </div>
  )
}
