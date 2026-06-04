import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ankitsingla34804@gmail.com',
    href: 'mailto:ankitsingla34804@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 8901884804',
    href: 'tel:+918901884804',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Gurgaon, Haryana, India',
    href: null,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ankit24102002',
    href: 'https://linkedin.com/in/ankit24102002',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.open(
      `mailto:ankitsingla34804@gmail.com?subject=${subject}&body=${body}`
    )
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-[#0d1526]">
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
            Get In Touch
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 mt-4 max-w-lg mx-auto"
          >
            Have a project in mind or want to talk tech? I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 bg-[#0a0f1e] rounded-xl border border-white/5 hover:border-[#00d4ff]/25 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
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

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/60 transition-colors text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  sent
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#00d4ff] text-[#0a0f1e] hover:shadow-xl hover:shadow-[#00d4ff]/25'
                }`}
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
