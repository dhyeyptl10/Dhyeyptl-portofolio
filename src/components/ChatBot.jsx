import { useState, useRef, useEffect } from 'react'

// ─── LOCAL KNOWLEDGE BASE ─────────────────────────────────────
// No API key needed — the AI assistant answers from this knowledge base
const KNOWLEDGE = {
  about: {
    keywords: ['who', 'about', 'dhamo', 'dhyey', 'name', 'tell me', 'introduce', 'yourself', 'him', 'background'],
    response: `✦ Dhyey "Dhamo" Patel is a passionate Frontend Developer & Computer Science student from Gujarat, India. Currently pursuing his B.Tech (Batch 2025–2029), he specializes in crafting aesthetic UIs with pixel-perfect precision, buttery GSAP animations, and immersive web experiences.`
  },
  skills: {
    keywords: ['skill', 'tech', 'stack', 'tool', 'language', 'can he', 'what does he know', 'technologies', 'expertise', 'capable'],
    response: `✦ Dhamo's toolkit includes:\n• Front End — HTML/CSS, JavaScript (Expert)\n• Animation — GSAP (Advanced)\n• Design — Figma (Advanced)\n• Frameworks — React.js (Growing)\n• Languages — C (Proficient), C++ (Beginner)\n• Backend — Node.js (Learning)\n• Other — Prompt Engineering, Aesthetic UI Design`
  },
  projects: {
    keywords: ['project', 'work', 'portfolio', 'built', 'made', 'created', 'website', 'sites', 'view project'],
    response: `✦ Dhamo has shipped 6 impressive projects:\n\n🔹 Rejouice Clone — Pixel-perfect agency site with GSAP scroll magic\n🔹 Rolex Clone — Luxury-grade UI with parallax storytelling\n🔹 Otaku Verse — Immersive anime community hub\n🔹 Git Analyzer — GitHub profile analytics dashboard\n🔹 World Factory — Premium culinary e-commerce platform\n🔹 Meal Explorer — Recipe search engine with beautiful UI\n\nAll live at their respective Netlify URLs!`
  },
  certificates: {
    keywords: ['cert', 'certificate', 'certified', 'credential', 'achievement', 'hackathon', 'award', 'rank'],
    response: `✦ Dhamo holds 8 certifications & hackathon achievements:\n\n🏅 Frontend Mastery (2025)\n🏅 C Programming Logic (2025)\n🏅 Prompt Engineering (2025)\n🏆 Prompt Craft Hackathon — 3rd Place 🥉\n📜 Unsaid Talk — Git Analyzer Hackathon\n📜 Oddoxindus — Hackathon Participant\n📜 HackEnergy — Hackathon Participant\n📜 HackerRank — Hackathon Participant`
  },
  contact: {
    keywords: ['contact', 'email', 'hire', 'reach', 'connect', 'collaborate', 'collab', 'work together', 'message', 'social'],
    response: `✦ Want to connect with Dhamo? Here's how:\n\n📧 Email: pateldhamo0079@gmail.com\n📸 Instagram: @_dhamopatel_10\n💼 LinkedIn: linkedin.com/in/dhyey-patel-803528394\n\nHe's currently available for freelance projects and collaborations!`
  },
  education: {
    keywords: ['education', 'study', 'college', 'university', 'degree', 'btech', 'b.tech', 'student', 'school', 'academic'],
    response: `✦ Dhamo is currently pursuing his B.Tech in Computer Science & Engineering (Batch 2025–2029). He's in his first year but already shipping production-quality projects with modern web stacks. His academic journey is fueled by a deep passion for code and design.`
  },
  experience: {
    keywords: ['experience', 'intern', 'job', 'career', 'professional', 'working'],
    response: `✦ Dhamo is at the start of his professional journey as a first-year B.Tech student. While he doesn't have formal work experience yet, he's built 6 production-quality projects, earned 8 certifications, and placed 3rd in a hackathon — demonstrating real-world skills that go beyond academics.`
  },
  design: {
    keywords: ['design', 'figma', 'ui', 'ux', 'aesthetic', 'visual', 'interface', 'wireframe', 'prototype'],
    response: `✦ Dhamo's design philosophy: "Interfaces should feel alive." He designs in Figma first, then brings everything to life with code. His specialty is dark, editorial themes with gold accents, grain textures, and premium typography — think luxury meets tech. Every project starts with wireframes → high-fidelity mockups → coded prototype.`
  },
  github: {
    keywords: ['github', 'git', 'commit', 'repository', 'repo', 'code', 'open source', 'contribution'],
    response: `✦ Dhamo is active on GitHub with multiple repositories showcasing his work. From frontend clones to analytics dashboards, his commit history reflects consistent coding habits and a passion for clean, well-structured code. Check out his GitHub profile for the full picture!`
  },
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'sup', 'what\'s up', 'good morning', 'good evening', 'greetings', 'yo'],
    response: `Hey there! ✦ Welcome to Dhamo's portfolio. I'm his AI assistant — ask me anything about his skills, projects, certifications, or how to get in touch. What would you like to know?`
  },
  thanks: {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'nice'],
    response: `You're welcome! ✦ Glad I could help. Feel free to explore the portfolio or reach out to Dhamo directly at pateldhamo0079@gmail.com for collaborations!`
  },
  funny: {
    keywords: ['joke', 'funny', 'lol', 'haha', 'humor', 'laugh'],
    response: `✦ Why do frontend developers eat lunch alone? Because they don't know how to join tables! 😄\n\nBut seriously, Dhamo knows his way around CSS Grid AND Flexbox — he'd never let a layout break!`
  },
  anime: {
    keywords: ['anime', 'otaku', 'manga', 'naruto', 'one piece', 'demon slayer'],
    response: `✦ You found Dhamo's secret — he's also an Otaku! That's exactly why he built Otaku Verse, an immersive anime community hub. It combines his love for anime culture with his frontend skills. Check it out at otakuverse1.netlify.app!`
  },
}

