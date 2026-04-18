import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .contact-section {
          text-align:center; background:var(--ink);
          padding: clamp(6rem,12vw,12rem) 4vw clamp(4rem,8vw,8rem);
          border-top:1px solid var(--line);
        }
        .contact-giant {
          font-family:var(--ff-display); font-size:clamp(3rem,9vw,9rem);
          font-weight:900; font-style:italic; line-height:.9; letter-spacing:-.02em;
          background: linear-gradient(135deg,var(--cream) 30%,var(--gold) 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          margin-bottom:2rem;
        }
        .contact-email {
          font-family:var(--ff-mono); font-size:clamp(.8rem,1.5vw,1rem);
          letter-spacing:.1em; color:var(--muted); margin-bottom:4rem;
        }
        .contact-email a { color:var(--gold); transition:opacity .3s; }
        .contact-email a:hover { opacity:.7; }
        .socials { display:flex; justify-content:center; gap:2rem; margin-bottom:5rem; }
        .social-link {
          width:48px; height:48px; border:1px solid var(--line); border-radius:50%;
          display:flex; align-items:center; justify-content:center; font-size:1.1rem;
          color:var(--muted);
          transition: border-color .3s, color .3s, transform .4s cubic-bezier(.25,1,.5,1), background .3s;
        }
        .social-link:hover {
          border-color:var(--gold); color:var(--gold);
          transform:translateY(-6px); background:rgba(201,169,110,.08);
        }
        .footer-bottom {
          display:flex; align-items:center; justify-content:space-between;
          flex-wrap:wrap; gap:1rem; border-top:1px solid var(--line); padding-top:2rem;
          font-family:var(--ff-mono); font-size:.65rem; letter-spacing:.12em;
          text-transform:uppercase; color:var(--muted);
        }
        @media(max-width:768px){ .contact-giant { font-size:3rem; } .footer-bottom { justify-content:center; text-align:center; } }
      `}</style>

      <footer id="contact" className="contact-section" ref={sectionRef}>
        <div className="contact-giant reveal-up">Let's<br />Connect.</div>
        <div className="contact-email reveal-up">
          Drop a line at <a href="mailto:pateldhamo0079@gmail.com">pateldhamo0079@gmail.com</a>
          &nbsp; or use the form below.
        </div>
        <div className="reveal-up" style={{ marginBottom: '3rem' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.8rem',
              fontFamily: 'var(--ff-mono)', fontSize: '.75rem',
              letterSpacing: '.15em', textTransform: 'uppercase',
              color: 'var(--ink)', background: 'var(--gold)',
              padding: '1rem 2.5rem', borderRadius: '4px',
              transition: 'background .3s, transform .3s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >
            <i className="fas fa-paper-plane" /> Send Me a Message →
          </Link>
        </div>
        <div className="socials reveal-up">
          <a href="https://github.com/dhyeyptl10" target="_blank" rel="noreferrer" className="social-link mag-hover" title="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/dhyey-patel-803528394" target="_blank" rel="noreferrer" className="social-link mag-hover" title="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://x.com/DHYEYPATEL2910" target="_blank" rel="noreferrer" className="social-link mag-hover" title="Twitter / X">
            <i className="fab fa-x-twitter" />
          </a>
          <a href="https://leetcode.com/u/dhyeyptl_10/" target="_blank" rel="noreferrer" className="social-link mag-hover" title="LeetCode">
            <i className="fas fa-code" />
          </a>
          <a href="https://www.youtube.com/@dhyeyptl10" target="_blank" rel="noreferrer" className="social-link mag-hover" title="YouTube">
            <i className="fab fa-youtube" />
          </a>
          <a href="https://instagram.com/_dhamopatel_10" target="_blank" rel="noreferrer" className="social-link mag-hover" title="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="mailto:pateldhamo0079@gmail.com" className="social-link mag-hover" title="Email">
            <i className="far fa-envelope" />
          </a>
        </div>
        <div className="footer-bottom reveal-up">
          <span>© 2026 Dhyey "Dhamo" Patel</span>
          <span>Built with React + GSAP</span>
          <span>Gujarat, India</span>
        </div>
      </footer>
    </>
  )
}
