import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, GitBranch, Mail, Phone,
  MapPin, Menu, X, Sun, Moon, Code2, Monitor, Server, Database, Cloud, Cpu, Layers,
  ExternalLink, Download, Sparkles, Send, CheckCircle2, BriefcaseBusiness, GraduationCap,
  Award, Terminal, Globe2, ChevronRight, BookOpen, Headphones
} from 'lucide-react'
import { profile, skillGroups, projects, education, certifications } from './data/portfolio'

const iconMap = { code: Code2, monitor: Monitor, server: Server, database: Database, cloud: Cloud, cpu: Cpu, layers: Layers }
const serviceAreas = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    image: '/images/services/frontend.svg',
    description: 'The pages and controls people see and use.',
    explanation: 'Frontend is the visible part of a website: its pages, buttons, forms, and menus. I build these with React and make them easy to use on phones and computers.',
    examples: ['Building page layouts and reusable parts', 'Making buttons, forms, and menus clear to use', 'Making the layout fit mobile, tablet, and desktop']
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    image: '/images/services/backend.svg',
    description: 'The behind-the-scenes part that handles requests and rules.',
    explanation: 'Backend code works behind the screen. It receives information from the website, checks what should happen, handles sign-in, and sends a result back.',
    examples: ['Creating APIs that pass information between parts of an app', 'Checking sign-in and protecting user accounts', 'Handling app rules and returning useful responses']
  },
  {
    icon: Database,
    title: 'Database Design',
    image: '/images/services/database.svg',
    description: 'A well-organized place for an app to save information.',
    explanation: 'A database is like a digital filing system. It keeps information organized so an app can save it, find it, change it, or remove it when needed.',
    examples: ['Saving accounts, projects, and other app information', 'Choosing a clear structure for saved information', 'Finding and updating information when the app needs it']
  },
  {
    icon: Cloud,
    title: 'Integration & Deployment',
    image: '/images/services/integration.svg',
    description: 'Connecting app services and putting the finished app online.',
    explanation: 'Integration connects the website to its server, database, or outside services so they work together. Deployment puts the finished app online for people to use.',
    examples: ['Connecting a website to APIs and other services', 'Adding real-time features and Git workflows', 'Deploying apps to cloud platforms']
  }
]
const careerGoals = [
  {
    term: 'SHORT-TERM GOAL',
    title: 'Start strong and keep learning',
    image: '/images/short-term-goal.svg',
    summary: 'My short-term goal is to start my career in a good organization where I can apply my skills, learn from experienced professionals, and improve my technical and professional skills. I want to perform well in my role and become a valuable member of the team.',
    focus: [
      'Start my career in a good organization',
      'Apply my skills and learn from experienced professionals',
      'Improve my technical and professional skills',
      'Perform well and become a valuable team member'
    ]
  },
  {
    term: 'LONG-TERM GOAL',
    title: 'Grow into a skilled leader',
    image: '/images/long-term-goal.svg',
    summary: "My long-term goal is to grow into a skilled professional by continuously learning and taking on new responsibilities. I want to build a successful career, contribute to the company's growth, and eventually reach a leadership position through my hard work, dedication, and experience.",
    focus: [
      'Keep learning and take on new responsibilities',
      'Build a successful career and contribute to company growth',
      'Work toward a leadership role through hard work, dedication, and experience'
    ]
  }
]
const hobbies = [
  {
    category: 'LISTENING TO PODCASTS',
    title: 'Listening to Podcasts',
    subtitle: "Raj Shamani's Figuring Out",
    icon: Headphones,
    image: '/images/hobbies/podcasts.svg',
    description: "I enjoy listening to Raj Shamani's podcast, Figuring Out, where he invites successful and well-known personalities from different industries and professions. I love discovering people who have deep knowledge and experience in their respective fields. Their stories and conversations help me understand how successful people think, approach challenges, solve problems, and deal with failures. It also gives me an opportunity to learn about different industries, explore new ideas, and gain knowledge from people who have achieved great things in their careers. These conversations inspire me to keep learning and growing, both personally and professionally."
  },
  {
    category: 'READING BOOKS',
    title: 'Reading Books',
    subtitle: 'Personal Growth & Human Behaviour',
    icon: BookOpen,
    image: '/images/hobbies/reading.svg',
    description: "I enjoy reading books that focus on personal growth, human behaviour, life lessons, and positive thinking. I like books that teach me how to understand life better, develop a healthy thought process, and stay calm during difficult situations. I am especially interested in learning how to handle challenges, make thoughtful decisions, and respond wisely instead of reacting emotionally. I also enjoy reading about human psychology, understanding people's behaviour, building better relationships, and learning how to treat others with kindness and respect. For me, reading is a way to understand myself and others better and learn how to live a happy, balanced, and peaceful life."
  }
]
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: 'easeOut' } } }
const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: .12 }, variants: fadeUp }

