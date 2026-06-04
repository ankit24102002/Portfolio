import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const DEFAULT_RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1Qt3aMThMosWlS9M5ZKwiN-oOX637kvXO'

const GIST_FILE = 'resume-url.txt'
const GIST_ID_KEY = 'resume_gist_id'
const GIST_TOKEN_KEY = 'resume_gist_token'
const CACHE_KEY = 'resume_url_cache'

// Convert Drive share link → direct download
function normalizeUrl(url) {
  const trimmed = url.trim()
  const converted = trimmed.replace(
    /https?:\/\/drive\.google\.com\/file\/d\/([^/]+)\/.*/,
    'https://drive.google.com/uc?export=download&id=$1'
  )
  return converted.startsWith('http') ? converted : `https://${converted}`
}

// Fetch URL from public Gist (no auth needed for public gist)
async function fetchGistUrl(gistId) {
  const raw = `https://gist.githubusercontent.com/ankit24102002/${gistId}/raw/${GIST_FILE}?t=${Date.now()}`
  const res = await fetch(raw)
  if (!res.ok) throw new Error('Gist fetch failed')
  return (await res.text()).trim()
}

// Update Gist via GitHub API
async function updateGist(gistId, token, newUrl) {
  const res = await fetch(`https://api.github.com/gists/${gistId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ files: { [GIST_FILE]: { content: newUrl } } }),
  })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
}

// Called by Hero.jsx on mount — returns URL from Gist (global) or cache (local fallback)
export async function loadResumeUrl() {
  const gistId = localStorage.getItem(GIST_ID_KEY)
  if (gistId) {
    try {
      const url = await fetchGistUrl(gistId)
      localStorage.setItem(CACHE_KEY, url) // cache for instant next load
      return url
    } catch {
      // fall through to cache
    }
  }
  return localStorage.getItem(CACHE_KEY) || DEFAULT_RESUME_URL
}

// ─────────────────────────────────────────────────────────

export default function ResumeAdmin() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState('update') // 'update' | 'setup'

  // Update tab state
  const [newUrl, setNewUrl] = useState('')
  const [currentUrl, setCurrentUrl] = useState(DEFAULT_RESUME_URL)
  const [updateStatus, setUpdateStatus] = useState(null) // null | 'saving' | 'saved' | 'error'
  const [updateError, setUpdateError] = useState('')

  // Setup tab state
  const [gistId, setGistId] = useState('')
  const [gistToken, setGistToken] = useState('')
  const [setupStatus, setSetupStatus] = useState(null) // null | 'testing' | 'ok' | 'error'

  const isConfigured = !!localStorage.getItem(GIST_ID_KEY)

  const refreshCurrentUrl = useCallback(async () => {
    const url = await loadResumeUrl()
    setCurrentUrl(url)
    setNewUrl(url)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setGistId(localStorage.getItem(GIST_ID_KEY) || '')
      setGistToken(localStorage.getItem(GIST_TOKEN_KEY) || '')
      setTab(isConfigured ? 'update' : 'setup')
      setUpdateStatus(null)
      setSetupStatus(null)
      refreshCurrentUrl()
    }
  }, [isOpen, isConfigured, refreshCurrentUrl])

  // Keyboard shortcut: Shift + Alt + R (open-only, debounced)
  useEffect(() => {
    let lastFired = 0
    const handleKey = (e) => {
      if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'r') {
        const now = Date.now()
        if (now - lastFired > 600) {
          lastFired = now
          setIsOpen(true)
        }
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // ── Setup: test & save credentials ──
  const handleSetupSave = async () => {
    if (!gistId.trim() || !gistToken.trim()) return
    setSetupStatus('testing')
    try {
      const url = await fetchGistUrl(gistId.trim())
      localStorage.setItem(GIST_ID_KEY, gistId.trim())
      localStorage.setItem(GIST_TOKEN_KEY, gistToken.trim())
      localStorage.setItem(CACHE_KEY, url)
      setCurrentUrl(url)
      setNewUrl(url)
      setSetupStatus('ok')
      setTimeout(() => setTab('update'), 1200)
    } catch {
      setSetupStatus('error')
    }
  }

  // ── Update: save new URL to Gist ──
  const handleUpdate = async () => {
    const final = normalizeUrl(newUrl)
    const storedGistId = localStorage.getItem(GIST_ID_KEY)
    const storedToken = localStorage.getItem(GIST_TOKEN_KEY)

    setUpdateStatus('saving')
    setUpdateError('')
    try {
      if (storedGistId && storedToken) {
        await updateGist(storedGistId, storedToken, final)
      }
      localStorage.setItem(CACHE_KEY, final)
      setCurrentUrl(final)
      window.dispatchEvent(new CustomEvent('resume-url-updated', { detail: final }))
      setUpdateStatus('saved')
      setTimeout(() => setIsOpen(false), 1600)
    } catch (err) {
      setUpdateStatus('error')
      setUpdateError(err.message)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 10, opacity: 0 }}
            transition={{ duration: 0.25, type: 'spring', stiffness: 200, damping: 22 }}
            className="w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              background: '#0d1220',
              border: '1px solid rgba(0,212,255,0.25)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: 'rgba(0,212,255,0.15)' }}
            >
              <div>
                <h3 className="text-white font-bold">Resume Manager</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isConfigured ? '🌐 Synced via GitHub Gist — updates work on all devices' : '⚠️ Not configured — changes are local only'}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >✕</button>
            </div>

            {/* Tabs */}
            <div className="flex border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              {['update', 'setup'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 py-2.5 text-sm font-semibold capitalize transition-all"
                  style={
                    tab === t
                      ? { color: '#00d4ff', borderBottom: '2px solid #00d4ff' }
                      : { color: 'rgba(156,163,175,1)' }
                  }
                >
                  {t === 'update' ? '📄 Update URL' : '⚙️ Setup Gist'}
                </button>
              ))}
            </div>

            <div className="p-6">
              {/* ── UPDATE TAB ── */}
              {tab === 'update' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Current URL</label>
                    <div
                      className="p-2.5 rounded-xl font-mono text-xs text-gray-500 break-all"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {currentUrl}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">New Download URL</label>
                    <textarea
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      placeholder="Paste Google Drive share or download link..."
                      rows={3}
                      autoFocus
                      className="w-full font-mono text-xs text-white placeholder-gray-600 rounded-xl px-3 py-2.5 resize-none focus:outline-none"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                    <p className="text-gray-600 text-xs mt-1">
                      Share links are auto-converted to direct download format
                    </p>
                  </div>

                  {updateStatus === 'error' && (
                    <p className="text-red-400 text-xs">{updateError || 'Update failed. Check your Gist config.'}</p>
                  )}

                  {!isConfigured && (
                    <p className="text-amber-500 text-xs">
                      ⚠️ Gist not configured — changes will only apply on this device. Go to Setup tab to enable cross-device sync.
                    </p>
                  )}

                  <motion.button
                    onClick={handleUpdate}
                    disabled={updateStatus === 'saving'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-60"
                    style={
                      updateStatus === 'saved'
                        ? { background: '#10b981', color: 'white' }
                        : { background: 'linear-gradient(90deg, #00d4ff, #0099bb)', color: '#06080f' }
                    }
                  >
                    {updateStatus === 'saving' ? 'Saving...' : updateStatus === 'saved' ? '✓ Saved — all devices updated!' : 'Save & Apply Everywhere'}
                  </motion.button>
                </div>
              )}

              {/* ── SETUP TAB ── */}
              {tab === 'setup' && (
                <div className="space-y-4">
                  <div
                    className="p-3 rounded-xl text-xs text-gray-400 space-y-1"
                    style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.12)' }}
                  >
                    <p className="text-[#00d4ff] font-semibold mb-2">One-time setup (2 min):</p>
                    <p>1. Go to <span className="text-white font-mono">gist.github.com</span> → New Gist</p>
                    <p>2. Filename: <span className="text-white font-mono">resume-url.txt</span> → paste your Drive URL → Create <strong>public</strong> gist</p>
                    <p>3. Copy the Gist ID (long hash in the URL)</p>
                    <p>4. GitHub → Settings → Developer → Tokens (classic) → tick <span className="text-white">gist</span> only → generate</p>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Gist ID</label>
                    <input
                      type="text"
                      value={gistId}
                      onChange={(e) => setGistId(e.target.value)}
                      placeholder="e.g. a1b2c3d4e5f6..."
                      className="w-full font-mono text-sm text-white placeholder-gray-600 rounded-xl px-3 py-2.5 focus:outline-none"
                      style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">GitHub Token (gist scope only)</label>
                    <input
                      type="password"
                      value={gistToken}
                      onChange={(e) => setGistToken(e.target.value)}
                      placeholder="ghp_xxxxxxxxxxxx"
                      className="w-full font-mono text-sm text-white placeholder-gray-600 rounded-xl px-3 py-2.5 focus:outline-none"
                      style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,212,255,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                    <p className="text-gray-600 text-xs mt-1">Stored locally on this device only. Only needed for updating.</p>
                  </div>

                  {setupStatus === 'error' && (
                    <p className="text-red-400 text-xs">Could not connect to Gist. Check the ID and try again.</p>
                  )}

                  <motion.button
                    onClick={handleSetupSave}
                    disabled={setupStatus === 'testing'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl font-bold text-sm disabled:opacity-60 transition-all"
                    style={
                      setupStatus === 'ok'
                        ? { background: '#10b981', color: 'white' }
                        : { background: 'linear-gradient(90deg, #00d4ff, #0099bb)', color: '#06080f' }
                    }
                  >
                    {setupStatus === 'testing' ? 'Testing connection...' : setupStatus === 'ok' ? '✓ Connected!' : 'Test & Save'}
                  </motion.button>
                </div>
              )}
            </div>

            <div
              className="px-6 py-3 text-center text-gray-700 text-xs border-t"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              🔑 <span className="font-mono">Shift + Alt + R</span> to open · <span className="font-mono">Esc</span> to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
