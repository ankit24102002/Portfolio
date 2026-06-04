import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Q3 Technologies',
    role: 'Junior Software Developer',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    color: '#00d4ff',
    bullets: [
      'Developed WMS (Warehouse Management System) modules to streamline inventory operations.',
      'Built and maintained RESTful APIs for seamless internal and external system integrations.',
      'Engineered an HT/LT electrical permit management system, reducing manual intervention by 70–75%.',
      'Implemented event-driven notification pipelines for real-time operational responsiveness.',
      'Conducted RCA sessions, reducing recurring production defects by 25%.',
      'Collaborated on API contracts ensuring consistent cross-functional system integration.',
    ],
  },
  {
    company: 'Q3 Technologies',
    role: '.NET Developer Intern',
    period: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    color: '#7c3aed',
    bullets: [
      'Optimized critical API endpoints, reducing average response latency ~30% (~200ms) for 10,000+ users.',
      'Automated background jobs using Hangfire, reducing manual operational effort by ~30%.',
      'Conducted requirement analysis and translated business needs into technical specifications.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4" style={{ background: '#06080f' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00d4ff, rgba(124,58,237,0.4), transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 sm:left-1 top-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: '#06080f',
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 16px ${exp.color}40`,
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 transition-all duration-300 group"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${exp.color}30`
                    e.currentTarget.style.boxShadow = `0 16px 40px ${exp.color}08`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ transition: 'color 0.2s' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-semibold mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="font-mono text-sm text-gray-400 px-3 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${exp.color}12`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="shrink-0 mt-0.5 font-mono" style={{ color: exp.color }}>▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
