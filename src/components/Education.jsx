import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4" style={{ background: '#06080f' }}>
      <div className="max-w-4xl mx-auto">
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

        <div className="space-y-5">
          {/* University */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid rgba(0,212,255,0.25)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,212,255,0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">KR Mangalam University</h3>
                  <p className="text-[#00d4ff] font-semibold mt-0.5">B.Tech — Computer Science &amp; Engineering</p>
                  <p className="text-gray-500 text-sm mt-2">Gurgaon, Haryana, India</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:items-end shrink-0">
                <span
                  className="font-mono text-sm text-gray-400 px-3 py-1 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  Oct 2020 – Jul 2024
                </span>
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-lg"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  <span className="text-[#00d4ff] text-sm font-bold">CGPA:</span>
                  <span className="text-white text-sm font-bold">7.82 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid rgba(251,146,60,0.3)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(251,146,60,0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}
              >
                ☁️
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">AWS Certified Cloud Practitioner</h3>
                  <span
                    className="px-2 py-0.5 text-xs font-bold rounded-full"
                    style={{
                      background: 'rgba(251,146,60,0.12)',
                      color: '#fb923c',
                      border: '1px solid rgba(251,146,60,0.25)',
                    }}
                  >
                    CERTIFIED
                  </span>
                </div>
                <p className="font-semibold text-[#fb923c]">Amazon Web Services</p>
                <p className="text-gray-500 text-sm mt-2">
                  Validates overall understanding of AWS Cloud services, architecture, pricing, and best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
