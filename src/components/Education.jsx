import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    id: '01',
    degree: 'B.Tech Computer Science',
    subtitle: '& Engineering',
    school: 'Gujarat University',
    location: 'Gujarat, India',
    period: '2025 — 2029',
    grade: null,
    gradeLabel: 'Currently Pursuing',
    color: '#C9A96E',
    colorRgb: '201,169,110',
    glow: '#C9A96E',
    icon: '🎓',
    emoji2: '💡',
    tags: ['React', 'GSAP', 'DSA', 'Full-Stack', 'Software Engg'],
    desc: 'Building the future, one algorithm at a time. Diving deep into software engineering, web development, and system design from scratch to production.',
    bars: [
      { label: 'Web Development', val: 85 },
      { label: 'DSA / C++', val: 70 },
      { label: 'UI / UX Design', val: 80 },
    ],
    achievements: ['Top Hackathon Finalist', 'Open Source Contributor', 'React Ecosystem Expert'],
  },
  {
    id: '02',
    degree: 'Higher Secondary',
    subtitle: 'Std 12th — Science',
    school: 'P.P. Savani School',
    location: 'Surat, Gujarat',
    period: '2024 — 2025',
    grade: 77,
    gradeLabel: 'Percentage',
    color: '#60a5fa',
    colorRgb: '96,165,250',
    glow: '#60a5fa',
    icon: '📘',
    emoji2: '⚗️',
    tags: ['Science Stream', 'Physics', 'Chemistry', 'Mathematics'],
    desc: 'Completed HSC with science stream from P.P. Savani, Surat — laying the logical foundation for engineering and analytical thinking.',
    bars: [
      { label: 'Overall Score', val: 77 },
      { label: 'Mathematics', val: 82 },
      { label: 'Physics', val: 74 },
    ],
    achievements: ['Science Stream Graduate', 'Strong Math Foundation', 'Analytical Thinker'],
  },
  {
    id: '03',
    degree: 'Secondary School',
    subtitle: 'Std 10th — SSC Board',
    school: 'P.P. Savani School',
    location: 'Surat, Gujarat',
    period: '2022 — 2023',
    grade: 90,
    gradeLabel: 'Percentage',
    color: '#4ade80',
    colorRgb: '74,222,128',
    glow: '#4ade80',
    icon: '📗',
    emoji2: '🏅',
    tags: ['Academic Excellence', 'Science', 'Mathematics'],
    desc: 'Scored 90% in SSC board exams. Strong foundation in mathematics and science — where the curiosity for technology truly ignited.',
    bars: [
      { label: 'Overall Score', val: 90 },
      { label: 'Mathematics', val: 93 },
      { label: 'Science', val: 91 },
    ],
    achievements: ['90% Overall Score', 'District Merit List', 'Science Olympiad Participant'],
  },
]

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const step = now => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(ease * target))
          if (p < 1) requestAnimationFrame(step)
          else setCount(target)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

