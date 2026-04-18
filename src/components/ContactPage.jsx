import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const EMAILJS_SERVICE = 'YOUR_SERVICE_ID'  // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const EMAILJS_KEY = 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})
  const pageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 })
    tl.fromTo('.cp-header-line', { y: '110%' }, { y: '0%', duration: 1, ease: 'power3.out', stagger: .1 })
    tl.fromTo('.cp-form-group', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .08 }, 0.6)
    tl.fromTo('.cp-side', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: .9, ease: 'power3.out' }, 0.5)
    gsap.fromTo('.cp-back', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .6, ease: 'power2.out', delay: .3 })
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')

    // Try EmailJS first, fallback to mailto
    try {
      if (window.emailjs) {
        await window.emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }, EMAILJS_KEY)
        setStatus('success')
      } else {
        // Mailto fallback
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
        window.location.href = `mailto:pateldhamo0079@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`
        setStatus('success')
      }
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .contact-page {
          min-height: 100vh; background: var(--ink);
          display: flex; flex-direction: column;
        }
        .cp-back {
          position: fixed; top: 2rem; left: 4vw; z-index: 100;
          display: flex; align-items: center; gap: .6rem;
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); transition: color .3s; cursor: none;
          text-decoration: none; opacity: 0;
        }
        .cp-back:hover { color: var(--gold); }
        .cp-back i { transition: transform .3s; }
        .cp-back:hover i { transform: translateX(-4px); }

        .cp-inner {
          flex: 1; display: grid;
          grid-template-columns: 1fr 1.1fr;
          min-height: 100vh;
        }
        .cp-left {
          padding: clamp(8rem,12vw,12rem) 4vw 5vw;
          background: var(--smoke); border-right: 1px solid var(--line);
          position: sticky; top: 0; height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
        }
        .cp-header-wrap { overflow: hidden; }
        .cp-header-line {
          font-family: var(--ff-display); font-size: clamp(3.5rem,8vw,8rem);
          font-weight: 900; line-height: .9; letter-spacing: -.03em;
          display: block; transform: translateY(110%);
        }
        .cp-header-line em { font-style: italic; color: var(--gold); }
        .cp-tagline {
          font-size: 1rem; color: var(--muted); line-height: 1.7;
          margin-top: 2rem; max-width: 320px;
        }
        .cp-contact-info {
          margin-top: 3rem; display: flex; flex-direction: column; gap: 1.2rem;
          border-top: 1px solid var(--line); padding-top: 2rem;
        }
        .cp-info-item {
          display: flex; align-items: center; gap: 1rem;
        }
        .cp-info-icon {
          width: 36px; height: 36px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--gold); font-size: .8rem;
          transition: border-color .3s, background .3s;
        }
        .cp-info-item:hover .cp-info-icon {
          border-color: var(--gold); background: rgba(201,169,110,.08);
        }
        .cp-info-text { font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .08em; color: var(--muted); }
        .cp-info-text a { color: var(--gold); transition: opacity .3s; }
        .cp-info-text a:hover { opacity: .7; }
        .cp-socials { display: flex; gap: .8rem; margin-top: 2rem; }
        .cp-social {
          width: 38px; height: 38px; border: 1px solid var(--line);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: .85rem; color: var(--muted);
          transition: border-color .3s, color .3s, transform .3s, background .3s;
        }
        .cp-social:hover {
          border-color: var(--gold); color: var(--gold);
          transform: translateY(-4px); background: rgba(201,169,110,.08);
        }
        .cp-deco-num {
          font-family: var(--ff-display); font-size: clamp(8rem,15vw,15rem);
          font-weight: 900; color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,.04);
          position: absolute; right: -2rem; bottom: -2rem;
          line-height: 1; pointer-events: none; user-select: none;
        }

        /* RIGHT - FORM */
        .cp-right {
          padding: clamp(8rem,12vw,12rem) 5vw 5vw;
          display: flex; flex-direction: column; justify-content: center;
        }
        .cp-side { opacity: 0; }
        .cp-form-title {
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2.5rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .cp-form-title::before { content:''; width:24px; height:1px; background:var(--gold); }
        .cp-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .cp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        .cp-form-group {
          display: flex; flex-direction: column; gap: .5rem; opacity: 0;
        }
        .cp-form-label {
          font-family: var(--ff-mono); font-size: .58rem;
          letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
        }
        .cp-form-input, .cp-form-textarea {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 6px; padding: .9rem 1.1rem;
          font-family: var(--ff-body); font-size: .9rem; color: var(--cream);
          outline: none; resize: none; width: 100%;
          transition: border-color .3s, box-shadow .3s, background .3s;
        }
        .cp-form-input::placeholder, .cp-form-textarea::placeholder { color: rgba(242,237,228,.2); }
        .cp-form-input:focus, .cp-form-textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,169,110,.1);
          background: rgba(201,169,110,.03);
        }
        .cp-form-input.error, .cp-form-textarea.error { border-color: #f87171; }
        .cp-form-error {
          font-family: var(--ff-mono); font-size: .52rem;
          letter-spacing: .08em; color: #f87171;
        }
        .cp-form-textarea { min-height: 140px; }
        .cp-submit {
          display: inline-flex; align-items: center; gap: 1rem;
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--ink); background: var(--gold);
          border: none; padding: 1.1rem 2.5rem;
          cursor: none; transition: background .3s, transform .3s;
          border-radius: 4px; align-self: flex-start; position: relative;
          overflow: hidden;
        }
        .cp-submit::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
          transform: translateX(-100%); transition: transform 0s;
        }
        .cp-submit:hover::after { transform: translateX(100%); transition: transform .5s; }
        .cp-submit:hover { background: var(--gold2); transform: translateY(-2px); }
        .cp-submit:disabled { opacity: .5; cursor: not-allowed; }

        .cp-status-msg {
          margin-top: 1.2rem; padding: .9rem 1.2rem; border-radius: 6px;
          font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .1em;
          display: flex; align-items: center; gap: .7rem;
        }
        .cp-status-msg.success { background: rgba(74,222,128,.08); border: 1px solid rgba(74,222,128,.3); color: #4ade80; }
        .cp-status-msg.error { background: rgba(248,113,113,.08); border: 1px solid rgba(248,113,113,.3); color: #f87171; }

        .cp-spinner {
          width: 14px; height: 14px; border: 2px solid rgba(8,7,7,.3);
          border-top-color: var(--ink); border-radius: 50%;
          animation: cpSpin .7s linear infinite;
        }
        @keyframes cpSpin { to { transform: rotate(360deg); } }

        @media(max-width:900px){
          .cp-inner { grid-template-columns: 1fr; }
          .cp-left { position: relative; height: auto; }
          .cp-form-row { grid-template-columns: 1fr; }
        }
        @media(max-width:768px){
          .cp-back { cursor: auto; }
          .cp-submit { cursor: pointer; }
        }
      `}</style>

      <div className="contact-page" ref={pageRef}>
        <Link to="/" className="cp-back">
          <i className="fas fa-arrow-left" /> Back to Home
        </Link>

        <div className="cp-inner">
          {/* LEFT: Info */}
          <div className="cp-left">
            <div className="cp-deco-num">✉</div>
            <div>
              <div className="cp-header-wrap">
                <span className="cp-header-line">Let's</span>
              </div>
              <div className="cp-header-wrap">
                <span className="cp-header-line"><em>Talk.</em></span>
              </div>
              <p className="cp-tagline">
                Got a project in mind? An idea to explore? Or just want to say hi? 
                I'm always open to interesting conversations.
              </p>
              <div className="cp-contact-info">
                <div className="cp-info-item">
                  <div className="cp-info-icon"><i className="far fa-envelope" /></div>
                  <div className="cp-info-text">
                    <a href="mailto:pateldhamo0079@gmail.com">pateldhamo0079@gmail.com</a>
                  </div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon"><i className="fas fa-map-marker-alt" /></div>
                  <div className="cp-info-text">Gujarat, India · Open to Remote</div>
                </div>
                <div className="cp-info-item">
                  <div className="cp-info-icon"><i className="fas fa-clock" /></div>
                  <div className="cp-info-text">Response within 24 hours</div>
                </div>
              </div>
              <div className="cp-socials">
                <a href="https://instagram.com/_dhamopatel_10" target="_blank" rel="noreferrer" className="cp-social"><i className="fab fa-instagram" /></a>
                <a href="https://linkedin.com/in/dhyey-patel-803528394" target="_blank" rel="noreferrer" className="cp-social"><i className="fab fa-linkedin-in" /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="cp-social"><i className="fab fa-github" /></a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="cp-right cp-side">
            <div className="cp-form-title">Send a Message</div>
            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label className="cp-form-label" htmlFor="cp-name">Your Name</label>
                  <input
                    id="cp-name" name="name" type="text"
                    className={`cp-form-input${errors.name ? ' error' : ''}`}
                    placeholder="Dhyey Patel"
                    value={form.name} onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                  {errors.name && <span className="cp-form-error">{errors.name}</span>}
                </div>
                <div className="cp-form-group">
                  <label className="cp-form-label" htmlFor="cp-email">Email Address</label>
                  <input
                    id="cp-email" name="email" type="email"
                    className={`cp-form-input${errors.email ? ' error' : ''}`}
                    placeholder="hello@example.com"
                    value={form.email} onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                  {errors.email && <span className="cp-form-error">{errors.email}</span>}
                </div>
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="cp-subject">Subject</label>
                <input
                  id="cp-subject" name="subject" type="text"
                  className={`cp-form-input${errors.subject ? ' error' : ''}`}
                  placeholder="Let's build something amazing"
                  value={form.subject} onChange={handleChange}
                  disabled={status === 'sending'}
                />
                {errors.subject && <span className="cp-form-error">{errors.subject}</span>}
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="cp-message">Message</label>
                <textarea
                  id="cp-message" name="message"
                  className={`cp-form-textarea${errors.message ? ' error' : ''}`}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  value={form.message} onChange={handleChange}
                  disabled={status === 'sending'}
                />
                {errors.message && <span className="cp-form-error">{errors.message}</span>}
              </div>
              <button
                type="submit"
                className="cp-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><div className="cp-spinner" /> Sending…</>
                ) : (
                  <><i className="fas fa-paper-plane" /> Send Message</>
                )}
              </button>
              {status === 'success' && (
                <div className="cp-status-msg success">
                  <i className="fas fa-check-circle" />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="cp-status-msg error">
                  <i className="fas fa-exclamation-triangle" />
                  Something went wrong. Please email me directly at pateldhamo0079@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
