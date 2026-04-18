import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const hackathon = {
  id: '01',
  name: 'Odoo × Indus University Hackathon \'26',
  role: 'Team Czar · Frontend Lead',
  date: '4th & 5th April 2026',
  location: 'Indus University, Ahmedabad',
  teamId: '082',
  result: 'Participant',
  resultColor: '#C9A96E',
  organizer: 'CSE Department, IITE · Indus University',
  coOrganizer: 'Odoo India Pvt. Ltd.',
  color: '#C9A96E',
  colorRgb: '201,169,110',
  team: [
    { name: 'Dhyey Patel', role: 'Frontend Lead · UI/UX' },
    { name: 'Het Rathod', role: 'Backend Developer' },
    { name: 'Sarthak Bhalasi', role: 'Full-Stack Support' },
  ],
  desc: `Competed at the Odoo × Indus University Hackathon '26 — a 2-day intensive coding sprint organized by the CSE Department (IITE) at Indus University in collaboration with Odoo India Pvt. Ltd. As part of Team Czar (Team ID: 082), I led the frontend development and UI/UX design of a full-featured Burger King POS System — a production-quality contactless dining PWA built from scratch over 48 hours.`,
  longDesc: `The project — BK Crown POS — featured a complete order management system, real-time dine-in table booking, role-based dashboards for Admin, Kitchen, and Customer, secure authentication with Google OAuth, and a premium UI inspired by the Burger King brand. Every visual layer was crafted with care — from dark+gold color palettes to animated product cards and responsive layout. The experience sharpened my skills in rapid prototyping, high-pressure delivery, and working as a collaborative team unit.`,
  tech: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Google OAuth', 'GSAP', 'Vite', 'PWA'],
  photos: [
    { src: '/images/Team Czar Certificate of oddo x indus.jpeg', label: 'Team Czar — Certificates Received', wide: true, isFeatured: true },
    { src: '/images/Team Czar (oddo x indus ).jpeg', label: 'Team Czar at the venue', wide: false },
    { src: '/images/ID of hackathon.jpeg', label: 'Participant IDs — Team 082', wide: false },
    { src: '/images/oddo x indus project image.png', label: 'BK Crown POS — Hero Screen', wide: true },
    { src: '/images/oddo x indus project image (2).png', label: 'BK Crown POS — Menu View', wide: false },
    { src: '/images/oddo x indus project image (3).png', label: 'BK Crown POS — Dashboard', wide: false },
    { src: '/images/oddo x indus project image (4).png', label: 'BK Crown POS — Order Flow', wide: false },
    { src: '/images/certs/Hackathon oddo x indus.jpeg', label: 'Certificate of Participation', wide: false },
  ],
  highlights: [
    '48-hour intense coding sprint at Indus University',
    'Built a complete POS system from scratch — BK Crown PWA',
    'Role-based auth: Admin / Kitchen / Customer dashboards',
    'Real-time table booking + contactless dine-in ordering',
    'Google OAuth + JWT secure authentication system',
    'Premium Burger King-inspired UI with dark+gold theme',
    'Certificate issued by Odoo India Pvt. Ltd. & Indus University',
  ],
}

