import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// ✅ ALL PATHS VERIFIED AGAINST: public/images/certs/
// Actual files: frontend-mastery.jpg | c-programming.png | prompt-engineering.jpg
//               unsaid-talk-hackathon.png | Hackathon oddo x indus.jpeg
//               Dev Heat.jpg | Hack energy.jpg | Hack the tank.jpg

const certs = [
  {
    icon: 'fas fa-code',
    title: 'Frontend Mastery',
    sub: 'Modern Web Development & Interactivity — HTML, CSS, JavaScript and advanced animation techniques.',
    year: '2025 · Verified',
    img: '/images/certs/frontend-mastery.jpg',
    download: 'Dhamo-Frontend-Mastery-Certificate',
  },
  {
    icon: 'fas fa-microchip',
    title: 'C Programming Logic',
    sub: 'Data Structures & Algorithms mastery. Building computational thinking from first principles.',
    year: '2025 · Verified',
    img: '/images/certs/c-programming.png',
    download: 'Dhamo-C-Programming-Certificate',
  },
  {
    icon: 'fas fa-brain',
    title: 'Prompt Engineering',
    sub: 'Mastery of AI prompt design, chain-of-thought techniques and structured LLM communication.',
    year: '2025 · Certified',
    img: '/images/certs/prompt-engineering.jpg',
    download: 'Dhamo-Prompt-Engineering-Certificate',
  },
  {
    icon: 'fab fa-github',
    title: 'Unsaid Talk — Git Analyzer',
    sub: 'Hackathon Participant · Built Git Analyzer, a GitHub profile analytics tool with visual data insights.',
    year: '2025 · Hackathon · Participant',
    img: '/images/certs/unsaid-talk-hackathon.png',
    download: 'Dhamo-UnsaidTalk-Hackathon-Certificate',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Hack Energy — Hackathon',
    sub: 'Hackathon Participant · Developed energy-focused tech solutions under time constraints with cross-functional teams.',
    year: '2025 · Hackathon · Participant',
    img: '/images/certs/Hack energy.jpg',
    download: 'Dhamo-HackEnergy-Hackathon-Certificate',
  },
  {
    icon: 'fas fa-fire',
    title: 'Dev Heat — Hackathon',
    sub: 'Hackathon Participant · Competed in a developer-focused hackathon pushing real-world problem solving and UI innovation.',
    year: '2025 · Hackathon · Participant',
    img: '/images/certs/Dev Heat.jpg',
    download: 'Dhamo-DevHeat-Hackathon-Certificate',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Hack The Tank — Hackathon',
    sub: 'Hackathon Participant · Built innovative product pitches in a shark-tank-style coding competition format.',
    year: '2025 · Hackathon · Participant',
    img: '/images/certs/Hack the tank.jpg',
    download: 'Dhamo-HackTheTank-Hackathon-Certificate',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Odoo × Indus University Hackathon \' 26',
    sub: 'Hackathon Participant · Team Czar (ID: 082) · Built BK Crown POS — a full-featured contactless dining PWA during a 48-hour sprint at Indus University, organized by Odoo India Pvt. Ltd.',
    year: "April 2026 · Hackathon · Participant",
    img: '/images/certs/Hackathon oddo x indus.jpeg',
    download: 'Dhamo-OdooIndus-Hackathon-Certificate',
    isHack: true,
  },
]

