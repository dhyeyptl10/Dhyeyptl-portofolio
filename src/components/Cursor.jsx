import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Hide on mobile
    if (window.innerWidth <= 768) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      animId = requestAnimationFrame(animate)
    }
    animate()

    const hoverEls = document.querySelectorAll('a, button, .skill-row, .proj-card, .cert-card, .mag-hover')
    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <style>{`
        #cursor-dot {
          position: fixed; top:0; left:0; z-index:9999;
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); pointer-events: none;
          transform: translate(-50%,-50%);
          transition: width .3s, height .3s, background .3s;
        }
        #cursor-ring {
          position: fixed; top:0; left:0; z-index:9998;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(201,169,110,0.5); pointer-events: none;
          transform: translate(-50%,-50%);
          transition: width .4s, height .4s, border-color .3s, background .3s;
        }
        body.cursor-hover #cursor-dot { width: 12px; height: 12px; background: var(--gold2); }
        body.cursor-hover #cursor-ring { width: 56px; height: 56px; border-color: var(--gold2); background: rgba(201,169,110,0.06); }
        @media(max-width:768px){ #cursor-dot, #cursor-ring { display:none; } }
      `}</style>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
