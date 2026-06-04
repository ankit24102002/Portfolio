import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
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
            Education
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="space-y-6">
          {/* University card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="group bg-[#0d1a2d] border border-white/5 rounded-2xl p-8 hover:border-[#00d4ff]/25 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex gap-5 items-start">
                {/* University icon */}
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 text-2xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                    KR Mangalam University
                  </h3>
                  <p className="text-[#00d4ff] font-semibold mt-0.5">
                    B.Tech — Computer Science &amp; Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Gurgaon, Haryana, India
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:items-end shrink-0">
                <span className="font-mono text-sm text-gray-400 bg-[#0a0f1e] px-3 py-1 rounded-lg">
                  Oct 2020 – Jul 2024
                </span>
                <div className="flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-3 py-1 rounded-lg">
                  <span className="text-[#00d4ff] text-sm font-bold">CGPA:</span>
                  <span className="text-white text-sm font-bold">7.82 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-[#0d1a2d] border border-white/5 rounded-2xl p-8 hover:border-[#fb923c]/25 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              {/* AWS icon */}
              <div className="w-14 h-14 rounded-xl bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center shrink-0 text-2xl">
                ☁️
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <span className="px-2 py-0.5 bg-[#fb923c]/15 text-[#fb923c] border border-[#fb923c]/25 rounded-full text-xs font-bold">
                    CERTIFIED
                  </span>
                </div>
                <p className="text-[#fb923c] font-semibold">Amazon Web Services (AWS)</p>
                <p className="text-gray-400 text-sm mt-2">
                  Foundational certification validating overall understanding of AWS Cloud,
                  services, pricing, and architectural best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
