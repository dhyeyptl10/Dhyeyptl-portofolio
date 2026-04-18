import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const projects = [
  {
    id: 1,
    title: 'Rejouice Clone',
    category: 'Frontend Clone',
    year: '2025',
    href: 'https://rejouiceclone1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80',
    desc: 'Pixel-perfect recreation of the award-winning Rejouice agency site with buttery scroll animations and editorial design.',
    tags: ['GSAP', 'HTML/CSS', 'Scroll Magic'],
    color: '#4ade80',
  },
  {
    id: 2,
    title: 'Rolex Clone',
    category: 'Luxury UI',
    year: '2025',
    href: 'https://rolex-clone30.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
    desc: 'A luxury-grade Rolex website clone showcasing premium typography, immersive scroll storytelling and refined micro-interactions.',
    tags: ['Parallax', 'Luxury', 'Frontend'],
    color: '#fbbf24',
  },
  {
    id: 3,
    title: 'Otaku Verse',
    category: 'Community Platform',
    year: '2025',
    href: 'https://otakuverse1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    desc: 'An immersive hub for Otaku culture with dynamic interface and curated content for the global anime community.',
    tags: ['Anime', 'Community', 'Design'],
    color: '#a78bfa',
  },
  {
    id: 4,
    title: 'Git Analyzer',
    category: 'Analytics Tool',
    year: '2025',
    href: 'https://git-analyzer10.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    desc: 'Transform your GitHub profile into a visual portfolio with deep-dive analytics on repositories and coding patterns.',
    tags: ['GitHub API', 'Data Viz', 'React'],
    color: '#38bdf8',
  },
  {
    id: 5,
    title: 'World Factory',
    category: 'E-Commerce',
    year: '2025',
    href: 'https://worldfactory1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    desc: '"Everything\'s on the menu. Except compromise." Premium culinary experiences without shortcuts.',
    tags: ['Culinary', 'Premium UI', 'E-Commerce'],
    color: '#f97316',
  },
  {
    id: 6,
    title: 'Meal Explorer',
    category: 'Recipe Search',
    year: '2025',
    href: 'https://meal-explorer1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    desc: 'Explore thousands of recipes with a sleek search engine. Discover your next favorite dish with detailed visuals.',
    tags: ['API', 'Search', 'Meal Discovery'],
    color: '#ec4899',
  },
  {
    id: 7,
    title: 'Figma Design System',
    category: 'UI/UX Design',
    year: '2025',
    href: 'https://www.figma.com/community',
    thumb: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    desc: 'A complete Figma design system — tokens, components, and high-fidelity prototypes for multiple production-grade projects.',
    tags: ['Figma', 'UI Design', 'Design System'],
    color: '#a78bfa',
    isFigma: true,
  },
]

