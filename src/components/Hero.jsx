import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06080f 0%, #0a0f1e 60%, #0d0a1e 100%)' }}
    >
      {/* Ambient glow blobs */}
      <motion.div
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -25, 20, 0], y: [0, 25, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left – text */}
          <div className="flex-1 text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-4"
            >
              Ankit Singla
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6"
            >
              <span className="text-white">Full Stack</span>
              <br />
              <span className="text-white">Developer</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                &amp; Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed"
            >
              Building scalable enterprise solutions with{' '}
              <span className="text-white font-medium">ASP.NET Core</span>,{' '}
              <span className="text-white font-medium">Angular</span> &amp;{' '}
              <span className="text-white font-medium">Cloud</span> technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1OcmCsvv6FO_rkaoBRGthDCloqI9n1j-a"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 font-bold rounded-xl text-[#0a0f1e] transition-shadow duration-300 hover:shadow-xl"
                style={{ background: 'linear-gradient(90deg, #00d4ff, #0099bb)' }}
              >
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 font-bold rounded-xl border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://linkedin.com/in/ankit24102002"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#00d4ff] transition-colors text-sm font-mono"
              >
                LinkedIn
              </a>
              <span className="w-px h-4 bg-gray-700" />
              <a
                href="https://github.com/ankit24102002"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#00d4ff] transition-colors text-sm font-mono"
              >
                GitHub
              </a>
              <span className="w-px h-4 bg-gray-700" />
              <a
                href="mailto:ankitsingla34804@gmail.com"
                className="text-gray-500 hover:text-[#00d4ff] transition-colors text-sm font-mono"
              >
                Email
              </a>
            </motion.div>
          </div>

          {/* Right – avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 80 }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(124,58,237,0.15) 60%, transparent 100%)',
                  transform: 'scale(1.3)',
                }}
              />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px dashed rgba(0,212,255,0.25)',
                  transform: 'scale(1.12)',
                }}
              />

              {/* Avatar card */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1a0f3a 0%, #0d1a3a 50%, #0a2040 100%)',
                  border: '2px solid rgba(0,212,255,0.3)',
                  boxShadow: '0 0 60px rgba(0,212,255,0.12), 0 0 120px rgba(124,58,237,0.08)',
                }}
              >
                {/* Decorative inner glow */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 rounded-t-full opacity-30"
                  style={{ background: 'linear-gradient(180deg, rgba(0,212,255,0.15) 0%, transparent 100%)' }}
                />

                {/* Initials */}
                <div className="relative z-10 text-center">
                  <div
                    className="text-8xl font-black select-none leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    A
</div>
                  <div className="text-gray-400 text-xs font-mono mt-1 tracking-widest">DEVELOPER</div>
                </div>

                {/* Corner dots */}
                <div className="absolute top-8 right-10 w-2 h-2 rounded-full bg-[#00d4ff]/60" />
                <div className="absolute bottom-10 left-9 w-1.5 h-1.5 rounded-full bg-purple-400/60" />
              </div>

              {/* Floating tech badges */}
              {[
                { label: '.NET', top: '5%', right: '-10%', delay: 0 },
                { label: 'AWS', bottom: '15%', right: '-12%', delay: 0.3 },
                { label: 'React', bottom: '5%', left: '-8%', delay: 0.6 },
                { label: 'SQL', top: '15%', left: '-10%', delay: 0.9 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: badge.delay,
                    ease: 'easeInOut',
                  }}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-bold text-[#00d4ff] font-mono"
                  style={{
                    ...badge,
                    background: 'rgba(0,212,255,0.1)',
                    border: '1px solid rgba(0,212,255,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #06080f)' }}
      />
    </section>
  )
}
