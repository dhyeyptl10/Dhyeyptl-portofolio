import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ORBIT_ITEMS = [
  { label: 'About',      href: '#about',       icon: '👤', color: '#C9A96E' },
  { label: 'Skills',     href: '#skills',       icon: '⚡', color: '#60a5fa' },
  { label: 'Projects',   href: '#projects',     icon: '🚀', color: '#4ade80' },
  { label: 'Works',      to: '/works',          icon: '🎨', color: '#f472b6' },
  { label: 'Hackathons', to: '/hackathons',     icon: '🏆', color: '#fb923c' },
  { label: 'GitHub',     href: '#git-history',  icon: '🐙', color: '#a78bfa' },
  { label: 'Figma',      href: '#figma',        icon: '✏️', color: '#34d399' },
  { label: 'Beyond',     href: '#beyond',       icon: '🌊', color: '#38bdf8' },
  { label: 'Contact',    to: '/contact',        icon: '✉️', color: '#f87171' },
  { label: 'Hire Me',    href: 'mailto:pateldhamo0079@gmail.com', icon: '💼', color: '#fde68a', isHire: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [angle, setAngle] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const scrollRef = useRef(0)

  // Scroll-driven rotation — ONLY when open
  useEffect(() => {
    if (!open) return
    const onWheel = (e) => {
      setAngle(a => a + e.deltaY * 0.18)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [open])

  // Drag to spin on the backdrop
  useEffect(() => {
    if (!open) return
    let startY = null
    const onDown = (e) => { startY = e.clientY ?? e.touches?.[0]?.clientY }
    const onMove = (e) => {
      if (startY === null) return
      const y = e.clientY ?? e.touches?.[0]?.clientY
      setAngle(a => a + (y - startY) * 0.4)
      startY = y
    }
    const onUp = () => { startY = null }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchstart', onDown, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchstart', onDown)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [open])

  // Keyboard close
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const n = ORBIT_ITEMS.length
  const RADIUS = 160

  return (
    <>
      <style>{`
        /* ─── NAV ─── */
        .nav-shell {
          position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.6rem 4vw;
          pointer-events: none;
        }
        .nav-shell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(8,7,7,.96) 0%, transparent 100%);
          pointer-events: none;
        }

        /* Logo */
        .nav-logo {
          font-family: var(--ff-display); font-weight: 700; font-style: italic;
          font-size: 1.35rem; letter-spacing: -.01em; color: var(--cream);
          position: relative; z-index: 1;
          pointer-events: all;
          transition: color .3s;
        }
        .nav-logo span { color: var(--gold); }
        .nav-logo:hover { color: var(--gold); }

        /* Main nav links (only 2 most important kept visible) */
        .nav-links-main {
          display: flex; gap: 2.2rem; list-style: none;
          position: relative; z-index: 1;
          pointer-events: all;
        }
        .nav-links-main a {
          font-family: var(--ff-mono); font-size: .68rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s;
          position: relative;
        }
        .nav-links-main a::after {
          content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
          height: 1px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s ease;
        }
        .nav-links-main a:hover { color: var(--gold); }
        .nav-links-main a:hover::after { transform: scaleX(1); }
        @media(max-width: 640px) { .nav-links-main { display: none; } }

        /* ─── ORBIT TOGGLE BUTTON ─── */
        .nav-orbit-btn {
          position: fixed; bottom: 2.2rem; right: 2.2rem;
          z-index: 600;
          width: 58px; height: 58px; border-radius: 50%;
          background: linear-gradient(135deg, #c9a96e 0%, #e8c98a 100%);
          border: none; cursor: none;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 0 rgba(201,169,110,.6);
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
          pointer-events: all;
        }
        .nav-orbit-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 0 0 8px rgba(201,169,110,.18), 0 8px 32px rgba(201,169,110,.4);
        }
        .nav-orbit-btn.active {
          transform: scale(1.05) rotate(45deg);
          box-shadow: 0 0 0 12px rgba(201,169,110,.12), 0 8px 40px rgba(201,169,110,.5);
        }
        .nav-orbit-btn svg {
          width: 22px; height: 22px;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1);
        }

        /* Pulse rings */
        .nav-orbit-btn::before, .nav-orbit-btn::after {
          content: ''; position: absolute; inset: 0;
          border-radius: 50%;
          background: rgba(201,169,110,.25);
          animation: orbitPulse 2s ease-out infinite;
          pointer-events: none;
        }
        .nav-orbit-btn::after { animation-delay: 1s; }
        @keyframes orbitPulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* ─── OVERLAY BACKDROP ─── */
        .orbit-backdrop {
          position: fixed; inset: 0; z-index: 550;
          background: rgba(8,7,7,.72);
          backdrop-filter: blur(12px) saturate(1.4);
          opacity: 0; pointer-events: none;
          transition: opacity .4s;
        }
        .orbit-backdrop.visible { opacity: 1; pointer-events: all; }

        /* ─── ORBIT RING ─── */
        .orbit-ring {
          position: fixed;
          bottom: calc(2.2rem + 29px);
          right: calc(2.2rem + 29px);
          z-index: 590;
          width: 0; height: 0;
          pointer-events: none;
        }

        /* Each planet */
        .orbit-planet {
          position: absolute;
          display: flex; flex-direction: column; align-items: center;
          gap: 5px;
          pointer-events: all;
          cursor: none;
          transition: transform .25s cubic-bezier(.34,1.56,.64,1), opacity .3s;
        }
        .orbit-planet-bubble {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.35rem;
          border: 2px solid transparent;
          background: rgba(22,21,20,.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,.5);
          transition: transform .25s cubic-bezier(.34,1.56,.64,1),
                      border-color .25s, box-shadow .25s, background .25s;
          position: relative;
          overflow: hidden;
        }
        .orbit-planet-bubble::before {
          content: '';
          position: absolute; inset: 0; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(255,255,255,.15), transparent 65%);
          pointer-events: none;
        }
        .orbit-planet:hover .orbit-planet-bubble {
          transform: scale(1.18);
          background: rgba(30,28,26,.95);
        }
        .orbit-planet-label {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
          transition: color .25s;
          background: rgba(8,7,7,.7);
          padding: .18rem .5rem; border-radius: 3px;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity .2s, transform .2s;
        }
        .orbit-planet:hover .orbit-planet-label {
          opacity: 1; transform: scale(1);
          color: var(--cream);
        }

        /* Hire Me special */
        .orbit-planet.hire .orbit-planet-bubble {
          background: linear-gradient(135deg, #c9a96e 0%, #e8c98a 100%);
          box-shadow: 0 0 30px rgba(201,169,110,.5);
        }
        .orbit-planet.hire:hover .orbit-planet-bubble {
          box-shadow: 0 0 50px rgba(201,169,110,.7);
          transform: scale(1.22);
        }

        /* Spin container */
        .orbit-spin-wrap {
          position: absolute; top: 0; left: 0; width: 0; height: 0;
          transform-origin: 0 0;
        }

        /* Center glow */
        .orbit-center-glow {
          position: fixed;
          bottom: 2.2rem; right: 2.2rem;
          width: 58px; height: 58px;
          border-radius: 50%;
          box-shadow: 0 0 80px 40px rgba(201,169,110,.15);
          pointer-events: none; z-index: 580;
          opacity: 0; transition: opacity .4s;
        }
        .orbit-center-glow.visible { opacity: 1; }

        /* Scale-in animation for planets */
        @keyframes planetIn {
          from { transform: scale(0) translate(-50%, -50%); opacity: 0; }
          to { transform: scale(1) translate(-50%, -50%); opacity: 1; }
        }

        /* ─── iPhone-style orbit trail ─── */
        .orbit-trail {
          position: fixed;
          bottom: calc(2.2rem + 29px);
          right: calc(2.2rem + 29px);
          width: ${2 * RADIUS}px; height: ${2 * RADIUS}px;
          margin-left: -${RADIUS}px; margin-bottom: -${RADIUS}px;
          border-radius: 50%;
          border: 1px dashed rgba(201,169,110,.12);
          pointer-events: none; z-index: 570;
          opacity: 0; transition: opacity .4s;
          transform: translate(50%, 50%);
        }
        .orbit-trail.visible { opacity: 1; }
      `}</style>

      {/* ── TOP BAR ── */}
      <nav className="nav-shell">
        <Link to="/" className="nav-logo">D<span>.</span>P</Link>
        <ul className="nav-links-main">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      {/* ── ORBIT BACKDROP ── */}
      <div
        className={`orbit-backdrop${open ? ' visible' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* ── ORBIT TRAIL RING ── */}
      <div className={`orbit-trail${open ? ' visible' : ''}`} />

      {/* ── CENTER GLOW ── */}
      <div className={`orbit-center-glow${open ? ' visible' : ''}`} />

      {/* ── PLANETS ── */}
      {ORBIT_ITEMS.map((item, i) => {
        const totalAngle = (360 / n) * i
        const rad = ((totalAngle + angle) * Math.PI) / 180
        const x = Math.cos(rad) * RADIUS
        const y = Math.sin(rad) * RADIUS
        const isHovered = hoveredIdx === i
        const scale = open ? 1 : 0

        const inner = (
          <div
            className={`orbit-planet${item.isHire ? ' hire' : ''}`}
            key={item.label}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              position: 'fixed',
              bottom: `calc(2.2rem + 29px + ${-y}px)`,
              right: `calc(2.2rem + 29px + ${-x}px)`,
              transform: `translate(50%, 50%) scale(${scale})`,
              opacity: open ? 1 : 0,
              zIndex: 595,
              transition: `transform .45s cubic-bezier(.34,1.56,.64,1) ${i * 30}ms, opacity .35s ease ${i * 25}ms`,
            }}
          >
            <div
              className="orbit-planet-bubble"
              style={{
                borderColor: isHovered ? item.color : 'rgba(255,255,255,0.08)',
                boxShadow: isHovered
                  ? `0 0 28px ${item.color}55, 0 4px 20px rgba(0,0,0,.5)`
                  : '0 4px 20px rgba(0,0,0,.5)',
              }}
            >
              {item.icon}
            </div>
            <div className="orbit-planet-label" style={{ color: item.color }}>{item.label}</div>
          </div>
        )

        if (item.to) {
          return (
            <Link to={item.to} key={item.label} style={{ display: 'contents' }} onClick={() => setOpen(false)}>
              {inner}
            </Link>
          )
        }
        return (
          <a href={item.href} key={item.label} style={{ display: 'contents' }} onClick={() => setOpen(false)}>
            {inner}
          </a>
        )
      })}

      {/* ── TOGGLE BUTTON ── */}
      <button
        className={`nav-orbit-btn${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#080707" strokeWidth="2.5" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>
    </>
  )
}