function SectionTitle({ eyebrow, title, text }) {
  return <motion.div className="section-title" {...reveal}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedSkillGroup, setSelectedSkillGroup] = useState(null)
  const [selectedGoal, setSelectedGoal] = useState(null)
  const [selectedHobby, setSelectedHobby] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const SkillGroupIcon = selectedSkillGroup ? iconMap[selectedSkillGroup.icon] : null
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Beyond Work', '#hobbies'], ['Contact', '#contact']]
  const scrollTo = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  async function submitContact(e) {
    e.preventDefault(); setSending(true); setError(''); setSent(false)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setSent(true); setForm({ name: '', email: '', message: '' })
    } catch (err) { setError(err.message || 'Unable to send. Please email me directly.') }
    finally { setSending(false) }
  }

  return <div className={dark ? 'app dark' : 'app light'}>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">S.</span><span>SUHANI<span className="brand-muted"> MAURYA</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {nav.map(([label, href]) => <a key={href} className={href === '#hobbies' ? 'nav-beyond-work' : undefined} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#goals" onClick={() => setMenuOpen(false)}>My Goals <ArrowUpRight size={14}/></a>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="icon-btn menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>HELLO, I'M SUHANI MAURYA</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}>Building ideas<br/>into <span className="gradient-text">digital reality.</span></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>{profile.intro}</motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
            <a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="btn btn-ghost" href={profile.resume} download><Download size={16}/> Download resume</a>
          </motion.div>
          <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17}/> LinkedIn</a><span><MapPin size={16}/> {profile.location}</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .3 }}>
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="window-lock">●</span></div>
            <div className="code-content">
              <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
              <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Suhani'</span>,</div>
              <div><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="code-green">'Full Stack Dev'</span>,</div>
              <div><span className="line-no">04</span>&nbsp;&nbsp;stack: [</div>
              <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">'React'</span>, <span className="code-orange">'Node.js'</span>,</div>
              <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">'MongoDB'</span>, <span className="code-orange">'Express'</span></div>
              <div><span className="line-no">07</span>&nbsp;&nbsp;],</div>
              <div><span className="line-no">08</span>&nbsp;&nbsp;mindset: <span className="code-green">'Always learning'</span></div>
              <div><span className="line-no">09</span>{'}'};</div>
              <div className="code-cursor"><span className="line-no">10</span><span className="cursor-block"/></div>
            </div>
            <div className="window-footer"><span><span className="status-dot"/> Available for opportunities</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
          </div>
          <div className="float-chip chip-react"><span>⚛</span> React.js</div>
          <div className="float-chip chip-node"><span>⬡</span> Node.js</div>
          <div className="float-chip chip-mongo"><span>◈</span> MongoDB</div>
          <div className="hero-orb"><Sparkles size={21}/></div>
        </motion.div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="about section-wrap" id="about">
        <SectionTitle eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets <span className="gradient-text">creation.</span></>} text="I enjoy solving problems, learning new technologies and creating digital products that make a difference."/>
        <div className="about-grid">
          <motion.div className="about-main glass-card" {...reveal}>
            <span className="card-index">01 / ABOUT</span><h3>More than just writing code.</h3>
            <p>I'm a developer who loves the process of turning complex ideas into simple, useful experiences. My work spans the full stack — from crafting intuitive interfaces to designing backend logic, APIs and database structures.</p>
            <p>Currently pursuing my MCA at G.L. Bajaj Institute of Technology and Management, while building projects that strengthen my skills in modern web development. I'm also an SAP Certified Back-End Developer with an interest in enterprise technologies.</p>
            <div className="about-tags"><span>Problem solver</span><span>Continuous learner</span><span>Product mindset</span></div>
          </motion.div>
          <motion.figure className="about-portrait glass-card" {...reveal}>
            <img src="/images/suhani-profile.jpeg" alt="Suhani Maurya standing outside G.L. Bajaj Institute of Technology and Management" loading="lazy" decoding="async"/>
            <figcaption><strong>Suhani Maurya</strong><span>Developer · MCA Student</span></figcaption>
          </motion.figure>
          <motion.div className="about-side" {...reveal}>
            <div className="mini-stat glass-card"><span className="stat-icon"><Code2/></span><strong>5+</strong><span>Featured projects</span></div>
            <div className="mini-stat glass-card"><span className="stat-icon"><GraduationCap/></span><strong>MCA</strong><span>Postgraduate studies</span></div>
            <div className="mini-stat glass-card"><span className="stat-icon"><Award/></span><strong>4</strong><span>Certifications listed</span></div>
          </motion.div>
        </div>
      </section>

      <section className="skills section-wrap" id="skills">
        <SectionTitle eyebrow="MY TOOLKIT" title={<>Technologies I <span className="gradient-text">work with.</span></>} text="A growing toolkit for building complete, reliable and scalable applications."/>
        <div className="skills-grid">
          {skillGroups.map((group, i) => { const Icon = iconMap[group.icon]; return <motion.div className="skill-card glass-card" key={group.title} {...reveal} transition={{ delay: i * .06 }} role="button" tabIndex={0} aria-label={`Learn about ${group.title} skills`} onClick={() => setSelectedSkillGroup(group)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedSkillGroup(group) } }}>
            <div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><img className="skill-illustration" src={group.image} alt="" loading="lazy" decoding="async"/><span className="card-index">0{i+1}</span></div>
            <h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
          </motion.div> })}
        </div>
      </section>

      <section className="services section-wrap">
        <SectionTitle eyebrow="WHAT I BRING" title={<>From concept to <span className="gradient-text">deployment.</span></>} text="The areas where I can contribute to a product and development team."/>
        <div className="services-grid">
          {serviceAreas.map(({ icon: Icon, title, description, image }, i) => <motion.div className="service-item" key={title} {...reveal} role="button" tabIndex={0} aria-label={`Learn about ${title}`} onClick={() => setSelectedService(serviceAreas[i])} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedService(serviceAreas[i]) } }}>
            <span className="service-icon"><Icon/></span><div className="service-copy"><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{description}</p></div><img className="service-illustration" src={image} alt="" loading="lazy" decoding="async"/><ArrowUpRight className="service-arrow"/>
          </motion.div>)}
        </div>
      </section>

      <section className="projects section-wrap" id="projects">
        <SectionTitle eyebrow="SELECTED WORK" title={<>Things I've <span className="gradient-text">built.</span></>} text="A selection of projects where ideas became working applications. Select a project to explore the details."/>
        <div className="project-list">
          {projects.map((project, i) => <motion.article className="project-card" key={project.name} {...reveal} role="button" tabIndex={0} aria-label={`View ${project.name} details`} onClick={() => setSelected(project)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(project) } }}>
            <div className="project-number">{project.number}</div>
            <img className="project-image" src={project.image} alt={`${project.name} project illustration`} loading="lazy" decoding="async"/>
            <div className="project-info"><span className="eyebrow">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.slice(0, 5).map(s => <span key={s}>{s}</span>)}</div></div>
            <div className="project-side"><span className="project-period">{project.period}</span><span className="round-link" aria-hidden="true"><ArrowUpRight/></span></div>
          </motion.article>)}
        </div>
        <p className="project-note"><Terminal size={15}/> More code and experiments on <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></p>
      </section>

      <section className="journey section-wrap" id="journey">
        <SectionTitle eyebrow="THE JOURNEY" title={<>Learning, building, <span className="gradient-text">growing.</span></>} text="The academic foundation and certifications behind my development journey."/>
        <div className="journey-grid">
          <div><div className="subsection-heading"><GraduationCap/><h3>Education</h3></div><div className="timeline">
            {education.map((item, i) => <motion.div className="timeline-item" key={item.degree} {...reveal}><span className="timeline-dot"/><span className="timeline-date">{item.years}</span><h4>{item.degree}</h4><p>{item.institute}</p><span className="timeline-score">{item.score}</span></motion.div>)}
          </div></div>
          <div><div className="subsection-heading"><Award/><h3>Certifications</h3></div><div className="cert-list">
            {certifications.map((item, i) => {
              const Card = item.url ? motion.a : motion.div
              return <Card className={`cert-card glass-card${item.url ? ' cert-card-link' : ''}`} key={item.name} {...reveal} transition={{ delay: i * .06 }} href={item.url} target={item.url ? '_blank' : undefined} rel={item.url ? 'noreferrer' : undefined} aria-label={item.url ? `Open ${item.name} certificate` : undefined}>
                <div className="cert-top"><span className="cert-icon"><Award size={17}/></span><span>{item.date}{item.url && <ExternalLink size={12}/>}</span></div><h4>{item.name}</h4><p className="cert-issuer">{item.issuer}</p><p>{item.note}</p>
              </Card>
            })}
          </div></div>
        </div>
      </section>

      <section className="goals section-wrap" id="goals">
        <SectionTitle eyebrow="MY CAREER GOALS" title={<>Focused on learning, <span className="gradient-text">growing.</span></>} text="The next steps I’m working toward in my career."/>
        <div className="goals-grid">
          {careerGoals.map((goal, i) => <motion.article className="goal-card glass-card" key={goal.term} {...reveal} role="button" tabIndex={0} aria-label={`Read ${goal.term.toLowerCase()}`} onClick={() => setSelectedGoal(goal)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedGoal(goal) } }}>
            <div className="goal-card-image"><img src={goal.image} alt=""/></div>
            <div className="goal-card-content"><span className="eyebrow">{goal.term}</span><h3>{goal.title}</h3><span className="goal-card-prompt">Click to explore</span></div>
          </motion.article>)}
        </div>
      </section>

      <section className="hobbies section-wrap" id="hobbies">
        <SectionTitle eyebrow="LIFE BEYOND WORK" title={<>What I enjoy <span className="gradient-text">exploring.</span></>} text="A few things that help me keep learning, growing and seeing the world from new perspectives."/>
        <div className="hobbies-grid">
          {hobbies.map((hobby, i) => { const Icon = hobby.icon; return <motion.article className="hobby-card glass-card" key={hobby.title} {...reveal} transition={{ delay: i * .08 }} role="button" tabIndex={0} aria-label={`Read about ${hobby.title}`} aria-haspopup="dialog" onClick={() => setSelectedHobby(hobby)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedHobby(hobby) } }}>
            <div className="hobby-image"><img src={hobby.image} alt="" loading="lazy" decoding="async"/><span className="hobby-image-icon"><Icon size={20}/></span></div>
            <div className="hobby-preview"><span className="eyebrow">{hobby.category}</span><h3>{hobby.title}</h3><span className="hobby-subtitle">{hobby.subtitle}</span><span className="hobby-open">Click to read more <ArrowUpRight size={14}/></span></div>
          </motion.article> })}
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-copy"><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's build something <span className="gradient-text">meaningful.</span></h2><p>I'm open to opportunities, collaborations and conversations about technology. Have an idea or a role in mind? I'd love to hear from you.</p>
              <div className="contact-links"><a href={emailComposeUrl} target="_blank" rel="noreferrer"><Mail size={17}/>{profile.email}<ArrowUpRight size={14}/></a><a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={17}/>{profile.phone}<ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17}/>LinkedIn profile<ArrowUpRight size={14}/></a></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <label>Your name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Jane Smith"/></label>
            <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="jane@example.com"/></label>
            <label>Your message<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me a little about what you have in mind..."/></label>
            <button className="btn btn-primary submit-btn" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <Send size={16}/></button>
            {sent && <p className="form-success"><CheckCircle2 size={16}/> Message received. Thank you!</p>}
            {error && <p className="form-error">{error} You can email me directly instead.</p>}
          </form>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SUHANI<span className="brand-muted"> MAURYA</span></span></a><span>Designed & built with curiosity <span className="heart">♥</span></span><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer"><GitBranch/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness/></a><a href={emailComposeUrl} target="_blank" rel="noreferrer" aria-label="Email Suhani"><Mail/></a></div><span className="copyright">© {new Date().getFullYear()} Suhani Maurya</span></footer>

    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelected(null)}>
      <motion.div className={`project-modal glass-card${selected.stackGroups ? ' project-modal-featured' : ''}`} initial={{opacity:0, y:30, scale:.97}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:20}} onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" onClick={() => setSelected(null)}><X/></button>
        <span className="eyebrow">{selected.category} · {selected.period}</span><h2>{selected.name}</h2><p className="modal-description">{selected.details}</p>
        <h4 className="modal-section-title">🔹 What it can do</h4><ul className="modal-feature-list">{selected.highlights.map(h => <li key={h}><ChevronRight size={15}/>{h}</li>)}</ul>
        {selected.stackGroups ? <div className="modal-stack-groups">{selected.stackGroups.map(group => <section className="modal-stack-group" key={group.title}><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item}><ChevronRight size={15}/>{item}</li>)}</ul></section>)}</div> : <><h4>Technology stack</h4><div className="project-stack modal-stack">{selected.stack.map(s => <span key={s}>{s}</span>)}</div></>}
        {selected.futureEnhancements && <><h4 className="modal-section-title">💠 Future Enhancements</h4><ul className="modal-feature-list">{selected.futureEnhancements.map(item => <li key={item}><ChevronRight size={15}/>{item}</li>)}</ul></>}
        <div className="modal-actions"><a className="btn btn-primary" href={selected.github} target="_blank" rel="noreferrer"><GitBranch size={16}/> {selected.githubLabel || 'GitHub profile'} <ArrowUpRight size={15}/></a>{selected.live && <a className="btn btn-primary" href={selected.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>}</div>
      </motion.div>
    </motion.div>}</AnimatePresence>
    <AnimatePresence>{selectedService && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedService(null)}>
      <motion.div className="service-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" initial={{opacity:0, y:30, scale:.97}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:20}} onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" aria-label="Close service details" onClick={() => setSelectedService(null)}><X/></button>
        <div className="service-modal-heading"><span className="service-icon"><selectedService.icon/></span><div><span className="eyebrow">IN SIMPLE WORDS</span><h2 id="service-modal-title">{selectedService.title}</h2></div></div>
        <p className="service-modal-explanation">{selectedService.explanation}</p>
        <h3>What it includes</h3>
        <ul className="service-modal-list">{selectedService.examples.map(example => <li key={example}><ChevronRight size={16}/>{example}</li>)}</ul>
      </motion.div>
    </motion.div>}</AnimatePresence>
    <AnimatePresence>{selectedSkillGroup && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedSkillGroup(null)}>
      <motion.div className="service-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title" initial={{opacity:0, y:30, scale:.97}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:20}} onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" aria-label="Close skill details" onClick={() => setSelectedSkillGroup(null)}><X/></button>
        <div className="service-modal-heading"><span className="service-icon">{SkillGroupIcon && <SkillGroupIcon/>}</span><div><span className="eyebrow">IN SIMPLE WORDS</span><h2 id="skill-modal-title">{selectedSkillGroup.title}</h2></div></div>
        <p className="service-modal-explanation">{selectedSkillGroup.summary}</p>
        <h3>What each one means</h3>
        <ul className="skill-explanation-list">{selectedSkillGroup.items.map(item => <li key={item}><div><strong>{item}</strong><p>{selectedSkillGroup.explanations[item]}</p></div></li>)}</ul>
      </motion.div>
    </motion.div>}</AnimatePresence>
    <AnimatePresence>{selectedGoal && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedGoal(null)}>
      <motion.div className="goal-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="goal-modal-title" initial={{opacity:0, y:30, scale:.97}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:20}} onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" aria-label="Close goal details" onClick={() => setSelectedGoal(null)}><X/></button>
        <div className="goal-modal-hero"><img src={selectedGoal.image} alt=""/><span className="goal-modal-label">{selectedGoal.term}</span></div>
        <div className="goal-modal-content"><span className="eyebrow">MY CAREER PLAN</span><h2 id="goal-modal-title">{selectedGoal.title}</h2>
          <p className="goal-modal-summary">{selectedGoal.summary}</p>
          <h3>What I’m focusing on</h3>
          <div className="goal-focus-grid">{selectedGoal.focus.map((point, i) => <div className="goal-focus-item" key={point}><span>{String(i + 1).padStart(2, '0')}</span><p>{point}</p></div>)}</div>
        </div>
      </motion.div>
    </motion.div>}</AnimatePresence>
    <AnimatePresence>{selectedHobby && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedHobby(null)}>
      <motion.div className="hobby-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="hobby-modal-title" initial={{opacity:0, y:30, scale:.97}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:20}} onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" aria-label="Close hobby details" onClick={() => setSelectedHobby(null)}><X/></button>
        <div className="hobby-modal-image"><img src={selectedHobby.image} alt=""/><span className="goal-modal-label">{selectedHobby.category}</span></div>
        <div className="hobby-modal-content"><span className="eyebrow">LIFE BEYOND WORK</span><h2 id="hobby-modal-title">{selectedHobby.title}</h2><span className="hobby-subtitle">{selectedHobby.subtitle}</span><p>{selectedHobby.description}</p></div>
      </motion.div>
    </motion.div>}</AnimatePresence>
    <a href="#home" className="back-top" aria-label="Back to top"><ArrowDownRight size={18}/></a>
  </div>
}

export default App
