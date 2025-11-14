import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Cpu, Coins, ExternalLink, Sparkles } from 'lucide-react'

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-gray-900 text-lg sm:text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-emerald-500 bg-clip-text text-transparent">Your.Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#crypto" className="hover:text-gray-900 transition-colors">Crypto</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" aria-label="GitHub" className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors border border-white/40">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors border border-white/40">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors border border-white/40">
            <Twitter className="h-5 w-5" />
          </a>
          <button className="md:hidden p-2 rounded-lg border border-white/40 bg-white/50">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" /> Available for freelance & collaborations
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Software Engineer • Vibe Coder • Crypto Trader
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-700">
          I design and build delightful, performant products end‑to‑end — from robust APIs to slick, animated interfaces. On-chain curious and data‑driven with an eye for clean, modern aesthetics.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition-shadow">
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/70 backdrop-blur border border-white/60 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-50/60 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Hello, I’m Your Name</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A product‑minded engineer blending clean code with elegant visuals. I’ve shipped scalable backends, crafted immersive UIs, and experimented with algorithmic trading and on‑chain analytics.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Code2 className="h-4 w-4 text-gray-900" /> Full‑stack Web Apps</li>
              <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-gray-900" /> Systems & Automation</li>
              <li className="flex items-center gap-2"><Coins className="h-4 w-4 text-gray-900" /> Markets & Crypto</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gray-900" /> Motion & Micro‑interactions</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                ['React', 'UI/SPA'],
                ['Node/Python', 'APIs'],
                ['FastAPI', 'Backends'],
                ['MongoDB', 'Data'],
                ['Tailwind', 'Design'],
                ['TradingView', 'Signals'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm font-semibold text-gray-900">{k}</p>
                  <p className="text-xs text-gray-600">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Algo Signals Dashboard',
      desc: 'Realtime trading signals, risk metrics, and portfolio overlays.',
      link: '#',
      tags: ['React', 'WebSockets', 'Tailwind']
    },
    {
      title: 'AI Vibe Components',
      desc: 'Animated UI kit powered by Framer Motion and Radix.',
      link: '#',
      tags: ['Framer Motion', 'Radix', 'Design']
    },
    {
      title: 'Crypto Insights API',
      desc: 'FastAPI service aggregating on‑chain + market data.',
      link: '#',
      tags: ['FastAPI', 'MongoDB', 'ETL']
    }
  ]
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Selected Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] rounded-full bg-gray-100 text-gray-700 px-2 py-1 border border-gray-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Crypto() {
  return (
    <section id="crypto" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-fuchsia-50/60 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900">Crypto & Markets</h2>
          </div>
          <p className="mt-3 text-gray-700">
            Active in BTC/ETH majors and select alts. I build data tooling to test ideas, manage risk, and visualize edge. Open to collabs on strategy research and on‑chain analytics.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              ['Focus', 'Trend + Momentum'],
              ['Stack', 'Python, FastAPI, Mongo, Pinescript'],
              ['Interests', 'On‑chain flows, perp funding, L2 infra']
            ].map(([k,v]) => (
              <div key={k} className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500">{k}</p>
                <p className="text-sm font-semibold text-gray-900">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Let’s build something</h2>
          <p className="mt-2 text-gray-700">DMs open. Reach out for freelance, collabs, or just to say hi.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold">
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a href="https://linkedin.com/" className="inline-flex items-center gap-2 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with love, motion, and clean code.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <Hero />
      <About />
      <section id="skills" className="py-1" />
      <Projects />
      <Crypto />
      <Contact />
      <Footer />
    </div>
  )
}
