import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    color: '#00d4ff',
    skills: ['C#', 'SQL', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend',
    color: '#34d399',
    skills: [
      'ASP.NET Core', 'Web API', 'MVC', 'Microservices',
      'Entity Framework Core', 'LINQ', 'SignalR',
      'Redis', 'RabbitMQ', 'Kafka',
    ],
  },
  {
    category: 'Databases',
    color: '#fb923c',
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#f472b6',
    skills: [
      'AWS', 'EC2', 'S3', 'Lambda', 'RDS',
      'Docker', 'Kubernetes', 'Terraform', 'Helm',
      'Jenkins', 'CI/CD', 'GitHub Actions', 'SonarQube',
    ],
  },
  {
    category: 'Frontend',
    color: '#60a5fa',
    skills: [
      'Angular', 'React', 'HTML5', 'CSS3',
      'Bootstrap', 'Tailwind CSS', 'Material UI', 'jQuery',
    ],
  },
  {
    category: 'Testing',
    color: '#fbbf24',
    skills: ['Postman', 'Swagger / OpenAPI'],
  },
  {
    category: 'Architecture & Design',
    color: '#a78bfa',
    skills: [
      'OOP', 'SOLID Principles', 'Design Patterns',
      'Clean Architecture', 'CQRS', 'Event-Driven Architecture',
      'Domain-Driven Design', 'System Design',
    ],
  },
  {
    category: 'Tools',
    color: '#94a3b8',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Jira', 'Visual Studio', 'VS Code'],
  },
  {
    category: 'AI & Modern Tech',
    color: '#c084fc',
    skills: ['OpenAI API', 'Claude API', 'LangChain', 'RAG', 'Vector Databases', 'AI Agents'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4" style={{ background: '#080c14' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1px solid ${group.color}30`
                e.currentTarget.style.boxShadow = `0 16px 40px ${group.color}08`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <h3
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm font-medium text-gray-200 rounded-lg cursor-default"
                    style={{
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}25`,
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
