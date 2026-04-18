import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    href: 'https://rejouiceclone1.netlify.app/',
    thumb: 'https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=2559&q=80',
    alt: 'Rejouice Clone',
    tag: 'Frontend Clone · GSAP · HTML/CSS',
    title: 'Rejouice Clone',
    desc: 'A pixel-perfect recreation of the award-winning Rejouice agency site, featuring buttery scroll animations and editorial design.',
  },
  {
    id: 2,
    href: 'https://rolex-clone30.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
    alt: 'Rolex Clone',
    tag: 'Luxury UI · Frontend · Scroll Magic',
    title: 'Rolex Clone',
    desc: 'A luxury-grade Rolex website clone showcasing premium typography, immersive scroll storytelling and refined micro-interactions.',
  },
  {
    id: 3,
    href: 'https://otakuverse1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    alt: 'Otaku Verse',
    tag: 'Anime · Community · Web Design',
    title: 'Otaku Verse',
    desc: 'An immersive hub for Otaku culture, featuring a dynamic interface and curated content for the global anime community.',
  },
  {
    id: 4,
    href: 'https://git-analyzer10.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    alt: 'Git Analyzer',
    tag: 'Analytics · GitHub API · Data Visualization',
    title: 'Git Analyzer',
    desc: 'Transform your GitHub profile into a visual portfolio with deep-dive analytics on repositories and coding patterns.',
  },
  {
    id: 5,
    href: 'https://worldfactory1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    alt: 'World Factory',
    tag: 'E-Commerce · Culinary · Premium UI',
    title: 'World Factory',
    desc: '"Everything\'s on the menu. Except compromise." A high-end platform delivering premium culinary experiences without shortcuts.',
  },
  {
    id: 6,
    href: 'https://meal-explorer1.netlify.app/',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    alt: 'Meal Explorer',
    tag: 'Recipe Search · API · Meal Discovery',
    title: 'Meal Explorer',
    desc: 'Explore thousands of recipes with a sleek search engine. Discover your next favorite dish with detailed instructions and high-quality visuals.',
  },
]

function ProjectCard({ project }) {
  const [showPreview, setShowPreview] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const timerRef = useRef(null)

  const handleEnter = () => {
    setShowBar(true)
    timerRef.current = setTimeout(() => {
      setIframeLoaded(true)
      setShowPreview(true)
    }, 4500)
  }

  const handleLeave = () => {
    clearTimeout(timerRef.current)
    setShowBar(false)
    setShowPreview(false)
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card reveal-up"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="proj-card-inner">
        <div className="proj-thumb">
          <img src={project.thumb} alt={project.alt} loading="lazy" />
          <div className="proj-thumb-overlay" />
          <div className={`proj-loading-bar${showBar ? ' animate' : ''}`} />
          <div className={`proj-preview-wrap${showPreview ? ' show' : ''}`}>
            <div className="proj-preview-label">Live Preview</div>
            <div className="proj-live-badge">Live Site</div>
            {iframeLoaded && (
              <iframe
                className="proj-iframe"
                src={project.href}
                title={`${project.title} Preview`}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            )}
          </div>
        </div>
        <div className="proj-arrow"><i className="fas fa-arrow-up-right" /></div>
      </div>
      <div className="proj-info">
        <div className="proj-tag">{project.tag}</div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>
      </div>
    </a>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: i * .08,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .projects-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: clamp(3rem,5vw,5rem);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(400px,100%), 1fr));
          gap: 2rem;
        }
        .proj-card {
          position: relative; overflow: hidden; background: var(--card);
          border: 1px solid var(--line); border-radius: 4px; display: block;
        }
        .proj-card-inner { position: relative; }
        .proj-thumb { aspect-ratio: 16/10; background: #1a1918; overflow: hidden; position: relative; }
        .proj-thumb img {
          width:100%; height:100%; object-fit:cover;
          transition: transform .8s cubic-bezier(.25,1,.5,1), filter .8s, opacity .6s;
          filter: saturate(.6) brightness(.7); position: relative; z-index:1;
        }
        .proj-card:hover .proj-thumb img { transform: scale(1.06); filter: saturate(.9) brightness(.85); }
        .proj-preview-wrap {
          position: absolute; inset:0; z-index:2; opacity:0;
          transition: opacity .8s ease; pointer-events:none; overflow:hidden;
        }
        .proj-preview-wrap.show { opacity:1; pointer-events:auto; }
        .proj-preview-label {
          position: absolute; top:10px; left:10px; z-index:4;
          font-family: var(--ff-mono); font-size:.6rem; letter-spacing:.2em;
          text-transform:uppercase; background:rgba(8,7,7,.85); color:var(--gold);
          padding:.3rem .7rem; border:1px solid rgba(201,169,110,.3); backdrop-filter:blur(6px);
        }
        .proj-live-badge {
          position: absolute; top:10px; right:10px; z-index:4;
          font-family: var(--ff-mono); font-size:.55rem; letter-spacing:.15em;
          text-transform:uppercase; background:rgba(201,169,110,.15); color:var(--gold2);
          padding:.3rem .7rem; border:1px solid rgba(201,169,110,.4); backdrop-filter:blur(6px);
          display:flex; align-items:center; gap:.4rem;
        }
        .proj-live-badge::before {
          content:''; width:5px; height:5px; border-radius:50%; background:var(--gold2);
          animation: livePulse 1.2s ease-in-out infinite;
        }
        .proj-iframe { width:100%; height:100%; border:none; background:#1a1918; }
        .proj-loading-bar {
          position: absolute; bottom:0; left:0; z-index:3; height:2px;
          background: linear-gradient(90deg, var(--gold), var(--gold2));
          width:0%; transition: width 4s linear;
        }
        .proj-loading-bar.animate { width:100%; }
        .proj-thumb-overlay {
          position: absolute; inset:0; z-index:0;
          background: linear-gradient(to top, rgba(8,7,7,.85) 0%, transparent 60%);
        }
        .proj-info { padding: 1.8rem; border-top: 1px solid var(--line); }
        .proj-tag {
          font-family: var(--ff-mono); font-size:.6rem; letter-spacing:.2em;
          text-transform:uppercase; color:var(--gold); margin-bottom:.7rem;
        }
        .proj-title {
          font-family: var(--ff-display); font-size:1.6rem;
          font-weight:700; line-height:1.1; transition:color .3s;
        }
        .proj-card:hover .proj-title { color: var(--gold2); }
        .proj-desc { font-size:.88rem; color:var(--muted); margin-top:.6rem; line-height:1.6; }
        .proj-arrow {
          position: absolute; top:1.5rem; right:1.5rem;
          width:42px; height:42px; border:1px solid var(--gold); border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          color:var(--gold); font-size:.8rem;
          opacity:0; transform:translate(4px,-4px);
          transition: opacity .4s, transform .4s, background .3s, color .3s; z-index:5;
        }
        .proj-card:hover .proj-arrow { opacity:1; transform:translate(0,0); }
        .proj-arrow:hover { background:var(--gold); color:var(--ink); }
        @media(max-width:768px){ .projects-header { flex-direction:column; align-items:flex-start; gap:1.5rem; } .projects-grid { gap:1.5rem; } }
      `}</style>

      <section id="projects" className="section-pad" ref={sectionRef}>
        <div className="projects-header">
          <div>
            <div className="section-num reveal-up">03 — Projects</div>
            <h2 className="section-title reveal-up">Selected <em>Work.</em></h2>
          </div>
          <div className="reveal-up">
            <Link to="/works" className="mag-btn-outline mag-hover">All Works ↗</Link>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </>
  )
}
