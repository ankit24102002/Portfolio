import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'ankitsingla34804@gmail.com', href: 'mailto:ankitsingla34804@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 8901884804', href: 'tel:+918901884804' },
  { icon: '📍', label: 'Location', value: 'Gurgaon, Haryana, India', href: null },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ankit24102002', href: 'https://linkedin.com/in/ankit24102002' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:ankitsingla34804@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: 'white',
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="py-24 px-4" style={{ background: '#080c14' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Have any queries?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mt-4 max-w-lg mx-auto"
          >
            Have a project in mind or an opportunity to discuss? Let&apos;s connect.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-white mb-5">Contact Information</h3>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.border = '1px solid rgba(0,212,255,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-gray-300 hover:text-[#00d4ff] transition-colors text-sm font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                style={
                  sent
                    ? { background: '#10b981', color: 'white' }
                    : {
                        background: 'linear-gradient(90deg, #00d4ff, #0099bb)',
                        color: '#06080f',
                        boxShadow: sent ? 'none' : '0 8px 24px rgba(0,212,255,0.2)',
                      }
                }
              >
                {sent ? '✓ Email Client Opened!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
