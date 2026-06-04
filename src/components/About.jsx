import { motion } from 'framer-motion'

const stats = [
  { value: '1+', label: 'Year Experience', icon: '💼' },
  { value: '10k+', label: 'Users Served', icon: '👥' },
  { value: '75%', label: 'Process Automation', icon: '⚡' },
  { value: '25%', label: 'Defect Reduction', icon: '🎯' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ background: '#080c14' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-2xl"
                style={{
                  inset: '-8px',
                  border: '1.5px dashed rgba(0,212,255,0.2)',
                  borderRadius: '24px',
                }}
              />
              <div
                className="w-64 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0d1a2e 0%, #100d2e 100%)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  boxShadow: '0 0 60px rgba(0,212,255,0.08)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1/2"
                  style={{ background: 'linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 100%)' }}
                />
                <div className="relative z-10 text-center">
                  <div
                    className="text-7xl font-black select-none"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    A
                  </div>
                  <div className="text-gray-500 text-xs font-mono mt-1 tracking-widest">FULL-STACK DEV</div>
                </div>
                <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#00d4ff]/50" />
                <div className="absolute bottom-5 left-6 w-1.5 h-1.5 rounded-full bg-purple-400/50" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Based in{' '}
              <span className="text-[#00d4ff]">Gurgaon, India</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate Full-Stack Developer with hands-on experience building
              enterprise-grade web applications at Q3 Technologies. Specializing in
              .NET backend development and modern frontend frameworks, delivering
              solutions that serve thousands of users.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From designing RESTful APIs and optimizing database performance to
              event-driven architectures and cloud deployments — I solve complex
              engineering challenges with clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['ASP.NET Core', 'Angular', 'AWS', 'MySQL', 'Docker'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[#00d4ff] text-xs font-medium rounded-full"
                  style={{
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-xl p-6 text-center transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.border = '1px solid rgba(0,212,255,0.25)' }}
              onMouseLeave={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#00d4ff] mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
