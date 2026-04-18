import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'



export default function Hero() {
  const indexRef = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    const words = document.querySelectorAll('.hero-name .word')
    gsap.to(words, { y: '0%', stagger: .12, duration: 1, ease: 'power3.out', delay: .3 })
    gsap.to(['.hero-eyebrow', '.hero-desc', '.hero-badge'], {
      opacity: 1, y: 0, stagger: .15, duration: 1, ease: 'power3.out', delay: .6
    })


    const onMove = (e) => {
      const xP = (e.clientX / window.innerWidth - .5)
      const yP = (e.clientY / window.innerHeight - .5)
      gsap.to(indexRef.current, { x: xP * -30, y: yP * -15, duration: 2, ease: 'power1.out' })
      gsap.to(nameRef.current, { x: xP * 10, y: yP * 5, duration: 1.8, ease: 'power1.out' })
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <style>{`
        .hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 0 4vw 5vw; overflow: hidden;
        }
        .hero-visuals { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .hero-img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          opacity: 0.5; filter: grayscale(30%) contrast(1.1);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--ink) 10%, rgba(8,7,7,0.4) 100%);
          mix-blend-mode: multiply;
        }
        .hero-index {
          position: absolute; top: 4vw; right: 4vw;
          font-family: var(--ff-display);
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.12);
          line-height: 1; pointer-events: none; z-index: 1; user-select: none;
        }
        .hero-scroll-hint {
          position: absolute; right: 4vw; bottom: 5vw;
          display: flex; flex-direction: column; align-items: center; gap: .6rem; z-index: 5;
        }
        .hero-scroll-hint span {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--muted); writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px; height: 0;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollLine 2s ease-in-out infinite 1s;
        }
        .hero-eyebrow {
          position: relative; z-index: 5;
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: .8rem;
          opacity: 0; transform: translateY(20px);
        }
        .hero-eyebrow::before { content:''; width: 32px; height: 1px; background: var(--gold); }
        .hero-name {
          position: relative; z-index: 5;
          font-family: var(--ff-display);
          font-size: clamp(4rem, 11vw, 11rem);
          font-weight: 900; line-height: .9; letter-spacing: -.02em; overflow: hidden;
        }
        .hero-name .line { overflow: hidden; display: block; }
        .hero-name .word { display: inline-block; transform: translateY(110%); }
        .hero-name em { font-style: italic; color: var(--gold); }
        .hero-sub {
          position: relative; z-index:5; margin-top: 2.5rem;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 2rem;
        }
        .hero-desc {
          max-width: 380px; font-size: 1rem;
          color: var(--muted); line-height: 1.7;
          opacity: 0; transform: translateY(20px);
        }
        .hero-badge {
          font-family: var(--ff-display); font-size: 1.1rem; font-style: italic;
          color: var(--gold); border: 1px solid rgba(201,169,110,.3);
          padding: .7rem 1.4rem; opacity: 0; transform: translateY(20px); white-space: nowrap;
        }



        @media(max-width:768px){
          .hero-index { font-size: 35vw; opacity: .4; }
          .hero-scroll-hint { display: none; }
          .hero-float-icon { display: none; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-visuals">
          <img src="/images/Background img.jpeg" className="hero-img" alt="Hero Background"
            onError={(e) => { e.target.style.opacity = '0' }} />
          <div className="hero-overlay" />
        </div>



        <div className="hero-index" ref={indexRef} aria-hidden="true">01</div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
        <div className="hero-eyebrow">Frontend Developer · EST. 2025</div>

        <h1 className="hero-name" ref={nameRef}>
          <span className="line"><span className="word">DHYEY</span></span>
          <span className="line"><span className="word"><em>PATEL</em></span></span>
        </h1>

        <div className="hero-sub">
          <p className="hero-desc">
            Aspiring Software Engineer bridging <strong style={{ color: 'var(--cream)' }}>logic</strong> and
            logic-defying design. Crafting aesthetic UIs with pixel-perfect precision and buttery-smooth interactions.
          </p>
          <div className="hero-badge">Available for Projects</div>
        </div>
      </section>
    </>
  )
}