export default function Education() {
  const sectionRef = useRef(null)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Giant header parallax
      gsap.fromTo('.edu2-eyebrow', { opacity: 0, y: 30, letterSpacing: '0.5em' }, {
        opacity: 1, y: 0, letterSpacing: '0.3em', duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.edu2-header', start: 'top 85%' }
      })
      gsap.fromTo('.edu2-title-line', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out',
        scrollTrigger: { trigger: '.edu2-header', start: 'top 80%' }
      })
      gsap.fromTo('.edu2-sub', { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.3,
        scrollTrigger: { trigger: '.edu2-header', start: 'top 80%' }
      })

      // Cards stagger
      gsap.utils.toArray('.edu2-card-outer').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 80, rotateX: 25 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.9, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })

      // Timeline stem grows
      gsap.fromTo('.edu2-stem-fill', { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: 'power2.inOut',
        scrollTrigger: { trigger: '.edu2-timeline', start: 'top 70%', end: 'bottom 60%', scrub: 1 }
      })

      // Progress bars — trigger from the card parent so they animate even if bar is tiny
      gsap.utils.toArray('.edu2-bar-fill').forEach(bar => {
        const val = bar.dataset.val
        // Reset width first
        bar.style.width = '0%'
        gsap.to(bar, {
          width: val + '%', duration: 1.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: bar.closest('.edu2-card') || bar,
            start: 'top 85%',
            once: true,
          }
        })
      })

      // Floating orbs
      gsap.utils.toArray('.edu2-orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: (i % 2 === 0 ? -30 : 30),
          x: (i % 3 === 0 ? 20 : -20),
          duration: 3 + i * 0.7,
          ease: 'sine.inOut',
          repeat: -1, yoyo: true
        })
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        /* ──────── SECTION ──────── */
        .edu2-section {
          position: relative; overflow: hidden;
          background: var(--ink);
          padding: clamp(6rem, 12vw, 12rem) 4vw;
        }

        /* ── BG ELEMENTS ── */
        .edu2-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,169,110,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }
        .edu2-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px); will-change: transform;
        }
        .edu2-orb-1 {
          width: 500px; height: 500px; top: -10%; right: -15%;
          background: radial-gradient(circle, rgba(201,169,110,.06) 0%, transparent 70%);
        }
        .edu2-orb-2 {
          width: 400px; height: 400px; bottom: 5%; left: -10%;
          background: radial-gradient(circle, rgba(96,165,250,.05) 0%, transparent 70%);
        }
        .edu2-orb-3 {
          width: 300px; height: 300px; top: 40%; left: 30%;
          background: radial-gradient(circle, rgba(74,222,128,.04) 0%, transparent 70%);
        }

        /* ── HEADER ── */
        .edu2-header { margin-bottom: clamp(4rem, 7vw, 7rem); position: relative; z-index: 2; }
        .edu2-eyebrow {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: .8rem;
          opacity: 0;
        }
        .edu2-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .edu2-title-wrap { overflow: hidden; }
        .edu2-title-line {
          font-family: var(--ff-display); font-weight: 900; line-height: .9;
          letter-spacing: -.03em; display: block;
          font-size: clamp(3.5rem, 9vw, 9rem);
          opacity: 0;
        }
        .edu2-title-line.italic { font-style: italic; color: var(--gold); }
        .edu2-sub {
          font-size: clamp(.85rem, 1.5vw, 1rem); color: var(--muted);
          max-width: 480px; line-height: 1.8; margin-top: 1.5rem;
          opacity: 0;
        }

        /* ── STAT ROW ── */
        .edu2-stats {
          display: flex; gap: clamp(1.5rem, 4vw, 4rem);
          flex-wrap: wrap; margin-top: 2.5rem;
        }
        .edu2-stat { display: flex; flex-direction: column; gap: .2rem; }
        .edu2-stat-num {
          font-family: var(--ff-display); font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900; line-height: 1; color: var(--cream);
        }
        .edu2-stat-num span { color: var(--gold); }
        .edu2-stat-label {
          font-family: var(--ff-mono); font-size: .6rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--muted);
        }

        /* ── TIMELINE WRAP ── */
        .edu2-timeline {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; gap: 0;
        }

        /* Vertical stem */
        .edu2-stem {
          position: absolute; left: 50%; top: 0; bottom: 0;
          width: 1px; transform: translateX(-50%);
          background: rgba(255,255,255,.06);
          display: flex; flex-direction: column;
        }
        .edu2-stem-fill {
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, var(--gold), transparent 90%);
          transform-origin: top; transform: scaleY(0);
          box-shadow: 0 0 12px rgba(201,169,110,.5);
        }
        @media(max-width: 768px) { .edu2-stem { left: 20px; } }

        /* ── ENTRY ── */
        .edu2-entry {
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          align-items: flex-start;
          margin-bottom: 6rem;
          position: relative;
        }
        .edu2-entry:last-child { margin-bottom: 0; }
        .edu2-entry.is-right .edu2-card-col { order: 3; }
        .edu2-entry.is-right .edu2-node-col { order: 2; }
        .edu2-entry.is-right .edu2-empty-col { order: 1; }
        @media(max-width: 768px) {
          .edu2-entry { grid-template-columns: 48px 1fr; margin-bottom: 3.5rem; }
          .edu2-entry.is-right .edu2-card-col,
          .edu2-entry.is-right .edu2-node-col,
          .edu2-entry.is-right .edu2-empty-col { order: unset; }
          .edu2-empty-col { display: none; }
        }

        /* ── NODE ── */
        .edu2-node-col {
          display: flex; justify-content: center; padding-top: 2rem;
          position: relative; z-index: 3;
        }
        .edu2-node {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; position: relative;
          background: var(--ink);
          border: 2px solid var(--node-color, var(--gold));
          box-shadow:
            0 0 0 5px rgba(var(--node-rgb, 201,169,110), .08),
            0 0 30px rgba(var(--node-rgb, 201,169,110), .35);
          transition: box-shadow .4s, transform .4s;
          cursor: default;
        }
        .edu2-node:hover {
          transform: scale(1.15) rotate(-15deg);
          box-shadow:
            0 0 0 8px rgba(var(--node-rgb, 201,169,110), .12),
            0 0 50px rgba(var(--node-rgb, 201,169,110), .55);
        }
        .edu2-node-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          border: 1px solid rgba(var(--node-rgb, 201,169,110), .18);
          animation: nodeRing 3s ease-in-out infinite;
        }
        .edu2-node-ring2 {
          position: absolute; inset: -12px; border-radius: 50%;
          border: 1px solid rgba(var(--node-rgb, 201,169,110), .08);
          animation: nodeRing 3s ease-in-out infinite .8s;
        }
        @keyframes nodeRing {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: .4; }
        }

        /* ── CARD OUTER ── */
        .edu2-card-outer {
          opacity: 0; perspective: 1000px;
        }

        /* ── CARD ── */
        .edu2-card {
          background: rgba(22,21,20,.8);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .12);
          border-radius: 20px;
          padding: 2.4rem 2.6rem;
          position: relative; overflow: hidden;
          backdrop-filter: blur(10px);
          transition:
            border-color .45s,
            box-shadow .45s,
            transform .45s cubic-bezier(.25,1,.5,1),
            background .45s;
          cursor: default;
          will-change: transform;
        }
        .edu2-card:hover {
          border-color: rgba(var(--card-rgb, 201,169,110), .35);
          box-shadow:
            0 25px 60px rgba(0,0,0,.5),
            0 0 60px rgba(var(--card-rgb, 201,169,110), .12),
            inset 0 1px 0 rgba(var(--card-rgb, 201,169,110), .15);
          transform: translateY(-6px) scale(1.01);
          background: rgba(22,21,20,.95);
        }

        /* Glowing corner accent */
        .edu2-card-corner {
          position: absolute; top: 0; right: 0;
          width: 100px; height: 100px; pointer-events: none;
          background: radial-gradient(circle at top right,
            rgba(var(--card-rgb, 201,169,110), .15) 0%, transparent 70%);
          border-radius: 0 20px 0 0;
        }

        /* Top bar */
        .edu2-card-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg,
            transparent,
            rgba(var(--card-rgb, 201,169,110), .8) 40%,
            rgba(var(--card-rgb, 201,169,110), .4) 100%);
          border-radius: 20px 20px 0 0;
        }

        /* Shimmer on hover */
        .edu2-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg,
            transparent,
            rgba(var(--card-rgb, 201,169,110), .04),
            transparent);
          transition: left .8s ease;
          pointer-events: none;
        }
        .edu2-card:hover::before { left: 140%; }

        /* Ghost number */
        .edu2-card-ghost {
          position: absolute; bottom: -.8rem; right: .8rem;
          font-family: var(--ff-display); font-size: 8rem; font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(var(--card-rgb, 201,169,110), .07);
          line-height: 1; pointer-events: none; user-select: none;
          transition: -webkit-text-stroke .4s;
        }
        .edu2-card:hover .edu2-card-ghost {
          -webkit-text-stroke: 1px rgba(var(--card-rgb, 201,169,110), .18);
        }

        /* Icon area */
        .edu2-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .edu2-icon-wrap {
          width: 56px; height: 56px; border-radius: 14px;
          background: rgba(var(--card-rgb, 201,169,110), .1);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .2);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .4s;
        }
        .edu2-card:hover .edu2-icon-wrap {
          transform: rotate(-12deg) scale(1.1);
          box-shadow: 0 8px 24px rgba(var(--card-rgb, 201,169,110), .25);
        }

        /* Grade badge */
        .edu2-grade-badge {
          display: flex; flex-direction: column; align-items: flex-end; gap: .15rem;
        }
        .edu2-grade-num {
          font-family: var(--ff-display); font-size: 2.4rem; font-weight: 900;
          color: rgba(var(--card-rgb, 201,169,110), 1); line-height: 1;
        }
        .edu2-grade-label {
          font-family: var(--ff-mono); font-size: .5rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--muted);
        }
        .edu2-pursuing {
          display: inline-flex; align-items: center; gap: .4rem;
          background: rgba(var(--card-rgb, 201,169,110), .1);
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .25);
          border-radius: 20px; padding: .35rem .85rem;
          font-family: var(--ff-mono); font-size: .55rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: rgba(var(--card-rgb, 201,169,110), 1);
        }
        .edu2-pursuing-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(var(--card-rgb, 201,169,110), 1);
          animation: livePulse 1.5s ease-in-out infinite;
        }

        /* Degree + meta */
        .edu2-degree {
          font-family: var(--ff-display);
          font-size: clamp(1.15rem, 2.2vw, 1.55rem);
          font-weight: 800; line-height: 1.15;
          color: var(--cream);
        }
        .edu2-degree-sub {
          font-family: var(--ff-display); font-style: italic;
          font-size: clamp(.9rem, 1.5vw, 1.1rem);
          color: rgba(var(--card-rgb, 201,169,110), .85);
          margin-top: .15rem;
        }
        .edu2-meta {
          display: flex; flex-wrap: wrap; gap: .5rem 1.2rem;
          margin: .8rem 0; align-items: center;
        }
        .edu2-meta-item {
          display: flex; align-items: center; gap: .35rem;
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .08em; color: var(--muted);
        }
        .edu2-meta-item i { color: rgba(var(--card-rgb, 201,169,110), .7); font-size: .6rem; }

        /* Divider */
        .edu2-divider {
          width: 100%; height: 1px;
          background: rgba(var(--card-rgb, 201,169,110), .08);
          margin: 1.2rem 0;
        }

        /* Description */
        .edu2-desc {
          font-size: .82rem; color: var(--muted); line-height: 1.75;
          border-left: 2px solid rgba(var(--card-rgb, 201,169,110), .3);
          padding-left: 1rem;
          transition: border-color .4s;
        }
        .edu2-card:hover .edu2-desc {
          border-color: rgba(var(--card-rgb, 201,169,110), .6);
        }

        /* Achievements */
        .edu2-achievements {
          margin-top: 1rem;
          display: flex; flex-direction: column; gap: .45rem;
        }
        .edu2-achievement {
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .05em; color: var(--muted);
          transition: color .3s;
        }
        .edu2-achievement::before {
          content: '';
          width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
          background: rgba(var(--card-rgb, 201,169,110), .7);
          box-shadow: 0 0 8px rgba(var(--card-rgb, 201,169,110), .5);
          transition: background .3s, transform .3s;
        }
        .edu2-card:hover .edu2-achievement { color: var(--cream); }
        .edu2-card:hover .edu2-achievement::before { transform: scale(1.4); }

        /* Tags */
        .edu2-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: 1.2rem; }
        .edu2-tag {
          font-family: var(--ff-mono); font-size: .5rem; letter-spacing: .12em;
          text-transform: uppercase; padding: .25rem .65rem;
          border: 1px solid rgba(var(--card-rgb, 201,169,110), .12);
          border-radius: 3px; color: var(--muted);
          transition: border-color .3s, color .3s, background .3s;
        }
        .edu2-card:hover .edu2-tag {
          border-color: rgba(var(--card-rgb, 201,169,110), .3);
          color: rgba(var(--card-rgb, 201,169,110), .9);
          background: rgba(var(--card-rgb, 201,169,110), .05);
        }

        /* ── PROGRESS BARS ── */
        .edu2-bars { margin-top: 1.4rem; display: flex; flex-direction: column; gap: .8rem; }
        .edu2-bar-row { display: flex; flex-direction: column; gap: .35rem; }
        .edu2-bar-meta {
          display: flex; justify-content: space-between;
          font-family: var(--ff-mono); font-size: .54rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted);
        }
        .edu2-bar-track {
          width: 100%; height: 5px;
          background: rgba(255,255,255,.05);
          border-radius: 99px; overflow: hidden;
          position: relative;
        }
        .edu2-bar-fill {
          height: 100%; width: 0%;
          background: linear-gradient(90deg,
            rgba(var(--card-rgb, 201,169,110), .6),
            rgba(var(--card-rgb, 201,169,110), 1));
          border-radius: 99px;
          position: relative;
          box-shadow: 0 0 12px rgba(var(--card-rgb, 201,169,110), .5);
          transition: box-shadow .4s;
        }
        .edu2-bar-fill::after {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 8px; height: 100%; border-radius: 50%;
          background: rgba(var(--card-rgb, 201,169,110), 1);
          box-shadow: 0 0 8px rgba(var(--card-rgb, 201,169,110), .9);
        }
        .edu2-card:hover .edu2-bar-fill {
          box-shadow: 0 0 20px rgba(var(--card-rgb, 201,169,110), .7);
        }
      `}</style>

      <section id="education" className="section-pad edu2-section" ref={sectionRef}>

        {/* Background */}
        <div className="edu2-bg-grid" />
        <div className="edu2-orb edu2-orb-1" />
        <div className="edu2-orb edu2-orb-2" />
        <div className="edu2-orb edu2-orb-3" />

        {/* ── HEADER ── */}
        <div className="edu2-header">
          <div className="edu2-eyebrow">07 — Education</div>
          <div className="edu2-title-wrap">
            <span className="edu2-title-line">Academic</span>
            <span className="edu2-title-line italic">Journey.</span>
          </div>
          <p className="edu2-sub">
            From a 90% SSC score to building full-stack apps — every chapter shaped the engineer I'm becoming.
          </p>

          {/* Stats */}
          <div className="edu2-stats">
            <div className="edu2-stat">
              <div className="edu2-stat-num">
                <AnimatedCounter target={90} /><span>%</span>
              </div>
              <div className="edu2-stat-label">Top SSC Score</div>
            </div>
            <div className="edu2-stat">
              <div className="edu2-stat-num">
                <AnimatedCounter target={3} />
              </div>
              <div className="edu2-stat-label">Institutions</div>
            </div>
            <div className="edu2-stat">
              <div className="edu2-stat-num">
                <AnimatedCounter target={4} />
              </div>
              <div className="edu2-stat-label">Years Ahead</div>
            </div>
            <div className="edu2-stat">
              <div className="edu2-stat-num">
                <AnimatedCounter target={8} /><span>+</span>
              </div>
              <div className="edu2-stat-label">Hackathons</div>
            </div>
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div className="edu2-timeline">

          {/* Vertical stem */}
          <div className="edu2-stem">
            <div className="edu2-stem-fill" />
          </div>

          {education.map((edu, i) => {
            const isRight = i % 2 !== 0
            return (
              <div
                key={edu.id}
                className={`edu2-entry${isRight ? ' is-right' : ''}`}
              >
                {/* Card */}
                <div className="edu2-card-col">
                  <div className="edu2-card-outer">
                    <div
                      className="edu2-card"
                      style={{ '--card-rgb': edu.colorRgb }}
                    >
                      <div className="edu2-card-bar" />
                      <div className="edu2-card-corner" />
                      <div className="edu2-card-ghost">{edu.id}</div>

                      {/* Top row */}
                      <div className="edu2-card-top">
                        <div className="edu2-icon-wrap">{edu.icon}</div>
                        <div className="edu2-grade-badge">
                          {edu.grade !== null ? (
                            <>
                              <div className="edu2-grade-num">
                                {edu.grade}<span style={{ fontSize: '1rem', opacity: .6 }}>%</span>
                              </div>
                              <div className="edu2-grade-label">{edu.gradeLabel}</div>
                            </>
                          ) : (
                            <div className="edu2-pursuing">
                              <div className="edu2-pursuing-dot" />
                              {edu.gradeLabel}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Degree */}
                      <div className="edu2-degree">{edu.degree}</div>
                      <div className="edu2-degree-sub">{edu.subtitle}</div>

                      {/* Meta */}
                      <div className="edu2-meta">
                        <span className="edu2-meta-item">
                          <i className="fas fa-university" />
                          {edu.school}
                        </span>
                        <span className="edu2-meta-item">
                          <i className="fas fa-map-marker-alt" />
                          {edu.location}
                        </span>
                        <span className="edu2-meta-item">
                          <i className="fas fa-calendar-alt" />
                          {edu.period}
                        </span>
                      </div>

                      <div className="edu2-divider" />

                      {/* Description */}
                      <p className="edu2-desc">{edu.desc}</p>

                      {/* Achievements */}
                      <div className="edu2-achievements">
                        {edu.achievements.map(a => (
                          <div className="edu2-achievement" key={a}>{a}</div>
                        ))}
                      </div>

                      {/* Progress bars */}
                      <div className="edu2-bars">
                        {edu.bars.map(b => (
                          <div className="edu2-bar-row" key={b.label}>
                            <div className="edu2-bar-meta">
                              <span>{b.label}</span>
                              <span>{b.val}%</span>
                            </div>
                            <div className="edu2-bar-track">
                              <div
                                className="edu2-bar-fill"
                                data-val={b.val}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="edu2-tags">
                        {edu.tags.map(t => (
                          <span className="edu2-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Node */}
                <div className="edu2-node-col">
                  <div
                    className="edu2-node"
                    style={{ '--node-color': edu.color, '--node-rgb': edu.colorRgb }}
                  >
                    <div className="edu2-node-ring" style={{ '--node-rgb': edu.colorRgb }} />
                    <div className="edu2-node-ring2" style={{ '--node-rgb': edu.colorRgb }} />
                    {edu.icon}
                  </div>
                </div>

                <div className="edu2-empty-col" />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
