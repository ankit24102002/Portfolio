import { motion } from 'framer-motion'

const stats = [
  { value: '1+', label: 'Year Experience', icon: '💼' },
  { value: '10k+', label: 'Users Served', icon: '👥' },
  { value: '75%', label: 'Process Automation', icon: '⚡' },
  { value: '25%', label: 'Defect Reduction', icon: '🎯' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.h2 {...fadeUp()} className="text-4xl font-bold text-white mb-3">
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
          {/* Avatar / photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-blue-700/20 border border-[#00d4ff]/30 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-extrabold text-[#00d4ff] select-none">AS</span>
                {/* Corner decorations */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff]/50 rounded-tr-md" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff]/50 rounded-bl-md" />
              </div>
              {/* Floating ring */}
              <div className="absolute -inset-3 rounded-3xl border border-[#00d4ff]/10 -z-10" />
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
              Full-Stack Developer based in{' '}
              <span className="text-[#00d4ff]">Gurgaon, India</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Full-Stack Developer with hands-on experience building
              enterprise-grade web applications at Q3 Technologies. Specializing in
              .NET backend development and modern frontend frameworks, I've delivered
              solutions that serve thousands of users while dramatically reducing
              operational overhead.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From designing RESTful APIs and optimizing database performance to
              implementing event-driven architectures and cloud deployments — I thrive
              on solving complex engineering challenges with clean, maintainable code.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['ASP.NET Core', 'Angular', 'AWS', 'MySQL', 'Docker'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 rounded-full text-xs font-medium"
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.4)' }}
              className="bg-[#0d1a2d] border border-white/5 rounded-xl p-6 text-center transition-colors duration-300 cursor-default"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#00d4ff] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
