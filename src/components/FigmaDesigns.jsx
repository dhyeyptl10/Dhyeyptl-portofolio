import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const designs = [
  {
    title: 'Portfolio — Dark Luxury Theme',
    desc: 'A premium editorial portfolio concept with gold accents, grain textures, and immersive typography. Designed for maximum visual impact.',
    tags: ['UI Design', 'Dark Mode', 'Typography'],
    color: '#C9A96E',
    screens: [
      { label: 'Hero Section', icon: 'fas fa-desktop' },
      { label: 'About Layout', icon: 'fas fa-th-large' },
      { label: 'Projects Grid', icon: 'fas fa-grip-horizontal' },
    ]
  },
  {
    title: 'Rejouice — Agency Clone',
    desc: 'Pixel-perfect recreation of an award-winning creative agency website. Focus on editorial layouts & buttery scroll interactions.',
    tags: ['Web Design', 'Clone', 'Scroll'],
    color: '#4ade80',
    screens: [
      { label: 'Landing Page', icon: 'fas fa-layer-group' },
      { label: 'Services', icon: 'fas fa-cubes' },
      { label: 'Contact', icon: 'fas fa-paper-plane' },
    ]
  },
  {
    title: 'Rolex — Luxury Product UI',
    desc: 'High-fidelity luxury watch showcase interface with immersive media sections, parallax effects, and refined hover states.',
    tags: ['Luxury UI', 'Product', 'Parallax'],
    color: '#fbbf24',
    screens: [
      { label: 'Product Hero', icon: 'fas fa-crown' },
      { label: 'Watch Gallery', icon: 'fas fa-images' },
      { label: 'Details Page', icon: 'fas fa-expand-alt' },
    ]
  },
  {
    title: 'Otaku Verse — Anime Hub',
    desc: 'Vibrant anime community interface with dynamic cards, search filters, and immersive content discovery experience.',
    tags: ['Community', 'Colorful', 'Cards'],
    color: '#a78bfa',
    screens: [
      { label: 'Home Feed', icon: 'fas fa-stream' },
      { label: 'Character Page', icon: 'fas fa-user-ninja' },
      { label: 'Search UI', icon: 'fas fa-search' },
    ]
  },
  {
    title: 'Git Analyzer — Dashboard',
    desc: 'Data-driven GitHub analytics dashboard with charts, contribution graphs, and repository insights for developers.',
    tags: ['Dashboard', 'Analytics', 'Data Viz'],
    color: '#38bdf8',
    screens: [
      { label: 'Overview', icon: 'fas fa-chart-bar' },
      { label: 'Repo Stats', icon: 'fas fa-code-branch' },
      { label: 'Insights', icon: 'fas fa-chart-pie' },
    ]
  },
  {
    title: 'World Factory — Food Platform',
    desc: 'Premium culinary e-commerce concept with rich food photography integration, menu builders, and ordering flow.',
    tags: ['E-Commerce', 'Food', 'Premium'],
    color: '#f97316',
    screens: [
      { label: 'Menu Page', icon: 'fas fa-utensils' },
      { label: 'Cart Flow', icon: 'fas fa-shopping-bag' },
      { label: 'Checkout', icon: 'fas fa-credit-card' },
    ]
  },
]

