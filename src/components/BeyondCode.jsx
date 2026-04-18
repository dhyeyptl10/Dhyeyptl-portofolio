import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const hobbies = [
  {
    icon: 'fas fa-volleyball-ball',
    emoji: '🏐',
    title: 'Volleyball',
    subtitle: 'District Player · Gujarat',
    desc: 'Represented at the district level in Gujarat. Spikes, blocks, and team synergy — the court is where instincts meet strategy.',
    color: '#4ade80',
    accent: 'rgba(74,222,128,0.08)',
  },
  {
    emoji: '⚽',
    icon: 'fas fa-futbol',
    title: 'Football',
    subtitle: 'Casual / Competitive',
    desc: 'From backyard kickabouts to serious matches. Love the beautiful game — Barcelona fan for life.',
    color: '#60a5fa',
    accent: 'rgba(96,165,250,0.08)',
  },
  {
    emoji: '📸',
    icon: 'fas fa-camera',
    title: 'Photography',
    subtitle: 'Street & Landscape',
    desc: 'Capturing fleeting moments — golden hours, urban geometry, and the poetry in everyday life.',
    color: '#f59e0b',
    accent: 'rgba(245,158,11,0.08)',
  },
  {
    emoji: '🚗',
    icon: 'fas fa-car',
    title: 'Cars',
    subtitle: 'BMW M4 Enthusiast',
    desc: 'Obsessed with automotive engineering. The M4 is perfection — 503 bhp of pure emotion.',
    color: '#e879f9',
    accent: 'rgba(232,121,249,0.08)',
  },
  {
    emoji: '🔧',
    icon: 'fas fa-tools',
    title: 'Tech Tinkering',
    subtitle: 'Android & Custom ROMs',
    desc: 'Rooting phones, flashing ROMs, overclocking — because default is never good enough.',
    color: '#fb923c',
    accent: 'rgba(251,146,60,0.08)',
  },
  {
    emoji: '🎮',
    icon: 'fas fa-gamepad',
    title: 'Gaming',
    subtitle: 'Strategy & FPS',
    desc: 'CS:GO clutches and VALORANT ranked grinds. Gaming taught me quick thinking and teamwork.',
    color: '#34d399',
    accent: 'rgba(52,211,153,0.08)',
  },
]

export default function BeyondCode() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.beyond-reveal').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })
      gsap.utils.toArray('.beyond-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 50, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: .9, ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rx = (y - cy) / 18
    const ry = (cx - x) / 18
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
    const glow = card.querySelector('.beyond-card-glow')
    if (glow) { glow.style.opacity = '1'; glow.style.left = x + 'px'; glow.style.top = y + 'px' }
  }

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
    card.style.transition = 'transform .5s cubic-bezier(.25,1,.5,1)'
    const glow = card.querySelector('.beyond-card-glow')
    if (glow) glow.style.opacity = '0'
  }

  return (
    <>
      <style>{`
        .beyond-section { background: var(--ink); }
        .beyond-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem); flex-wrap: wrap; gap: 1.5rem;
        }
        .beyond-subtitle {
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); max-width: 400px; line-height: 1.8;
        }

        .beyond-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(320px,100%), 1fr));
          gap: 1.5rem;
        }

        .beyond-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 10px; padding: 1.8rem 2rem;
          position: relative; overflow: hidden;
          cursor: default; will-change: transform;
          transform-style: preserve-3d;
          transition: border-color .4s, box-shadow .4s, transform .5s cubic-bezier(.25,1,.5,1);
          opacity: 0;
        }
        .beyond-card:hover {
          border-color: var(--bc-color, var(--gold));
          box-shadow: 0 20px 50px rgba(0,0,0,.4), 0 0 30px var(--bc-color, var(--gold))20;
        }

        .beyond-card-glow {
          position: absolute; z-index: 0; pointer-events: none;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, var(--bc-color,var(--gold))15, transparent 70%);
          transform: translate(-50%,-50%); opacity: 0; transition: opacity .4s;
        }

        .beyond-card-stripe {
          position: absolute; top:0; left:0; right:0; height:3px;
          background: linear-gradient(90deg, var(--bc-color,var(--gold)), transparent);
          opacity: .6; transition: opacity .4s;
        }
        .beyond-card:hover .beyond-card-stripe { opacity: 1; }

        .beyond-card-content { position: relative; z-index: 1; }
        .beyond-emoji {
          font-size: 2.2rem; line-height: 1; margin-bottom: .9rem;
          display: block; filter: drop-shadow(0 0 10px var(--bc-color,var(--gold))60);
          transition: transform .3s;
        }
        .beyond-card:hover .beyond-emoji { transform: scale(1.2) rotate(8deg); }

        .beyond-card-title {
          font-family: var(--ff-display); font-size: 1.4rem;
          font-weight: 700; line-height: 1.1;
          transition: color .3s;
        }
        .beyond-card:hover .beyond-card-title { color: var(--bc-color, var(--gold)); }

        .beyond-card-sub {
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--bc-color, var(--gold)); margin: .4rem 0 .9rem;
          opacity: .7;
        }

        .beyond-card-desc {
          font-size: .84rem; color: var(--muted); line-height: 1.65;
        }

        .beyond-card-corner {
          position: absolute; bottom: 1rem; right: 1.2rem;
          font-family: var(--ff-display); font-size: 4rem; font-weight: 900;
          color: transparent; -webkit-text-stroke: 1px var(--bc-color,var(--gold))14;
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .4s;
        }
        .beyond-card:hover .beyond-card-corner {
          -webkit-text-stroke: 1px var(--bc-color,var(--gold))30;
        }

        @media(max-width:768px){
          .beyond-header { flex-direction: column; align-items: flex-start; }
          .beyond-grid { gap: 1rem; }
        }
      `}</style>

      <section id="beyond" className="section-pad beyond-section" ref={sectionRef}>
        <div className="beyond-header">
          <div>
            <div className="section-num beyond-reveal">01.5 — Lifestyle</div>
            <h2 className="section-title beyond-reveal">Beyond <em>Code.</em></h2>
          </div>
          <p className="beyond-subtitle beyond-reveal">
            The human behind the keyboard. Outside of coding, here's what keeps me sharp, inspired & alive.
          </p>
        </div>

        <div className="beyond-grid">
          {hobbies.map((hobby, i) => (
            <div
              key={i}
              className="beyond-card"
              style={{ '--bc-color': hobby.color }}
              onMouseMove={e => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={e => handleMouseLeave(e.currentTarget)}
            >
              <div className="beyond-card-glow" />
              <div className="beyond-card-stripe" />
              <div className="beyond-card-content">
                <span className="beyond-emoji">{hobby.emoji}</span>
                <div className="beyond-card-title">{hobby.title}</div>
                <div className="beyond-card-sub">{hobby.subtitle}</div>
                <p className="beyond-card-desc">{hobby.desc}</p>
              </div>
              <div className="beyond-card-corner">{String(i + 1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
