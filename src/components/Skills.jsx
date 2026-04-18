import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const techStack = [
  { name: 'HTML5',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',       color: '#e34f26' },
  { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',         color: '#1572b6' },
  { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',       color: '#61dafb' },
  { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',     color: '#339933' },
  { name: 'GSAP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg', color: '#88ce02' },
  { name: 'Figma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',       color: '#f24e1e' },
  { name: 'C / C++',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599c' },
  { name: 'MongoDB',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',   color: '#47a248' },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',           color: '#f05032' },
  { name: 'VS Code',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',     color: '#007acc' },
  { name: 'Netlify',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',   color: '#00c7b7' },
]

const FUNNY_ANIMATIONS = [
  'skill-bounce',
  'skill-wiggle',
  'skill-rubberband',
  'skill-tada',
  'skill-spin720',
  'skill-jello',
  'skill-heartbeat',
  'skill-shake',
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })
      gsap.fromTo('.skill-icon-card', { opacity: 0, y: 40, scale: 0.8 }, {
        opacity: 1, y: 0, scale: 1, stagger: .06, duration: .7, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.skills-icon-grid', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleIconClick = (idx) => {
    setActiveIdx(idx)
    setTimeout(() => setActiveIdx(null), 900)
  }

  const getRandomAnim = () => FUNNY_ANIMATIONS[Math.floor(Math.random() * FUNNY_ANIMATIONS.length)]

  return (
    <>
      <style>{`
        /* ── FUN KEYFRAMES ── */
        @keyframes skillBounce {
          0%,100%{transform:translateY(0) scale(1);}
          20%{transform:translateY(-22px) scale(1.15);}
          50%{transform:translateY(-8px) scale(1.05);}
          70%{transform:translateY(-16px) scale(1.1);}
        }
        @keyframes skillWiggle {
          0%,100%{transform:rotate(0);}
          15%{transform:rotate(-18deg);}
          30%{transform:rotate(16deg);}
          45%{transform:rotate(-12deg);}
          60%{transform:rotate(10deg);}
          75%{transform:rotate(-5deg);}
        }
        @keyframes skillRubberband {
          0%{transform:scaleX(1) scaleY(1);}
          20%{transform:scaleX(1.4) scaleY(.6);}
          40%{transform:scaleX(.8) scaleY(1.2);}
          60%{transform:scaleX(1.15) scaleY(.9);}
          80%{transform:scaleX(.98) scaleY(1.03);}
          100%{transform:scaleX(1) scaleY(1);}
        }
        @keyframes skillTada {
          0%{transform:scale(1) rotate(0);}
          10%{transform:scale(.9) rotate(-4deg);}
          20%{transform:scale(.9) rotate(-4deg);}
          30%{transform:scale(1.1) rotate(4deg);}
          40%{transform:scale(1.1) rotate(-4deg);}
          50%{transform:scale(1.1) rotate(4deg);}
          60%{transform:scale(1.1) rotate(-2deg);}
          70%{transform:scale(1.1) rotate(2deg);}
          80%{transform:scale(1.1) rotate(-1deg);}
          90%{transform:scale(1.1) rotate(1deg);}
          100%{transform:scale(1) rotate(0);}
        }
        @keyframes skillSpin720 {
          0%{transform:rotate(0) scale(1);}
          50%{transform:rotate(360deg) scale(1.3);}
          100%{transform:rotate(720deg) scale(1);}
        }
        @keyframes skillJello {
          0%,11.1%,100%{transform:none;}
          22.2%{transform:skewX(-12.5deg) skewY(-12.5deg);}
          33.3%{transform:skewX(6.25deg) skewY(6.25deg);}
          44.4%{transform:skewX(-3.125deg) skewY(-3.125deg);}
          55.5%{transform:skewX(1.5625deg) skewY(1.5625deg);}
          66.6%{transform:skewX(-.78125deg) skewY(-.78125deg);}
          77.7%{transform:skewX(.390625deg) skewY(.390625deg);}
          88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg);}
        }
        @keyframes skillHeartbeat {
          0%,100%{transform:scale(1);}
          14%{transform:scale(1.35);}
          28%{transform:scale(1);}
          42%{transform:scale(1.35);}
          70%{transform:scale(1);}
        }
        @keyframes skillShake {
          0%,100%{transform:translateX(0);}
          10%{transform:translateX(-10px) rotate(-2deg);}
          20%{transform:translateX(10px) rotate(2deg);}
          30%{transform:translateX(-10px) rotate(-2deg);}
          40%{transform:translateX(10px) rotate(2deg);}
          50%{transform:translateX(-6px);}
          60%{transform:translateX(6px);}
          70%{transform:translateX(-3px);}
          80%{transform:translateX(3px);}
        }
        .skill-bounce  { animation: skillBounce   .85s ease; }
        .skill-wiggle  { animation: skillWiggle   .85s ease; }
        .skill-rubberband { animation: skillRubberband .85s ease; }
        .skill-tada    { animation: skillTada     .85s ease; }
        .skill-spin720 { animation: skillSpin720  .85s ease; }
        .skill-jello   { animation: skillJello    .85s ease; }
        .skill-heartbeat { animation: skillHeartbeat .8s ease; }
        .skill-shake   { animation: skillShake    .85s ease; }

        /* ── SECTION ── */
        .skills-bg { background: var(--smoke); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .skills-label {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--muted); margin-top: 3.5rem; margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .skills-label::before { content:''; flex: 1; max-width:24px; height:1px; background:var(--line); }

        /* ── ICON GRID ── */
        .skills-icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
          gap: 1rem; margin-top: 2rem;
        }
        .skill-icon-card {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 10px; padding: 1.4rem .8rem;
          display: flex; flex-direction: column;
          align-items: center; gap: .7rem;
          cursor: pointer; position: relative; overflow: hidden;
          transition: border-color .3s, box-shadow .3s, transform .3s;
          user-select: none; opacity: 0;
        }
        .skill-icon-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at center, var(--sk-color,var(--gold))18, transparent 70%);
          opacity: 0; transition: opacity .4s;
        }
        .skill-icon-card:hover::before { opacity: 1; }
        .skill-icon-card:hover {
          border-color: var(--sk-color, var(--gold));
          box-shadow: 0 8px 30px var(--sk-color, var(--gold))30;
          transform: translateY(-6px) scale(1.04);
        }
        .skill-icon-img {
          width: 38px; height: 38px; object-fit: contain;
          filter: drop-shadow(0 2px 8px var(--sk-color,#fff)44);
          transition: filter .3s, transform .3s;
        }
        .skill-icon-card:hover .skill-icon-img {
          filter: drop-shadow(0 4px 14px var(--sk-color,#fff)80);
        }
        .skill-icon-name {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--muted); text-align: center;
          transition: color .3s;
        }
        .skill-icon-card:hover .skill-icon-name { color: var(--cream); }

        /* click hint tooltip */
        .skill-click-hint {
          position: absolute; bottom: .5rem; right: .5rem;
          font-size: .35rem; color: rgba(255,255,255,.15);
          font-family: var(--ff-mono); letter-spacing: .08em;
          text-transform: uppercase;
          transition: color .3s;
        }
        .skill-icon-card:hover .skill-click-hint { color: rgba(255,255,255,.3); }

        @media(max-width:768px){
          .skills-icon-grid { grid-template-columns: repeat(4, 1fr); gap: .7rem; }
          .skill-icon-card { padding: 1rem .5rem; }
          .skill-icon-img { width: 30px; height: 30px; }
        }
      `}</style>

      <section id="skills" className="section-pad skills-bg" ref={sectionRef}>
        <div className="section-num reveal-up">02 — Expertise</div>
        <h2 className="section-title reveal-up">What I <em>Do.</em></h2>
        <div className="skills-label reveal-up">Tech Stack · Click for a surprise</div>

        <div className="skills-icon-grid">
          {techStack.map((tech, i) => {
            const animClass = activeIdx === i ? getRandomAnim() : ''
            return (
              <div
                key={i}
                className={`skill-icon-card ${animClass}`}
                style={{ '--sk-color': tech.color }}
                onClick={() => handleIconClick(i)}
                title={`Click me! (${tech.name})`}
              >
                <img
                  className="skill-icon-img"
                  src={tech.icon}
                  alt={tech.name}
                  draggable={false}
                />
                <span className="skill-icon-name">{tech.name}</span>
                <span className="skill-click-hint">click!</span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
