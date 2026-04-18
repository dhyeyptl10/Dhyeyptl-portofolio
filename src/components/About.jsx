import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })
      gsap.fromTo('.reveal-left', { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.reveal-left', start: 'top 88%' }
      })
      // Counter animations
      document.querySelectorAll('.counter').forEach(el => {
        const target = +el.dataset.target
        ScrollTrigger.create({
          trigger: el, start: 'top 85%', once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target, duration: 1.5, ease: 'power2.out',
              onUpdate: function () { el.textContent = Math.round(this.targets()[0].val) }
            })
          }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: clamp(3rem,6vw,8rem); align-items: center;
          margin-top: clamp(3rem,6vw,6rem);
        }
        .about-left { position: relative; }
        .about-visual {
          aspect-ratio: 3/4; background: var(--card);
          border: 1px solid var(--line); overflow: hidden; position: relative;
        }
        .about-visual img { width:100%; height:100%; object-fit:cover; }
        .about-visual-badge {
          position: absolute; bottom: -1.5rem; right: -1.5rem;
          width: 120px; height: 120px; border-radius: 50%;
          background: var(--gold); color: var(--ink);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; font-family: var(--ff-display);
          font-weight: 700; font-size: .85rem; text-align: center;
          line-height: 1.2; animation: rotateBadge 12s linear infinite;
        }
        .about-bio {
          font-size: clamp(1.05rem,1.5vw,1.2rem); line-height: 1.75;
          color: var(--muted); margin-top: 2rem;
        }
        .about-bio strong { color: var(--cream); font-weight: 500; }
        .about-stats {
          margin-top: 3rem; display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.5rem; border-top: 1px solid var(--line); padding-top: 2rem;
        }
        .stat-num {
          font-family: var(--ff-display); font-size: 2.5rem;
          font-weight: 700; color: var(--gold); line-height: 1;
        }
        .stat-label {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--muted); margin-top: .4rem;
        }
        @media(max-width:768px){
          .about-grid { grid-template-columns: 1fr; }
          .about-visual { aspect-ratio: 4/3; }
          .about-visual-badge { width:90px; height:90px; font-size:.75rem; }
          .about-stats { grid-template-columns: repeat(3,1fr); gap:1rem; }
        }
      `}</style>

      <section id="about" className="section-pad" ref={sectionRef}>
        <div className="section-num reveal-up">01 — About</div>
        <div className="about-grid">
          <div className="about-left reveal-left">
            <div className="about-visual">
              {/* ─── REPLACE with your actual photo ─── */}
              <img src="/images/About - me.png" alt="Dhamo"
                onError={(e) => { e.target.style.display = 'none' }} />
              <div className="about-visual-badge">B.Tech<br />2025–29</div>
            </div>
          </div>
          <div className="about-right">
            <h2 className="section-title reveal-up">Crafting the<br /><em>Web's Future.</em></h2>
            <p className="about-bio reveal-up">
              I'm <strong>Dhyey Patel</strong> — a Computer Science student and frontend developer with a deep obsession for
              <strong> aesthetic interfaces</strong> and <strong>fluid animations</strong>.
              I bridge engineering logic with design sensibility, building experiences that don't just work —
              they <em style={{ color: 'var(--gold)' }}>feel</em> alive.
            </p>
            <p className="about-bio reveal-up" style={{ marginTop: '1rem' }}>
              Currently pursuing my <strong>B.Tech in Computer Science</strong> (Batch 2025–2029), I'm already shipping
              production-quality projects with modern stacks and pushing the limits of what the browser can do.
            </p>
            <div className="about-stats reveal-up">
              <div className="stat-item">
                <div className="stat-num counter" data-target="6">0</div>
                <div className="stat-label">Projects Live</div>
              </div>
              <div className="stat-item">
                <div className="stat-num counter" data-target="5">0</div>
                <div className="stat-label">Certificates</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">∞</div>
                <div className="stat-label">Ambition</div>
              </div>
            </div>
            <div className="reveal-up" style={{ marginTop: '2.5rem' }}>
              <a href="mailto:pateldhamo0079@gmail.com" className="mag-btn mag-hover">Let's Talk ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