// ─── Single card ──────────────────────────────────────────────
function CertCard({ cert }) {
  const [status, setStatus] = useState('loading') // 'loading' | 'ok' | 'fail'

  return (
    <div className="cert-card reveal-up">
      <div className="cert-img-area">
        <img
          src={cert.img}
          alt={cert.title}
          style={{ display: status === 'ok' ? 'block' : 'none' }}
          onLoad={()  => setStatus('ok')}
          onError={() => setStatus('fail')}
        />

        {status !== 'ok' && (
          <div className="cert-img-placeholder">
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="8" width="40" height="32" rx="2" stroke="#C9A96E" strokeWidth="1.5"/>
              <path d="M14 20h20M14 26h14" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="36" cy="34" r="6" fill="none" stroke="#C9A96E" strokeWidth="1.5"/>
              <path d="M36 31v3l2 1" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            {status === 'fail'
              ? <><span>❌ File not found:</span><span className="cert-path-hint">{cert.img}</span></>
              : <span>Loading…</span>
            }
          </div>
        )}
      </div>

      <div className="cert-body">
        <div className="cert-icon"><i className={cert.icon} /></div>
        <div className="cert-title">{cert.title}</div>
        <div className="cert-sub">{cert.sub}</div>
        <div className="cert-year">{cert.year}</div>
        <a className="cert-download" href={cert.img} download={cert.download}>
          <i className="fas fa-download" /> Download Certificate
        </a>
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────
export default function Certificates() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: .8, ease: 'power3.out', delay: i * .1,
            scrollTrigger: { trigger: card, start: 'top 90%' } }
        )
      })
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .certs-bg { background: var(--smoke); }
        .certs-grid {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .cert-card {
          background: var(--card); border: 1px solid var(--line);
          position: relative; overflow: hidden; border-radius: 6px;
          transition: border-color .4s, transform .4s cubic-bezier(.25,1,.5,1);
          cursor: default;
        }
        .cert-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold2));
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(.25,1,.5,1); z-index: 4;
        }
        .cert-card:hover { border-color: rgba(201,169,110,.4); transform: translateY(-6px); }
        .cert-card:hover::before { transform: scaleX(1); }
        .cert-card::after {
          content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(201,169,110,.07) 50%, transparent 60%);
          transform: translateX(-100%);
        }
        .cert-card:hover::after { transform: translateX(100%); transition: transform .9s ease; }

        .cert-img-area {
          width: 100%; aspect-ratio: 16/9;
          background: #0d0c0b; overflow: hidden;
          position: relative; border-bottom: 1px solid var(--line);
        }
        .cert-img-area img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          transition: transform .6s cubic-bezier(.25,1,.5,1), filter .6s;
          filter: brightness(.85) saturate(.8);
        }
        .cert-card:hover .cert-img-area img {
          transform: scale(1.04);
          filter: brightness(1) saturate(1);
        }
        .cert-img-placeholder {
          position: absolute; inset: 0; z-index: 3;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: .45rem;
          background: linear-gradient(135deg, #100f0e 0%, #1a1917 100%);
        }
        .cert-img-placeholder svg { opacity: .22; }
        .cert-img-placeholder span {
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(201,169,110,.5); text-align: center; padding: 0 .8rem;
        }
        .cert-path-hint {
          font-family: var(--ff-mono) !important; font-size: .48rem !important;
          color: rgba(201,169,110,.35) !important; letter-spacing: .05em !important;
          text-transform: none !important; word-break: break-all;
        }
        .cert-body {
          padding: 1.6rem 1.8rem 1.4rem; position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: .5rem;
        }
        .cert-icon  { font-size: 1.5rem; color: var(--gold); }
        .cert-title { font-family: var(--ff-display); font-size: 1.2rem; font-weight: 700; line-height: 1.2; }
        .cert-sub   { font-size: .8rem; color: var(--muted); line-height: 1.5; }
        .cert-year  { font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .15em; color: var(--gold); }
        .cert-download {
          display: inline-flex; align-items: center; gap: .55rem; margin-top: .8rem;
          font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--gold);
          border: 1px solid rgba(201,169,110,.3); padding: .45rem 1rem; border-radius: 3px;
          transition: background .3s, border-color .3s, color .3s, transform .2s;
          align-self: flex-start; position: relative; z-index: 6; text-decoration: none; cursor: pointer;
        }
        .cert-download:hover {
          background: var(--gold); color: var(--ink);
          border-color: var(--gold); transform: translateY(-2px);
        }
        .cert-download i { font-size: .7rem; }
      `}</style>

      <section className="section-pad certs-bg" ref={sectionRef}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          <div>
            <div className="section-num reveal-up">04 — Credentials</div>
            <h2 className="section-title reveal-up" style={{ marginBottom: 0 }}>Certified <em>Skills.</em></h2>
          </div>
          <div className="reveal-up">
            <Link
              to="/hackathons"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.6rem',
                fontFamily: 'var(--ff-mono)', fontSize: '.68rem', letterSpacing: '.14em',
                textTransform: 'uppercase', color: 'var(--gold)',
                border: '1px solid rgba(201,169,110,.3)', padding: '.6rem 1.4rem',
                borderRadius: '4px', transition: 'background .3s, color .3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              View Hackathons <i className="fas fa-arrow-up-right" style={{ fontSize: '.6rem' }} />
            </Link>
          </div>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => <CertCard key={i} cert={c} />)}
        </div>
      </section>
    </>
  )
}