export default function Hackathons() {
  const sectionRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.hack-hdr-el', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', delay: 0.2
      })
      // Featured cert — dramatic entrance
      gsap.fromTo('.hack-cert-featured', {
        opacity: 0, y: 50, scale: 0.96,
      }, {
        opacity: 1, y: 0, scale: 1,
        duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.hack-cert-featured', start: 'top 85%', once: true }
      })
      gsap.fromTo('.hack-cert-badge', { opacity: 0, x: 30 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.hack-cert-featured', start: 'top 80%', once: true },
        delay: 0.5,
      })

      gsap.utils.toArray('.hack-photo-item:not(.featured)').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.92, y: 30 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.07,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true }
          }
        )
      })
      gsap.fromTo('.hack-highlight-item', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, stagger: 0.08, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.hack-highlights', start: 'top 85%' }
      })
      gsap.fromTo('.hack-team-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.hack-team', start: 'top 88%' }
      })
      gsap.utils.toArray('.hack-bar-fill').forEach(bar => {
        gsap.fromTo(bar, { width: '0%' }, {
          width: bar.dataset.val + '%',
          duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: bar, start: 'top 92%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        /* PAGE */
        .hack-page {
          min-height: 100vh; background: var(--ink);
          padding: clamp(6rem,10vw,9rem) 4vw clamp(4rem,8vw,8rem);
          position: relative; overflow: hidden;
        }
        .hack-page-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,169,110,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,.018) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 100%);
        }
        .hack-orb {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px);
        }
        .hack-orb-1 {
          width: 600px; height: 600px; top: -15%; right: -10%;
          background: radial-gradient(circle, rgba(201,169,110,.05) 0%, transparent 70%);
        }
        .hack-orb-2 {
          width: 400px; height: 400px; bottom: 10%; left: -8%;
          background: radial-gradient(circle, rgba(201,169,110,.03) 0%, transparent 70%);
        }

        /* BACK */
        .hack-back {
          display: inline-flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .68rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 3rem;
          transition: color .3s; position: relative; z-index: 2;
        }
        .hack-back:hover { color: var(--gold); }
        .hack-back i { transition: transform .3s; }
        .hack-back:hover i { transform: translateX(-4px); }

        /* HEADER */
        .hack-eyebrow {
          font-family: var(--ff-mono); font-size: .72rem; letter-spacing: .25em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;
          display: flex; align-items: center; gap: .8rem; opacity: 0;
          position: relative; z-index: 2;
        }
        .hack-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .hack-title {
          font-family: var(--ff-display); font-size: clamp(2.6rem,7vw,6.5rem);
          font-weight: 900; line-height: .95; letter-spacing: -.02em;
          opacity: 0; position: relative; z-index: 2;
        }
        .hack-title em { font-style: italic; color: var(--gold); }
        .hack-subtitle {
          max-width: 580px; font-size: .95rem; color: var(--muted);
          line-height: 1.75; margin-top: 1.5rem; opacity: 0;
          position: relative; z-index: 2;
        }

        /* META BAND */
        .hack-meta-band {
          display: flex; flex-wrap: wrap; gap: 1rem 2.5rem;
          margin: 2.5rem 0; padding: 1.8rem 0;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          position: relative; z-index: 2;
        }
        .hack-meta-item {
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .12em;
          text-transform: uppercase; color: var(--muted);
        }
        .hack-meta-item i { color: var(--gold); font-size: .7rem; }
        .hack-meta-label { color: var(--cream); font-weight: 600; }

        /* RESULT BADGE */
        .hack-result {
          display: inline-flex; align-items: center; gap: .55rem;
          background: rgba(201,169,110,.08);
          border: 1px solid rgba(201,169,110,.3);
          padding: .5rem 1.2rem; border-radius: 6px;
          font-family: var(--ff-mono); font-size: .68rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2rem;
          position: relative; z-index: 2;
        }

        /* BODY GRID */
        .hack-body { display: grid; grid-template-columns: 1fr 1.6fr; gap: 4rem; position: relative; z-index: 2; }
        @media(max-width: 968px) { .hack-body { grid-template-columns: 1fr; } }

        /* LEFT PANEL */
        .hack-info-panel {
          background: rgba(22,21,20,.7); border: 1px solid rgba(201,169,110,.12);
          border-radius: 18px; padding: 2.2rem; backdrop-filter: blur(10px);
          display: flex; flex-direction: column; gap: 1.8rem;
        }
        .hack-info-panel-top {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), rgba(201,169,110,.3));
          border-radius: 18px 18px 0 0; margin: -2.2rem -2.2rem 0;
          border-radius: 18px 18px 0 0;
        }

        .hack-desc-block h3 {
          font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .2em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .8rem;
        }
        .hack-desc-block p {
          font-size: .85rem; color: var(--muted); line-height: 1.8;
          border-left: 2px solid rgba(201,169,110,.25); padding-left: 1rem;
        }

        /* HIGHLIGHTS */
        .hack-highlights { display: flex; flex-direction: column; gap: .6rem; }
        .hack-highlight-item {
          display: flex; align-items: flex-start; gap: .8rem;
          font-size: .82rem; color: var(--muted); line-height: 1.5;
        }
        .hack-highlight-item::before {
          content: ''; min-width: 6px; height: 6px; border-radius: 50%; margin-top: .45em;
          background: var(--gold); box-shadow: 0 0 10px rgba(201,169,110,.5);
          flex-shrink: 0;
        }

        /* TECH TAGS */
        .hack-tech-row { display: flex; flex-wrap: wrap; gap: .45rem; }
        .hack-tech-tag {
          font-family: var(--ff-mono); font-size: .52rem; letter-spacing: .12em;
          text-transform: uppercase; padding: .3rem .75rem;
          border: 1px solid rgba(201,169,110,.2); border-radius: 4px;
          color: var(--muted); transition: border-color .3s, color .3s, background .3s;
        }
        .hack-tech-tag:hover {
          border-color: rgba(201,169,110,.45); color: var(--gold);
          background: rgba(201,169,110,.06);
        }

        /* TEAM */
        .hack-team { display: flex; flex-direction: column; gap: .6rem; }
        .hack-team-card {
          display: flex; align-items: center; gap: 1rem;
          background: rgba(255,255,255,.04); border: 1px solid rgba(201,169,110,.1);
          border-radius: 10px; padding: .9rem 1.2rem;
          transition: border-color .35s, background .35s;
        }
        .hack-team-card:hover {
          border-color: rgba(201,169,110,.3);
          background: rgba(201,169,110,.05);
        }
        .hack-team-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(201,169,110,.3), rgba(201,169,110,.1));
          border: 1px solid rgba(201,169,110,.25);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--ff-display); font-weight: 700; font-size: .9rem;
          color: var(--gold); flex-shrink: 0;
        }
        .hack-team-name { font-size: .88rem; font-weight: 600; color: var(--cream); }
        .hack-team-role { font-family: var(--ff-mono); font-size: .55rem; letter-spacing: .1em; color: var(--muted); }

        /* PHOTO SECTION */
        .hack-photo-section { display: flex; flex-direction: column; gap: 1rem; }
        .hack-photos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: .9rem;
        }
        .hack-photo-item {
          border-radius: 12px; overflow: hidden;
          border: 1px solid rgba(201,169,110,.1);
          cursor: pointer; position: relative;
          background: rgba(15,14,13,.8);
          transition: border-color .35s, transform .35s cubic-bezier(.25,1,.5,1), box-shadow .35s;
        }
        .hack-photo-item.wide { grid-column: 1 / -1; }
        .hack-photo-item:hover {
          border-color: rgba(201,169,110,.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,.5), 0 0 30px rgba(201,169,110,.1);
        }
        .hack-photo-item img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; min-height: 160px;
          transition: transform .5s cubic-bezier(.25,1,.5,1), filter .5s;
          filter: brightness(.88);
        }
        .hack-photo-item.wide img { min-height: 220px; }
        .hack-photo-item:hover img { transform: scale(1.04); filter: brightness(1); }
        .hack-photo-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(8,7,7,.85) 0%, transparent 100%);
          padding: .8rem .8rem .6rem;
          font-family: var(--ff-mono); font-size: .52rem; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(201,169,110,.8);
        }
        .hack-photo-zoom {
          position: absolute; top: .6rem; right: .6rem;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(8,7,7,.7); border: 1px solid rgba(201,169,110,.25);
          display: flex; align-items: center; justify-content: center;
          font-size: .6rem; color: var(--gold); opacity: 0;
          transition: opacity .3s; backdrop-filter: blur(6px);
        }
        .hack-photo-item:hover .hack-photo-zoom { opacity: 1; }

        /* FEATURED CERTIFICATE */
        .hack-cert-featured {
          grid-column: 1 / -1;
          border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(201,169,110,.25);
          cursor: pointer; position: relative;
          background: rgba(10,9,8,.9);
          box-shadow: 0 0 0 1px rgba(201,169,110,.08), 0 20px 60px rgba(0,0,0,.5);
          transition: border-color .45s, transform .45s cubic-bezier(.25,1,.5,1), box-shadow .45s;
          margin-bottom: .9rem;
        }
        .hack-cert-featured::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), rgba(201,169,110,.4), transparent);
          z-index: 2;
        }
        .hack-cert-featured::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(201,169,110,.06) 50%, transparent 70%);
          animation: certShimmerFeat 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes certShimmerFeat {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }
        .hack-cert-featured:hover {
          border-color: rgba(201,169,110,.55);
          transform: translateY(-5px);
          box-shadow: 0 0 0 1px rgba(201,169,110,.2), 0 28px 70px rgba(0,0,0,.55), 0 0 50px rgba(201,169,110,.10);
        }
        .hack-cert-featured img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; min-height: 280px; max-height: 420px;
          transition: transform .6s cubic-bezier(.25,1,.5,1), filter .6s;
          filter: brightness(.9) saturate(1.05);
        }
        .hack-cert-featured:hover img { transform: scale(1.03); filter: brightness(1) saturate(1.1); }
        .hack-cert-featured-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(8,7,7,.92) 0%, rgba(8,7,7,.4) 60%, transparent 100%);
          padding: 1.8rem 1.4rem 1rem;
          display: flex; align-items: center; justify-content: space-between;
          z-index: 3;
        }
        .hack-cert-featured-title {
          font-family: var(--ff-display); font-size: clamp(.95rem,2vw,1.3rem);
          font-weight: 700; color: var(--cream); line-height: 1.2;
        }
        .hack-cert-featured-title span {
          display: block;
          font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .3rem;
        }
        .hack-cert-badge {
          display: flex; align-items: center; gap: .5rem;
          background: rgba(201,169,110,.12); border: 1px solid rgba(201,169,110,.35);
          backdrop-filter: blur(8px); border-radius: 6px;
          padding: .5rem 1rem; flex-shrink: 0;
          opacity: 0;
        }
        .hack-cert-badge i { color: var(--gold); font-size: .8rem; }
        .hack-cert-badge-text {
          display: flex; flex-direction: column; gap: .1rem;
        }
        .hack-cert-badge-main {
          font-family: var(--ff-display); font-size: .82rem; font-weight: 700; color: var(--gold);
        }
        .hack-cert-badge-sub {
          font-family: var(--ff-mono); font-size: .48rem; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted);
        }
        .hack-cert-zoom {
          position: absolute; top: 1rem; right: 1rem; z-index: 4;
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(8,7,7,.75); border: 1px solid rgba(201,169,110,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: .7rem; color: var(--gold); opacity: 0;
          transition: opacity .3s; backdrop-filter: blur(6px);
        }
        .hack-cert-featured:hover .hack-cert-zoom { opacity: 1; }

        /* LIGHTBOX */
        .hack-lightbox {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(8,7,7,.95); backdrop-filter: blur(16px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: opacity .35s;
          padding: 2rem;
        }
        .hack-lightbox.open { opacity: 1; pointer-events: all; }
        .hack-lightbox img {
          max-width: 90vw; max-height: 85vh; border-radius: 12px;
          box-shadow: 0 30px 80px rgba(0,0,0,.7);
          border: 1px solid rgba(201,169,110,.2);
          animation: lbIn .35s cubic-bezier(.25,1,.5,1);
        }
        @keyframes lbIn {
          from { transform: scale(.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .hack-lbox-close {
          position: absolute; top: 1.5rem; right: 1.5rem;
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(22,21,20,.9); border: 1px solid rgba(201,169,110,.3);
          color: var(--gold); font-size: 1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .3s, transform .3s;
        }
        .hack-lbox-close:hover { background: rgba(201,169,110,.15); transform: scale(1.1); }
        .hack-lbox-label {
          position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
          font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .15em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(8,7,7,.8); padding: .4rem 1rem; border-radius: 4px;
          border: 1px solid rgba(201,169,110,.2); white-space: nowrap;
        }

        /* SECTION label */
        .hack-section-label {
          font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .22em;
          text-transform: uppercase; color: var(--gold); margin-bottom: .8rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .hack-section-label::before { content: ''; width: 20px; height: 1px; background: var(--gold); }

        @media(max-width: 640px) {
          .hack-photos-grid { grid-template-columns: 1fr; }
          .hack-photo-item.wide { grid-column: unset; }
        }
      `}</style>

      {/* Lightbox */}
      <div className={`hack-lightbox${lightbox !== null ? ' open' : ''}`} onClick={() => setLightbox(null)}>
        {lightbox !== null && (
          <>
            <img src={hackathon.photos[lightbox].src} alt={hackathon.photos[lightbox].label} onClick={e => e.stopPropagation()} />
            <div className="hack-lbox-label">{hackathon.photos[lightbox].label}</div>
          </>
        )}
        <button className="hack-lbox-close" onClick={() => setLightbox(null)}>
          <i className="fas fa-times" />
        </button>
      </div>

      <div className="hack-page" ref={sectionRef}>
        <div className="hack-page-bg" />
        <div className="hack-orb hack-orb-1" />
        <div className="hack-orb hack-orb-2" />

        {/* Back */}
        <Link to="/" className="hack-back">
          <i className="fas fa-arrow-left" /> Back to Portfolio
        </Link>

        {/* Header */}
        <div className="hack-eyebrow hack-hdr-el">Hackathons &amp; Competitions</div>
        <h1 className="hack-title hack-hdr-el">
          Built Under<br /><em>Pressure.</em>
        </h1>
        <p className="hack-subtitle hack-hdr-el">
          48-hour sprints, midnight hustle, and teams that ship. Here's the story of the Odoo × Indus University Hackathon '26 — where Team Czar turned caffeine and code into a production-ready POS system.
        </p>

        {/* Result badge */}
        <div className="hack-result hack-hdr-el">
          <i className="fas fa-certificate" />
          Certificate of Participation · Odoo India Pvt. Ltd. &amp; Indus University
        </div>

        {/* Meta band */}
        <div className="hack-meta-band hack-hdr-el">
          <div className="hack-meta-item">
            <i className="fas fa-calendar-alt" />
            <span className="hack-meta-label">{hackathon.date}</span>
          </div>
          <div className="hack-meta-item">
            <i className="fas fa-map-marker-alt" />
            <span className="hack-meta-label">{hackathon.location}</span>
          </div>
          <div className="hack-meta-item">
            <i className="fas fa-users" />
            <span className="hack-meta-label">Team Czar · ID {hackathon.teamId}</span>
          </div>
          <div className="hack-meta-item">
            <i className="fas fa-building" />
            <span className="hack-meta-label">{hackathon.coOrganizer}</span>
          </div>
          <div className="hack-meta-item">
            <i className="fas fa-user-tag" />
            <span className="hack-meta-label">{hackathon.role}</span>
          </div>
        </div>

        {/* Body */}
        <div className="hack-body">

          {/* Left: info */}
          <div className="hack-info-panel">
            <div className="hack-info-panel-top" />

            <div className="hack-desc-block">
              <h3>The Challenge</h3>
              <p>{hackathon.desc}</p>
            </div>

            <div className="hack-desc-block">
              <h3>The Build</h3>
              <p>{hackathon.longDesc}</p>
            </div>

            <div>
              <div className="hack-section-label">Key Highlights</div>
              <div className="hack-highlights">
                {hackathon.highlights.map((h, i) => (
                  <div className="hack-highlight-item" key={i}>{h}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="hack-section-label">Tech Stack</div>
              <div className="hack-tech-row">
                {hackathon.tech.map(t => (
                  <span className="hack-tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="hack-section-label">Team Members</div>
              <div className="hack-team">
                {hackathon.team.map((m, i) => (
                  <div className="hack-team-card" key={i}>
                    <div className="hack-team-avatar">{m.name[0]}</div>
                    <div>
                      <div className="hack-team-name">{m.name}</div>
                      <div className="hack-team-role">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: photos */}
          <div className="hack-photo-section">
            <div className="hack-section-label">Moments &amp; Memories</div>

            {/* ── FEATURED CERTIFICATE ── */}
            {hackathon.photos[0]?.isFeatured && (
              <div
                className="hack-cert-featured"
                onClick={() => setLightbox(0)}
              >
                <img src={hackathon.photos[0].src} alt={hackathon.photos[0].label} loading="eager" />
                <div className="hack-cert-zoom"><i className="fas fa-expand" /></div>
                <div className="hack-cert-featured-label">
                  <div className="hack-cert-featured-title">
                    <span>Certificate of Participation</span>
                    Team Czar — Odoo × Indus University Hackathon '26
                  </div>
                  <div className="hack-cert-badge">
                    <i className="fas fa-award" />
                    <div className="hack-cert-badge-text">
                      <div className="hack-cert-badge-main">Team Czar</div>
                      <div className="hack-cert-badge-sub">ID: 082 · April 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── REST OF PHOTOS GRID ── */}
            <div className="hack-photos-grid">
              {hackathon.photos.slice(1).map((photo, i) => (
                <div
                  key={i}
                  className={`hack-photo-item${photo.wide ? ' wide' : ''}`}
                  onClick={() => setLightbox(i + 1)}
                >
                  <img src={photo.src} alt={photo.label} loading="lazy" />
                  <div className="hack-photo-label">{photo.label}</div>
                  <div className="hack-photo-zoom"><i className="fas fa-expand" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
