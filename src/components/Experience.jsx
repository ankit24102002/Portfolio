import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Q3 Technologies',
    role: 'Junior Software Developer',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Developed WMS (Warehouse Management System) modules to streamline inventory operations and reduce errors.',
      'Built and maintained RESTful APIs for seamless integrations across internal and external systems.',
      'Engineered an HT/LT electrical permit management system, reducing manual intervention by 70–75%.',
      'Implemented event-driven notification pipelines to improve real-time operational responsiveness.',
      'Conducted Root Cause Analysis (RCA) sessions, reducing recurring production defects by 25%.',
      'Collaborated with cross-functional teams on API contracts to ensure consistent system integration.',
    ],
  },
  {
    company: 'Q3 Technologies',
    role: '.NET Developer Intern',
    period: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    bullets: [
      'Optimized critical API endpoints, reducing average response latency by ~30% (~200ms) for 10,000+ active users.',
      'Automated background jobs using Hangfire, reducing manual operational effort by ~30%.',
      'Conducted requirement analysis and translated complex business needs into clear technical specifications.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-[#0d1526]">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#00d4ff]/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-5 w-8 h-8 bg-[#0d1526] border-2 border-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00d4ff]/20">
                  <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full" />
                </div>

                {/* Card */}
                <div className="bg-[#0a0f1e] border border-white/8 rounded-2xl p-6 hover:border-[#00d4ff]/25 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-[#00d4ff] font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-sm text-gray-400 bg-[#0d1526] px-3 py-1 rounded-lg whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mt-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-[#00d4ff] shrink-0 mt-0.5 font-mono">▹</span>
                        <span>{bullet}</span>
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
