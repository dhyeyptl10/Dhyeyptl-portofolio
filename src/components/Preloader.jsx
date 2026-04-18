import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const barRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let val = 0
    const interval = setInterval(() => {
      val = Math.min(val + Math.floor(Math.random() * 12) + 4, 100)
      setCount(val)
      if (val >= 100) clearInterval(interval)
    }, 60)

    const tl = gsap.timeline({ onComplete: () => onComplete && onComplete() })
    tl.to(barRef.current, { left: '0%', duration: 1.6, ease: 'power3.inOut' })
      .to(line1Ref.current, { y: '0%', duration: .7, ease: 'power3.out' }, .2)
      .to(line2Ref.current, { y: '0%', duration: .7, ease: 'power3.out' }, .4)
      .to(preloaderRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: .5 })

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        #preloader {
          position: fixed; inset: 0; z-index: 9997; background: var(--ink);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 1.6rem;
        }
        .pl-name-wrap { overflow: hidden; }
        .pl-name-line {
          display: block;
          font-family: var(--ff-display);
          letter-spacing: -0.02em;
          color: var(--cream);
          transform: translateY(110%);
          line-height: 1;
        }
        .pl-name-line.top {
          font-size: clamp(2.2rem, 6vw, 5rem);
          font-weight: 400;
          font-style: italic;
          color: var(--muted);
        }
        .pl-name-line.bottom {
          font-size: clamp(3rem, 9vw, 8rem);
          font-weight: 900;
          color: var(--cream);
        }
        .pl-name-line.bottom span { color: var(--gold); }
        .pl-bar-wrap {
          width: min(360px, 80vw); height: 1px;
          background: var(--line); position: relative; overflow: hidden;
        }
        .pl-bar {
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold2));
        }
        .pl-count {
          font-family: var(--ff-mono); font-size: .72rem;
          color: var(--gold); letter-spacing: .2em;
        }
      `}</style>

      <div id="preloader" ref={preloaderRef}>
        <div className="pl-name-wrap">
          <span className="pl-name-line top" ref={line1Ref}>Frontend Developer</span>
        </div>
        <div className="pl-name-wrap">
          <span className="pl-name-line bottom" ref={line2Ref}>DHYEY <span>PATEL</span></span>
        </div>
        <div className="pl-bar-wrap"><div className="pl-bar" ref={barRef} /></div>
        <div className="pl-count">{count}%</div>
      </div>
    </>
  )
}
