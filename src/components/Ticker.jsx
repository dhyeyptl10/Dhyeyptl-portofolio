const items = [
  'Front End Dev', 'Figma Design', 'Aesthetic UI', 'GSAP Animations',
  'React.js', 'C / C++', 'Node.js', 'Creative Coder', 'Prompt Engineering'
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <>
      <style>{`
        .ticker-wrap {
          position: relative; z-index: 10; overflow: hidden;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          padding: .9rem 0; background: rgba(255,255,255,.02);
          backdrop-filter: blur(6px);
        }
        .ticker-track {
          display: flex; white-space: nowrap;
          animation: ticker 22s linear infinite;
        }
        .ticker-track span {
          font-family: var(--ff-mono); font-size: .7rem;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--muted); padding: 0 3rem;
        }
        .ticker-track span b { color: var(--gold); font-weight: 400; }
      `}</style>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i}>{item} <b>✦</b></span>
          ))}
        </div>
      </div>
    </>
  )
}