export default function Works() {
  const [activeProject, setActiveProject] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [previewProject, setPreviewProject] = useState(null)
  const [iframeLoading, setIframeLoading] = useState(true)
  const floatRef = useRef(null)
  const containerRef = useRef(null)
  const titleRefs = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const animFrame = useRef(null)
  const currentPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.works-header-line', { y: '110%' }, { y: '0%', duration: 1, ease: 'power3.out', stagger: 0.1 })
    tl.fromTo('.works-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 0.3)
    tl.fromTo('.works-count', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.4)

    titleRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 + i * 0.12 }
      )
    })
  }, [])

  // Smooth follow animation
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      if (floatRef.current) {
        currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.1)
        currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.1)
        floatRef.current.style.left = currentPos.current.x + 'px'
        floatRef.current.style.top = currentPos.current.y + 'px'
      }
      animFrame.current = requestAnimationFrame(tick)
    }

    animFrame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animFrame.current)
  }, [])

  const handleMouseMove = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleEnter = (index) => {
    setActiveProject(index)
    if (floatRef.current) {
      gsap.to(floatRef.current, {
        opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out'
      })
    }
  }

  const handleLeave = () => {
    setActiveProject(null)
    if (floatRef.current) {
      gsap.to(floatRef.current, {
        opacity: 0, scale: 0.85, duration: 0.4, ease: 'power3.in'
      })
    }
  }

  const openPreview = (e, project) => {
    e.preventDefault()
    e.stopPropagation()
    setPreviewProject(project)
    setIframeLoading(true)
    setShowPreview(true)
  }

  const closePreview = () => {
    setShowPreview(false)
    setTimeout(() => setPreviewProject(null), 400)
  }

  const activeProj = activeProject !== null ? projects[activeProject] : null

  return (
    <>
      <style>{`
        .works-page {
          position: relative; min-height: 100vh; background: var(--ink);
          padding: 0; overflow: hidden;
        }
        .works-back {
          position: fixed; top: 2rem; left: 4vw; z-index: 100;
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s; cursor: none;
          text-decoration: none;
        }
        .works-back:hover { color: var(--gold); }
        .works-back i { transition: transform .3s; }
        .works-back:hover i { transform: translateX(-4px); }

        .works-header {
          padding: clamp(6rem,10vw,10rem) 4vw clamp(3rem,5vw,5rem);
          position: relative;
        }
        .works-header-wrap { overflow: hidden; }
        .works-header-line {
          font-family: var(--ff-display); font-size: clamp(4rem,10vw,10rem);
          font-weight: 900; line-height: .9; letter-spacing: -.03em;
          display: block; transform: translateY(110%);
        }
        .works-header-line em { font-style: italic; color: var(--gold); }
        .works-count {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--muted); margin-top: 1.5rem; opacity: 0;
        }

        .works-list { position: relative; padding: 0 4vw 6rem; }
        .works-item {
          display: grid; grid-template-columns: 1fr auto auto;
          align-items: center; gap: 2rem;
          padding: clamp(1.5rem,3vw,2.5rem) 0;
          border-bottom: 1px solid var(--line);
          cursor: none; position: relative;
          text-decoration: none; color: inherit;
        }
        .works-item:first-child { border-top: 1px solid var(--line); }
        .works-item-left { display: flex; flex-direction: column; gap: .4rem; }
        .works-item-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem,5vw,4.5rem);
          font-weight: 700; line-height: 1;
          transition: color .4s, transform .4s, letter-spacing .4s;
          letter-spacing: -.01em;
        }
        .works-item:hover .works-item-title {
          color: var(--gold); transform: translateX(20px);
          letter-spacing: .02em;
        }
        .works-figma-badge {
          display: inline-flex; align-items: center; gap: .3rem;
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: #a78bfa; border: 1px solid rgba(167,139,250,.3);
          padding: .15rem .45rem; border-radius: 3px; margin-left: .8rem;
          vertical-align: middle;
        }
        .works-item-meta {
          display: flex; align-items: center; gap: 1rem;
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); transition: transform .4s;
        }
        .works-item:hover .works-item-meta { transform: translateX(20px); }
        .works-item-tags { display: flex; gap: .4rem; flex-wrap: wrap; }
        .works-item-tag {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          padding: .2rem .5rem; border-radius: 3px;
          border: 1px solid rgba(201,169,110,.2);
          color: var(--muted); transition: all .3s;
        }
        .works-item:hover .works-item-tag {
          border-color: rgba(201,169,110,.4); color: var(--gold);
        }
        .works-item-preview {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); border: 1px solid rgba(201,169,110,.3);
          padding: .5rem 1.2rem; border-radius: 4px;
          background: transparent; cursor: none;
          transition: background .3s, color .3s, transform .3s;
          white-space: nowrap;
          display: flex; align-items: center; gap: .5rem;
        }
        .works-item-preview:hover {
          background: var(--gold); color: var(--ink); transform: scale(1.05);
        }
        .works-item-arrow {
          width: 50px; height: 50px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: .85rem; color: var(--muted);
          transition: all .4s; opacity: 0; transform: translate(-10px, 10px);
        }
        .works-item:hover .works-item-arrow {
          opacity: 1; transform: translate(0,0);
          border-color: var(--gold); color: var(--gold);
          background: rgba(201,169,110,.08);
        }
        .works-item-num {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          font-family: var(--ff-display); font-size: clamp(5rem,8vw,8rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.04);
          pointer-events: none; user-select: none; line-height: 1;
          transition: -webkit-text-stroke .4s;
        }
        .works-item:hover .works-item-num {
          -webkit-text-stroke: 1px rgba(201,169,110,.1);
        }

        /* ══ BROWSER-WINDOW CURSOR FOLLOWER (marieweber style) ══ */
        .works-browser-float {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: min(420px, 38vw);
          transform: translate(-50%, -60%);
          opacity: 0;
          scale: 0.85;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06);
          will-change: left, top, opacity;
          transition: scale 0.4s ease;
        }
        .wbf-topbar {
          background: #1c1b1a;
          padding: .55rem .9rem;
          display: flex; align-items: center; gap: .7rem;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .wbf-dots { display: flex; gap: 5px; }
        .wbf-dots span {
          width: 9px; height: 9px; border-radius: 50%;
          display: block;
        }
        .wbf-url {
          flex: 1; background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 4px; padding: .18rem .6rem;
          font-family: var(--ff-mono); font-size: .45rem;
          color: rgba(255,255,255,.4); letter-spacing: .04em;
          display: flex; align-items: center; gap: .35rem;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .wbf-iframe-wrap {
          aspect-ratio: 16/10;
          background: #111;
          position: relative; overflow: hidden;
        }
        .wbf-iframe {
          width: 200%; height: 200%;
          border: none;
          transform: scale(0.5);
          transform-origin: top left;
          pointer-events: none;
        }
        .wbf-static-img {
          width: 100%; height: 100%; object-fit: cover;
          display: block;
          filter: brightness(.85);
        }
        .wbf-label {
          position: absolute; bottom: .6rem; left: .6rem;
          font-family: var(--ff-mono); font-size: .42rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--gold); background: rgba(8,7,7,.88);
          padding: .25rem .55rem; border: 1px solid rgba(201,169,110,.2);
          backdrop-filter: blur(6px); border-radius: 3px;
        }
        .wbf-live {
          position: absolute; top: .6rem; right: .6rem;
          font-family: var(--ff-mono); font-size: .4rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold2); background: rgba(201,169,110,.1);
          padding: .2rem .5rem; border: 1px solid rgba(201,169,110,.3);
          border-radius: 3px; display: flex; align-items: center; gap: .3rem;
        }
        .wbf-live::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #4ade80; animation: livePulse 1.2s ease-in-out infinite;
        }

        /* Preview Modal */
        .preview-overlay {
          position: fixed; inset: 0; z-index: 9000;
          background: rgba(8,7,7,.92); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: opacity .4s;
        }
        .preview-overlay.active { opacity: 1; pointer-events: auto; }
        .preview-container {
          width: min(1100px, 90vw); height: min(700px, 80vh);
          background: var(--card); border: 1px solid rgba(201,169,110,.2);
          border-radius: 12px; overflow: hidden;
          display: flex; flex-direction: column;
          transform: translateY(30px) scale(.95);
          transition: transform .5s cubic-bezier(.25,1,.5,1);
          box-shadow: 0 40px 100px rgba(0,0,0,.5);
        }
        .preview-overlay.active .preview-container { transform: translateY(0) scale(1); }
        .preview-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.5rem; border-bottom: 1px solid var(--line);
          background: rgba(8,7,7,.5);
        }
        .preview-top-left { display: flex; align-items: center; gap: .8rem; }
        .preview-dots { display: flex; gap: 6px; }
        .preview-dots span { width: 10px; height: 10px; border-radius: 50%; }
        .preview-url {
          font-family: var(--ff-mono); font-size: .6rem;
          color: var(--muted); letter-spacing: .05em;
          background: rgba(255,255,255,.04); border: 1px solid var(--line);
          padding: .3rem 1rem; border-radius: 4px;
          display: flex; align-items: center; gap: .4rem;
        }
        .preview-close {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid var(--line); background: transparent;
          color: var(--muted); cursor: none; font-size: .8rem;
          display: flex; align-items: center; justify-content: center;
          transition: all .3s;
        }
        .preview-close:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,169,110,.08); }
        .preview-iframe-wrap { flex: 1; position: relative; background: #1a1918; }
        .preview-iframe { width: 100%; height: 100%; border: none; }
        .preview-loading {
          position: absolute; inset: 0; display: flex; align-items: center;
          justify-content: center; flex-direction: column; gap: 1rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--gold);
        }
        .preview-loader {
          width: 40px; height: 2px; background: rgba(201,169,110,.2);
          position: relative; overflow: hidden; border-radius: 2px;
        }
        .preview-loader::after {
          content: ''; position: absolute; top:0; left:-40px; width:40px; height:100%;
          background: var(--gold); animation: previewLoad 1s ease-in-out infinite;
        }
        @keyframes previewLoad {
          to { left: 40px; }
        }
        .preview-visit {
          display: flex; align-items: center; justify-content: center;
          padding: .8rem; border-top: 1px solid var(--line); background: rgba(8,7,7,.5);
        }
        .preview-visit a {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); transition: color .3s;
          display: flex; align-items: center; gap: .5rem;
        }
        .preview-visit a:hover { color: var(--gold2); }

        @media(max-width:768px) {
          .works-item { grid-template-columns: 1fr; gap: 1rem; }
          .works-item-arrow { display: none; }
          .works-browser-float { display: none; }
          .works-item:hover .works-item-title { transform: translateX(8px); }
          .works-item:hover .works-item-meta { transform: translateX(8px); }
          .works-item-num { display: none; }
          .works-back { cursor: auto; }
          .works-item { cursor: auto; }
          .works-item-preview { cursor: auto; }
          .preview-close { cursor: auto; }
        }
      `}</style>

      <div className="works-page" ref={containerRef}>
        <Link to="/" className="works-back">
          <i className="fas fa-arrow-left" /> Back to Home
        </Link>

        <header className="works-header">
          <div className="works-header-wrap">
            <span className="works-header-line">Selected</span>
          </div>
          <div className="works-header-wrap">
            <span className="works-header-line"><em>Work.</em></span>
          </div>
          <div className="works-count">{projects.length} Projects · 2025</div>
        </header>

        <div className="works-list">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="works-item"
              ref={el => titleRefs.current[i] = el}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
            >
              <div className="works-item-left">
                <div className="works-item-title">
                  {project.title}
                  {project.isFigma && (
                    <span className="works-figma-badge">
                      <i className="fab fa-figma" /> Figma
                    </span>
                  )}
                </div>
                <div className="works-item-meta">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="works-item-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="works-item-tag">{tag}</span>
                ))}
              </div>
              <button
                className="works-item-preview"
                onClick={(e) => openPreview(e, project)}
              >
                <i className="fas fa-expand" /> Preview
              </button>
              <div className="works-item-arrow">
                <i className="fas fa-arrow-up-right" />
              </div>
              <div className="works-item-num">{String(i + 1).padStart(2, '0')}</div>
            </a>
          ))}
        </div>

        {/* ══ MARIEWEBER-STYLE BROWSER WINDOW FOLLOWER ══ */}
        <div className="works-browser-float" ref={floatRef}>
          <div className="wbf-topbar">
            <div className="wbf-dots">
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <div className="wbf-url">
              <i className="fas fa-lock" style={{ fontSize: '.38rem', opacity: .4 }} />
              {activeProj ? activeProj.href.replace('https://', '') : ''}
            </div>
          </div>
          <div className="wbf-iframe-wrap">
            {activeProj && (
              <>
                <img
                  className="wbf-static-img"
                  src={activeProj.thumb}
                  alt={activeProj.title}
                />
                <div className="wbf-label">{activeProj.category}</div>
                <div className="wbf-live">Live Site</div>
              </>
            )}
          </div>
        </div>

        {/* Preview Modal */}
        <div className={`preview-overlay ${showPreview ? 'active' : ''}`} onClick={closePreview}>
          <div className="preview-container" onClick={e => e.stopPropagation()}>
            <div className="preview-top">
              <div className="preview-top-left">
                <div className="preview-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#ffbd2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                {previewProject && (
                  <div className="preview-url">
                    <i className="fas fa-lock" style={{ fontSize: '.45rem', opacity: .5 }} />
                    {previewProject.href.replace('https://', '')}
                  </div>
                )}
              </div>
              <button className="preview-close" onClick={closePreview}>
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="preview-iframe-wrap">
              {previewProject && showPreview ? (
                <>
                  {iframeLoading && (
                    <div className="preview-loading">
                      <div className="preview-loader" />
                      Loading Preview…
                    </div>
                  )}
                  <iframe
                    className="preview-iframe"
                    src={previewProject.href}
                    title={`${previewProject.title} Preview`}
                    sandbox="allow-same-origin allow-scripts allow-forms"
                    onLoad={() => setIframeLoading(false)}
                    style={{ opacity: iframeLoading ? 0 : 1, transition: 'opacity .5s' }}
                  />
                </>
              ) : (
                <div className="preview-loading">
                  <div className="preview-loader" />
                  Loading preview...
                </div>
              )}
            </div>
            {previewProject && (
              <div className="preview-visit">
                <a href={previewProject.href} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt" /> Visit {previewProject.title} →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
