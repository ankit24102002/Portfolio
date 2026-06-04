import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const DEFAULT_RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1OcmCsvv6FO_rkaoBRGthDCloqI9n1j-a'
const STORAGE_KEY = 'resume_url'

export function getResumeUrl() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_RESUME_URL
  } catch {
    return DEFAULT_RESUME_URL
  }
}

export default function ResumeAdmin() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(DEFAULT_RESUME_URL)
  const [status, setStatus] = useState(null) // 'saved' | 'reset'
  const [clickCount, setClickCount] = useState(0)

  // Load current on open
  useEffect(() => {
    if (isOpen) {
      const url = getResumeUrl()
      setCurrent(url)
      setInput(url)
      setStatus(null)
    }
  }, [isOpen])

  // Keyboard shortcut: Shift + Alt + R  (open-only, debounced)
  useEffect(() => {
    let lastFired = 0
    const handleKey = (e) => {
      if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'r') {
        const now = Date.now()
        if (now - lastFired > 600) {   // ignore duplicate fires within 600ms
          lastFired = now
          setIsOpen(true)
        }
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Secret click trigger: click footer text 7 times within 3 seconds
  useEffect(() => {
    if (clickCount >= 7) {
      setIsOpen(true)
      setClickCount(0)
    }
    if (clickCount > 0) {
      const timer = setTimeout(() => setClickCount(0), 3000)
      return () => clearTimeout(timer)
    }
  }, [clickCount])

  const handleSave = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    // Convert Drive share link to direct download if needed
    const converted = trimmed.replace(
      /drive\.google\.com\/file\/d\/([^/]+)\/.*/,
      'drive.google.com/uc?export=download&id=$1'
    )
    const finalUrl = converted.startsWith('http') ? converted : `https://${converted}`
    localStorage.setItem(STORAGE_KEY, finalUrl)
    setCurrent(finalUrl)
    setStatus('saved')
    // Dispatch event so Hero updates without page reload
    window.dispatchEvent(new CustomEvent('resume-url-updated', { detail: finalUrl }))
    setTimeout(() => setIsOpen(false), 1600)
  }

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setCurrent(DEFAULT_RESUME_URL)
    setInput(DEFAULT_RESUME_URL)
    setStatus('reset')
    window.dispatchEvent(new CustomEvent('resume-url-updated', { detail: DEFAULT_RESUME_URL }))
  }

  return (
    <>
      {/* Invisible footer trigger area */}
      <span
        id="resume-admin-trigger"
        onClick={() => setClickCount((c) => c + 1)}
        style={{ cursor: 'default', userSelect: 'none' }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 10, opacity: 0 }}
              transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 22 }}
              className="w-full max-w-lg rounded-2xl p-6"
              style={{
                background: '#0d1220',
                border: '1px solid rgba(0,212,255,0.3)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,212,255,0.08)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-white font-bold text-lg">Update Resume</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Changes apply instantly without redeploying</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  ✕
                </button>
              </div>

              {/* Current URL */}
              <div className="mb-4">
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">
                  Current Download URL
                </label>
                <div
                  className="p-3 rounded-xl font-mono text-xs text-gray-500 break-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {current}
                </div>
              </div>

              {/* Input */}
              <div className="mb-2">
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">
                  New URL
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste Google Drive share link or direct download URL..."
                  rows={3}
                  autoFocus
                  className="w-full font-mono text-xs text-white placeholder-gray-600 rounded-xl px-3 py-2.5 resize-none focus:outline-none transition-colors"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                />
              </div>

              {/* Drive tip */}
              <div
                className="p-3 rounded-xl mb-4 text-xs text-gray-500"
                style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.1)' }}
              >
                <span className="text-[#00d4ff] font-semibold">Tip:</span> Share link is auto-converted.
                Just paste your Drive share URL as-is —{' '}
                <span className="text-gray-400">drive.google.com/file/d/ID/view</span>{' '}
                becomes a direct download automatically.
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm transition-all duration-300"
                  style={
                    status === 'saved'
                      ? { background: '#10b981', color: 'white' }
                      : { background: 'linear-gradient(90deg, #00d4ff, #0099bb)', color: '#06080f' }
                  }
                >
                  {status === 'saved' ? '✓ Saved!' : 'Save & Apply'}
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 rounded-xl font-bold text-sm text-gray-400 transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(251,146,60,0.4)'; e.currentTarget.style.color = '#fb923c' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgb(156,163,175)' }}
                >
                  {status === 'reset' ? '✓ Reset' : 'Reset Default'}
                </motion.button>
              </div>

              {/* Secret hint */}
              <p className="text-center text-gray-700 text-xs mt-4">
                🔑 Shortcut: <span className="text-gray-600 font-mono">Shift + Alt + R</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