function findAnswer(input) {
  const lower = input.toLowerCase().trim()

  // Check each knowledge category
  let bestMatch = null
  let bestScore = 0

  for (const [, data] of Object.entries(KNOWLEDGE)) {
    let score = 0
    for (const keyword of data.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length // Longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = data.response
    }
  }

  if (bestMatch) return bestMatch

  // Default fallback
  return `✦ Great question! While I might not have the exact answer, you can ask me about Dhamo's:\n\n• Skills & tech stack\n• Projects he's built\n• Certifications & hackathons\n• Education & background\n• Design process\n• How to hire/contact him\n\nOr reach out directly at pateldhamo0079@gmail.com!`
}

const SUGGESTIONS = ['Who is Dhamo?', 'View projects', 'Skills & tools', 'Hire Dhamo?', 'Certificates', 'Figma designs']

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hey there! ✦ I'm Dhamo's AI assistant. Ask me anything about his work, skills, projects, or how to collaborate!", time: getTime() }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showPing, setShowPing] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = async (text) => {
    if (!text.trim() || isTyping) return
    setShowSuggestions(false)
    setIsTyping(true)
    setInput('')

    const userMsg = { role: 'user', text, time: getTime() }
    setMessages(prev => [...prev, userMsg])

    // Simulate typing delay for natural feel
    const delay = Math.random() * 800 + 600
    await new Promise(resolve => setTimeout(resolve, delay))

    const reply = findAnswer(text)
    setMessages(prev => [...prev, { role: 'ai', text: reply, time: getTime() }])
    setIsTyping(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      <style>{`
        #ai-chat-btn {
          position:fixed; bottom:2.5rem; left:2.5rem; z-index:8000;
          width:60px; height:60px; border-radius:50%;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color:var(--ink); border:none; cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:1.4rem;
          box-shadow: 0 4px 24px rgba(201,169,110,.35);
          transition: transform .4s cubic-bezier(.25,1,.5,1), box-shadow .3s;
        }
        #ai-chat-btn:hover { transform:scale(1.12); box-shadow:0 8px 36px rgba(201,169,110,.5); }
        .chat-tooltip {
          position:absolute; left:72px; top:50%; transform:translateY(-50%);
          background:var(--card); border:1px solid var(--line); color:var(--cream);
          font-family:var(--ff-mono); font-size:.6rem; letter-spacing:.12em;
          text-transform:uppercase; padding:.4rem .9rem; white-space:nowrap;
          pointer-events:none; opacity:0; transition:opacity .3s;
        }
        #ai-chat-btn:hover .chat-tooltip { opacity:1; }
        .chat-ping {
          position:absolute; top:4px; right:4px; width:10px; height:10px;
          border-radius:50%; background:var(--gold2);
          animation: chatPing 2s ease-in-out infinite;
        }
        #ai-chat-panel {
          position:fixed; bottom:6.5rem; left:2.5rem; z-index:8001;
          width:min(400px, calc(100vw - 3rem)); height:540px;
          background:var(--card); border:1px solid rgba(201,169,110,.2);
          border-radius:12px; display:flex; flex-direction:column; overflow:hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(201,169,110,.05);
          transform:translateY(20px) scale(.96); opacity:0; pointer-events:none;
          transition: transform .4s cubic-bezier(.25,1,.5,1), opacity .4s;
        }
        #ai-chat-panel.open { transform:translateY(0) scale(1); opacity:1; pointer-events:auto; }
        .chat-header {
          padding:1.2rem 1.4rem; border-bottom:1px solid var(--line);
          display:flex; align-items:center; gap:.9rem;
          background:rgba(8,7,7,.6); backdrop-filter:blur(8px);
        }
        .chat-avatar {
          width:38px; height:38px; border-radius:50%;
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          display:flex; align-items:center; justify-content:center;
          color:var(--ink); font-size:.9rem; flex-shrink:0;
        }
        .chat-header-info { flex:1; }
        .chat-header-name { font-family:var(--ff-display); font-size:.95rem; font-weight:700; color:var(--cream); }
        .chat-header-status {
          font-family:var(--ff-mono); font-size:.55rem; letter-spacing:.12em;
          text-transform:uppercase; color:var(--gold);
          display:flex; align-items:center; gap:.35rem; margin-top:.15rem;
        }
        .chat-header-status::before {
          content:''; width:5px; height:5px; border-radius:50%; background:#4ade80;
          animation: livePulse 1.5s ease-in-out infinite;
        }
        .chat-close {
          width:28px; height:28px; border-radius:50%; border:1px solid var(--line);
          background:transparent; color:var(--muted); cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:.75rem;
          transition: border-color .3s, color .3s, background .3s;
        }
        .chat-close:hover { border-color:var(--gold); color:var(--gold); background:rgba(201,169,110,.08); }
        .chat-messages {
          flex:1; overflow-y:auto; padding:1.2rem;
          display:flex; flex-direction:column; gap:.9rem;
          scrollbar-width:thin; scrollbar-color:rgba(201,169,110,.3) transparent;
        }
        .chat-messages::-webkit-scrollbar { width:3px; }
        .chat-messages::-webkit-scrollbar-thumb { background:rgba(201,169,110,.3); border-radius:2px; }
        .chat-msg { display:flex; gap:.6rem; align-items:flex-end; animation: msgIn .35s cubic-bezier(.25,1,.5,1) both; }
        .chat-msg.user { flex-direction:row-reverse; }
        .msg-avatar {
          width:26px; height:26px; border-radius:50%; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:.6rem;
        }
        .msg-avatar.ai { background: linear-gradient(135deg, var(--gold), var(--gold2)); color:var(--ink); }
        .msg-avatar.user { background:rgba(255,255,255,.07); color:var(--muted); border:1px solid var(--line); }
        .msg-bubble { max-width:76%; padding:.75rem 1rem; border-radius:12px; font-size:.82rem; line-height:1.55; }
        .chat-msg.ai .msg-bubble { background:rgba(255,255,255,.05); border:1px solid var(--line); color:var(--cream); border-bottom-left-radius:3px; }
        .chat-msg.user .msg-bubble { background: linear-gradient(135deg,rgba(201,169,110,.18),rgba(232,201,138,.12)); border:1px solid rgba(201,169,110,.25); color:var(--cream); border-bottom-right-radius:3px; }
        .msg-time { font-family:var(--ff-mono); font-size:.5rem; color:var(--muted); margin-top:.3rem; opacity:.6; padding:0 .2rem; }
        .chat-msg.ai .msg-time { text-align:left; }
        .chat-msg.user .msg-time { text-align:right; }
        .typing-indicator { display:flex; gap:4px; align-items:center; padding:.75rem 1rem; }
        .typing-indicator span { width:6px; height:6px; border-radius:50%; background:var(--gold); animation:typingDot 1.2s ease-in-out infinite; }
        .typing-indicator span:nth-child(2) { animation-delay:.2s; }
        .typing-indicator span:nth-child(3) { animation-delay:.4s; }
        .chat-input-area {
          padding:1rem; border-top:1px solid var(--line);
          display:flex; gap:.6rem; align-items:flex-end;
          background:rgba(8,7,7,.5);
        }
        #chat-input {
          flex:1; background:rgba(255,255,255,.04); border:1px solid var(--line);
          color:var(--cream); font-family:var(--ff-body); font-size:.82rem;
          padding:.7rem .9rem; outline:none; resize:none; border-radius:8px;
          transition:border-color .3s; max-height:100px; min-height:38px;
        }
        #chat-input:focus { border-color:rgba(201,169,110,.4); }
        #chat-input::placeholder { color:var(--muted); }
        #chat-send {
          width:38px; height:38px; border-radius:50%; background:var(--gold);
          color:var(--ink); border:none; cursor:none;
          display:flex; align-items:center; justify-content:center; font-size:.85rem;
          transition:background .3s, transform .2s; flex-shrink:0;
        }
        #chat-send:hover { background:var(--gold2); transform:scale(1.08); }
        #chat-send:disabled { opacity:.4; transform:none; }
        .chat-suggestions { padding:.5rem 1rem 0; display:flex; flex-wrap:wrap; gap:.4rem; }
        .suggestion-chip {
          font-family:var(--ff-mono); font-size:.58rem; letter-spacing:.08em;
          text-transform:uppercase; color:var(--gold);
          border:1px solid rgba(201,169,110,.25); padding:.3rem .65rem;
          border-radius:20px; cursor:none; transition:background .3s, border-color .3s;
          background:transparent;
        }
        .suggestion-chip:hover { background:rgba(201,169,110,.1); border-color:rgba(201,169,110,.5); }
        .chat-powered {
          text-align:center; padding:.4rem; border-top:1px solid var(--line);
          font-family:var(--ff-mono); font-size:.45rem; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(201,169,110,.3);
        }
        @media(max-width:768px){
          #ai-chat-panel { left:1rem; bottom:5.5rem; width:calc(100vw - 2rem); }
          #ai-chat-btn { left:1.2rem; bottom:1.2rem; cursor:auto; }
          #chat-send { cursor:auto; }
          .chat-close { cursor:auto; }
          .suggestion-chip { cursor:auto; }
        }
      `}</style>

      {/* Toggle Button */}
      <button id="ai-chat-btn" onClick={() => { setOpen(o => !o); setShowPing(false) }} aria-label="Open AI Assistant">
        <span className="chat-tooltip">Ask Dhamo's AI</span>
        <i className="fas fa-comment-dots" />
        {showPing && <span className="chat-ping" />}
      </button>

      {/* Chat Panel */}
      <div id="ai-chat-panel" className={open ? 'open' : ''} role="dialog" aria-label="AI Chat Assistant">
        <div className="chat-header">
          <div className="chat-avatar"><i className="fas fa-robot" /></div>
          <div className="chat-header-info">
            <div className="chat-header-name">Dhamo's AI</div>
            <div className="chat-header-status">Online · Ready to help</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
            <i className="fas fa-times" />
          </button>
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={() => sendMessage(s)}>{s}</button>
            ))}
          </div>
        )}

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              <div className={`msg-avatar ${msg.role}`}>
                <i className={msg.role === 'ai' ? 'fas fa-robot' : 'fas fa-user'} />
              </div>
              <div>
                <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                <div className="msg-time">{msg.time}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg ai">
              <div className="msg-avatar ai"><i className="fas fa-robot" /></div>
              <div className="msg-bubble" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid var(--line)' }}>
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <textarea
            id="chat-input"
            ref={inputRef}
            placeholder="Ask me anything..."
            rows="1"
            maxLength="1000"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            style={{ height: 'auto' }}
            onInput={e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px' }}
          />
          <button id="chat-send" onClick={() => sendMessage(input)} disabled={isTyping} aria-label="Send">
            <i className="fas fa-paper-plane" />
          </button>
        </div>
        <div className="chat-powered">✦ Powered by Local AI Knowledge Base</div>
      </div>
    </>
  )
}
