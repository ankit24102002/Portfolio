import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    color: '#00d4ff',
    skills: ['C#', 'SQL', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Core Concepts',
    color: '#a78bfa',
    skills: ['OOP', 'System Design'],
  },
  {
    category: 'Backend',
    color: '#34d399',
    skills: ['ASP.NET Core', 'Web API', 'MVC', 'Microservices'],
  },
  {
    category: 'Databases',
    color: '#fb923c',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#f472b6',
    skills: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Frontend',
    color: '#60a5fa',
    skills: ['Angular', 'React'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#0d1a2d] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-200 cursor-default transition-colors"
                    style={{
                      backgroundColor: `${group.color}15`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
