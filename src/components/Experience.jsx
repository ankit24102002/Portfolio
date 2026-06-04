import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Q3 Technologies',
    role: 'Junior Software Developer',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    color: '#00d4ff',
    bullets: [
      'Architected and delivered 6+ enterprise WMS modules — task scheduling, workflow orchestration, manpower allocation, vendor tracking, and operational monitoring — using ASP.NET Core Web API and Entity Framework Core, supporting 500+ daily active users.',
      'Engineered and maintained 20+ scalable RESTful APIs ensuring reliable communication between mobile frontend and backend services with structured request/response models and comprehensive error handling.',
      'Built an HT/LT electrical permit management system for controlled shutdown approvals, enabling safe maintenance execution based on pole number and area mapping — reducing manual intervention by ~70–75%.',
      'Designed an event-driven notification system using SignalR and message queuing, processing 1,000+ daily operational events for real-time task updates and approvals, improving responsiveness by 40%.',
      'Conducted Root Cause Analysis (RCA) across 15+ production incidents, identifying workflow and data inconsistencies, reducing recurring defects by ~25%.',
      'Partnered with frontend and mobile teams across 3+ cross-functional squads to define API contracts and payload structures via Swagger/OpenAPI, reducing integration defects by 30%.',
    ],
  },
  {
    company: 'Q3 Technologies',
    role: '.NET Developer Intern',
    period: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    color: '#7c3aed',
    bullets: [
      'Optimized 5+ critical backend API endpoints, achieving ~30% reduction in response latency (~200ms improvement) for over 10,000+ active users.',
      'Automated background job processing using .NET console services and Hangfire, eliminating 15+ hours of weekly manual effort (~30% reduction).',
      'Conducted requirement analysis for 10+ features, translating complex business workflows into technical specifications that accelerated feature delivery by 20%.',
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
                <div
                  className="absolute left-0 sm:left-1 top-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: '#06080f',
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 16px ${exp.color}40`,
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: exp.color }} />
                </div>

                <div
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
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
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
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
