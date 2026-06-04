import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00d4ff]/8 blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, 25, -35, 0], y: [0, 20, 15, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#00d4ff]/5 blur-[60px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[#00d4ff] text-base tracking-[0.25em] uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-none"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 60%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Ankit Singla
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-[#00d4ff] mb-6"
        >
          Full-Stack Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable enterprise solutions with{' '}
          <span className="text-white font-medium">ASP.NET Core</span>,{' '}
          <span className="text-white font-medium">Angular</span> &amp;{' '}
          <span className="text-white font-medium">Cloud technologies</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="mailto:ankitsingla34804@gmail.com?subject=Resume%20Request"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 bg-[#00d4ff] text-[#0a0f1e] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00d4ff]/25 transition-shadow duration-300"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 border-2 border-[#00d4ff] text-[#00d4ff] font-bold rounded-xl hover:bg-[#00d4ff]/10 transition-colors duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 border-2 border-gray-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#00d4ff] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