function DesignCard({ design, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`

    // Move glow to cursor position
    const glowEl = card.querySelector('.figma-card-glow')
    if (glowEl) {
      glowEl.style.opacity = '1'
      glowEl.style.left = x + 'px'
      glowEl.style.top = y + 'px'
    }
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'

    const glowEl = card.querySelector('.figma-card-glow')
    if (glowEl) glowEl.style.opacity = '0'
  }

  return (
    <div
      className="figma-card reveal-up"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--accent': design.color }}
    >
      {/* Cursor-following glow */}
      <div className="figma-card-glow" style={{ background: `radial-gradient(300px circle, ${design.color}15, transparent 70%)` }} />

      {/* Animated border gradient */}
      <div className="figma-card-border-glow" style={{ background: `linear-gradient(135deg, ${design.color}40, transparent, ${design.color}20)` }} />

      {/* Preview Area */}
      <div className="figma-card-preview">
        <div className="figma-card-frame">
          <div className="figma-frame-dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#ffbd2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <div className="figma-frame-url">
            <i className="fas fa-lock" style={{ fontSize: '.4rem', opacity: .5 }} />
            <span>figma.com/{design.title.split(' ')[0].toLowerCase()}</span>
          </div>
        </div>
        <div className="figma-card-screens">
          {design.screens.map((screen, i) => (
            <div className="figma-screen-block" key={i} style={{ '--delay': `${i * 0.08}s`, '--screen-color': design.color }}>
              <div className="figma-screen-icon-wrap">
                <i className={screen.icon} style={{ color: design.color, fontSize: '1.2rem' }} />
                <div className="figma-screen-pulse" style={{ background: design.color }} />
              </div>
              <span>{screen.label}</span>
            </div>
          ))}
        </div>
        <div className="figma-card-badge">
          <i className="fab fa-figma" /> Figma
        </div>
        <div className="figma-card-num">{String(index + 1).padStart(2, '0')}</div>

        {/* Floating decorative elements */}
        <div className="figma-float-circle" style={{ borderColor: design.color + '30' }} />
        <div className="figma-float-line" style={{ background: `linear-gradient(90deg, ${design.color}40, transparent)` }} />
      </div>

      {/* Info */}
      <div className="figma-card-info">
        <div className="figma-card-tags">
          {design.tags.map((tag, i) => (
            <span key={i} className="figma-tag" style={{ '--tag-color': design.color }}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="figma-card-title">{design.title}</h3>
        <p className="figma-card-desc">{design.desc}</p>
        <div className="figma-card-cta">
          <span className="figma-cta-text">View Design</span>
          <i className="fas fa-arrow-right figma-cta-arrow" />
        </div>
      </div>
    </div>
  )
}

export default function FigmaDesigns() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })
      gsap.utils.toArray('.figma-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 60, rotateX: 5 }, {
          opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })
      // Parallax on scroll for screen blocks
      gsap.utils.toArray('.figma-screen-block').forEach((block) => {
        gsap.to(block, {
          y: -10,
          scrollTrigger: {
            trigger: block,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .figma-section { background: var(--ink); }
        .figma-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem); flex-wrap: wrap; gap: 1.5rem;
        }
        .figma-subtitle {
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); max-width: 400px; line-height: 1.7;
        }
        .figma-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr));
          gap: 2rem;
        }

        /* CARD */
        .figma-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 8px; overflow: hidden;
          transition: border-color .4s, box-shadow .4s;
          cursor: default; position: relative;
          will-change: transform;
          transform-style: preserve-3d;
        }
        .figma-card:hover {
          border-color: rgba(201,169,110,.4);
          box-shadow: 0 25px 60px rgba(0,0,0,.5), 0 0 30px var(--accent, rgba(201,169,110,.08));
        }

        /* Cursor-following glow */
        .figma-card-glow {
          position: absolute; z-index: 1; pointer-events: none;
          width: 300px; height: 300px; border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0; transition: opacity .4s;
        }

        /* Border glow on hover */
        .figma-card-border-glow {
          position: absolute; inset: -1px; z-index: 0;
          border-radius: 8px; opacity: 0;
          transition: opacity .5s;
        }
        .figma-card:hover .figma-card-border-glow { opacity: 1; }

        /* PREVIEW AREA */
        .figma-card-preview {
          position: relative; padding: 1.5rem;
          background: linear-gradient(135deg, rgba(22,21,20,1) 0%, rgba(17,16,16,1) 100%);
          border-bottom: 1px solid var(--line);
          min-height: 220px; overflow: hidden; z-index: 2;
        }
        .figma-card-frame {
          display: flex; align-items: center; gap: .6rem;
          margin-bottom: 1.2rem;
        }
        .figma-frame-dots { display: flex; gap: 5px; }
        .figma-frame-dots span {
          width: 8px; height: 8px; border-radius: 50%;
          transition: transform .3s;
        }
        .figma-card:hover .figma-frame-dots span:nth-child(1) { transform: scale(1.3); }
        .figma-card:hover .figma-frame-dots span:nth-child(2) { transform: scale(1.3); transition-delay: .05s; }
        .figma-card:hover .figma-frame-dots span:nth-child(3) { transform: scale(1.3); transition-delay: .1s; }
        .figma-frame-url {
          display: flex; align-items: center; gap: .35rem;
          background: rgba(255,255,255,.04); border: 1px solid var(--line);
          padding: .2rem .7rem; border-radius: 4px;
          font-family: var(--ff-mono); font-size: .5rem;
          color: var(--muted); letter-spacing: .05em;
          transition: border-color .3s, color .3s;
        }
        .figma-card:hover .figma-frame-url {
          border-color: rgba(201,169,110,.3);
          color: var(--cream);
        }

        /* SCREEN BLOCKS */
        .figma-card-screens { display: flex; gap: .8rem; flex-wrap: wrap; }
        .figma-screen-block {
          flex: 1; min-width: 80px; padding: 1.2rem .8rem;
          background: rgba(255,255,255,.02); border: 1px solid var(--line);
          border-radius: 6px; display: flex; flex-direction: column;
          align-items: center; gap: .6rem; text-align: center;
          transition: border-color .4s, background .4s, transform .5s cubic-bezier(.25,1,.5,1), box-shadow .4s;
          transition-delay: var(--delay, 0s);
          position: relative; overflow: hidden;
        }
        .figma-screen-block::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, transparent, var(--screen-color, var(--gold))08);
          opacity: 0; transition: opacity .4s;
        }
        .figma-card:hover .figma-screen-block::before { opacity: 1; }
        .figma-screen-block span {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted); transition: color .4s;
        }
        .figma-card:hover .figma-screen-block {
          border-color: var(--accent, rgba(201,169,110,.3));
          background: rgba(255,255,255,.04);
          box-shadow: 0 4px 20px rgba(0,0,0,.3);
        }
        .figma-card:hover .figma-screen-block span { color: var(--cream); }
        .figma-card:hover .figma-screen-block:nth-child(1) { transform: translateY(-8px) scale(1.02); }
        .figma-card:hover .figma-screen-block:nth-child(2) { transform: translateY(-12px) scale(1.04); transition-delay: .06s; }
        .figma-card:hover .figma-screen-block:nth-child(3) { transform: translateY(-8px) scale(1.02); transition-delay: .12s; }

        /* Screen icon with pulse */
        .figma-screen-icon-wrap { position: relative; }
        .figma-screen-pulse {
          position: absolute; inset: -6px; border-radius: 50%;
          opacity: 0; transition: opacity .4s;
          animation: figmaPulse 2s ease-in-out infinite;
        }
        .figma-card:hover .figma-screen-pulse { opacity: .15; }
        @keyframes figmaPulse {
          0%, 100% { transform: scale(1); opacity: .15; }
          50% { transform: scale(1.5); opacity: 0; }
        }

        /* BADGE */
        .figma-card-badge {
          position: absolute; top: 1rem; right: 1rem;
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); background: rgba(201,169,110,.08);
          border: 1px solid rgba(201,169,110,.2);
          padding: .25rem .6rem; border-radius: 4px;
          display: flex; align-items: center; gap: .35rem;
          transition: background .3s, transform .3s;
        }
        .figma-card:hover .figma-card-badge {
          background: rgba(201,169,110,.15);
          transform: translateY(-2px);
        }

        /* NUMBER */
        .figma-card-num {
          position: absolute; bottom: .8rem; right: 1rem;
          font-family: var(--ff-display); font-size: 3rem;
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.06);
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .5s;
        }
        .figma-card:hover .figma-card-num {
          -webkit-text-stroke: 1px rgba(201,169,110,.15);
        }

        /* Floating decorative elements */
        .figma-float-circle {
          position: absolute; bottom: -20px; left: -20px;
          width: 80px; height: 80px; border-radius: 50%;
          border: 1px solid; opacity: 0;
          transition: opacity .5s, transform .5s;
          transform: scale(.5);
        }
        .figma-card:hover .figma-float-circle {
          opacity: 1; transform: scale(1) rotate(45deg);
        }
        .figma-float-line {
          position: absolute; bottom: 30px; left: 0;
          width: 0; height: 1px;
          transition: width .8s cubic-bezier(.25,1,.5,1);
        }
        .figma-card:hover .figma-float-line { width: 60%; }

        /* INFO SECTION */
        .figma-card-info {
          padding: 1.6rem 1.8rem 1.5rem; position: relative; z-index: 2;
        }
        .figma-card-tags { display: flex; gap: .4rem; flex-wrap: wrap; margin-bottom: .7rem; }
        .figma-tag {
          font-family: var(--ff-mono); font-size: .5rem;
          letter-spacing: .1em; text-transform: uppercase;
          border: 1px solid var(--tag-color, var(--gold))40;
          color: var(--tag-color, var(--gold));
          padding: .2rem .55rem; border-radius: 3px;
          transition: background .3s, transform .3s;
        }
        .figma-card:hover .figma-tag {
          background: var(--tag-color, var(--gold))12;
          transform: translateY(-2px);
        }
        .figma-card-title {
          font-family: var(--ff-display); font-size: 1.3rem;
          font-weight: 700; line-height: 1.2;
          transition: color .3s, transform .3s;
        }
        .figma-card:hover .figma-card-title {
          color: var(--gold); transform: translateX(6px);
        }
        .figma-card-desc {
          font-size: .82rem; color: var(--muted);
          margin-top: .5rem; line-height: 1.6;
        }

        /* CTA on hover */
        .figma-card-cta {
          display: flex; align-items: center; gap: .6rem;
          margin-top: 1rem; opacity: 0; transform: translateY(10px);
          transition: opacity .4s, transform .4s;
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold);
        }
        .figma-card:hover .figma-card-cta {
          opacity: 1; transform: translateY(0);
        }
        .figma-cta-arrow {
          transition: transform .3s;
          font-size: .55rem;
        }
        .figma-card:hover .figma-cta-arrow {
          animation: figmaArrowBounce 1s ease-in-out infinite;
        }
        @keyframes figmaArrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @media(max-width:768px){
          .figma-header { flex-direction: column; align-items: flex-start; }
          .figma-grid { gap: 1.5rem; }
          .figma-card-preview { min-height: 180px; }
          .figma-screen-block { min-width: 60px; padding: .9rem .5rem; }
        }
      `}</style>

      <section id="figma" className="section-pad figma-section" ref={sectionRef}>
        <div className="figma-header">
          <div>
            <div className="section-num reveal-up">07 — Design</div>
            <h2 className="section-title reveal-up">Figma <em>Designs.</em></h2>
          </div>
          <p className="figma-subtitle reveal-up">
            Every project starts with a carefully crafted design system in Figma — from wireframes to high-fidelity prototypes.
          </p>
        </div>
        <div className="figma-grid">
          {designs.map((d, i) => <DesignCard key={i} design={d} index={i} />)}
        </div>
      </section>
    </>
  )
}
