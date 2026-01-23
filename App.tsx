
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight,
  Users,
  Bot,
  Settings
} from 'lucide-react';


const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<{ title: string; desc: string } | null>(null);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white cursor-auto overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center px-6 md:px-10 py-5 bg-white text-black border-b border-black/10">
        <button
          onClick={() => scrollToSection('home')}
          className="font-heading text-base md:text-lg font-bold tracking-tight uppercase text-black bg-transparent border-none cursor-pointer"
          data-hover="true"
        >
          HOME
        </button>
        
        <div className="ml-auto hidden md:flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-black shadow-[0_10px_24px_rgba(0,0,0,0.2)]" aria-hidden="true" />
          {[
            { label: 'ABOUT US', id: 'philosophy' },
            { label: 'TOOLS', id: 'whatwedo' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button 
              key={item.label} 
              onClick={() => scrollToSection(item.id)}
              className="text-[11px] font-bold tracking-[0.35em] uppercase text-black/80 hover:text-black transition-colors bg-transparent border-none"
              data-hover="true"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-black z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden text-black"
          >
            {[
              { label: 'ABOUT US', id: 'philosophy' },
              { label: 'TOOLS', id: 'whatwedo' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl font-heading font-bold text-black hover:text-black/60 transition-colors uppercase bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header id="home" className="relative h-[100svh] min-h-[520px] flex flex-col items-center justify-center overflow-hidden px-4 bg-white text-black">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-4 md:pb-3 pt-10 md:pt-12"
        >
          <div className="relative w-full flex justify-center items-center px-4">
            <h1 className="inline-flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
              <span className="text-black font-heading font-black uppercase tracking-tighter leading-none text-[clamp(48px,18vw,180px)]">
                IWILL
              </span>
              <span className="bg-black text-white font-heading font-black uppercase tracking-tighter leading-none px-4 py-2 md:px-8 md:py-4 text-[clamp(48px,18vw,180px)]">
                MEDIA
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-10 text-2xl md:text-4xl font-heading font-bold tracking-[0.3em] uppercase text-black/80"
          >
            Artificial Intelligence for Real Businesses
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-6 text-[11px] md:text-sm font-heading uppercase text-black/70 max-w-4xl leading-relaxed"
          >
            If you run a business, you know the pressures of calls going unanswered, enquiries coming in after hours, leads slipping through the cracks. Admin work piles up and every new piece of software promises to fix it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-4 text-[11px] md:text-sm font-heading uppercase text-black/70 max-w-4xl leading-relaxed"
          >
            iWillMedia is here to change that. We build practical AI systems that take care of the work that slows your business down. Our tools answer calls, handle enquiries, follow up leads, book calendars, and support everyday decisions — reliably, calmly, and without fuss.
          </motion.p>
        </motion.div>
      </header>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="relative z-10 py-24 md:py-32 bg-black border-t border-white/10 overflow-hidden text-white">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight text-white mb-6">ABOUT US</div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-[0.3em] leading-tight">
                Quiet<br />Solutions.<br />Loud Results.
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
              <img
                src="/assets/hands dirty chippy.png"
                alt="Hands at work"
                className="w-full max-w-md rounded-sm border border-white/20 object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <div className="h-px w-44 bg-white mb-4" />
              <h3 className="text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-white mb-3">
                WE WORK THE WAY YOU DO
              </h3>
              <p className="text-sm uppercase text-white/60 leading-relaxed whitespace-pre-line">
                IWILLMEDIA IS BUILT FOR BUSINESSES THAT VALUE CLARITY, RELIABILITY, AND GETTING THINGS DONE. WE WORK WITH SMALL AND MEDIUM BUSINESSES BECAUSE WE ARE ONE.

                WE UNDERSTAND WHAT IT’S LIKE TO RUN LEAN, MAKE PRACTICAL DECISIONS, AND CHOOSE TOOLS BASED ON WHETHER THEY WORK — NOT HOW IMPRESSIVE THEY SOUND. THAT’S HOW WE APPROACH EVERYTHING WE BUILD.
              </p>
              <div className="mt-6">
                <img
                  src="/assets/office black and white.png"
                  alt="Office in black and white"
                  className="w-full max-w-md rounded-sm border border-white/20 object-cover"
                />
              </div>
            </div>
            <div>
              <div className="h-px w-44 bg-white mb-4" />
              <h3 className="text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-white mb-3">
                AI DESIGNED TO MAKE BUSINESS EASIER
              </h3>
              <p className="text-sm uppercase text-white/60 leading-relaxed whitespace-pre-line">
                EVERYTHING WE CREATE IS DESIGNED TO BE CLEAR AND DEPENDABLE. YOU’LL UNDERSTAND WHAT THE SYSTEM IS DOING, WHY IT’S DOING IT, AND HOW IT FITS INTO YOUR BUSINESS. WE AVOID BLACK-BOX AUTOMATION BECAUSE BUSINESSES NEED CONFIDENCE AND CONTROL — NOT MYSTERY.

                WE TAKE A PRAGMATIC APPROACH TO TECHNOLOGY. IF A PROBLEM CAN BE SOLVED WITH A SIMPLE, RELIABLE SYSTEM, THAT’S THE SYSTEM WE BUILD. WE DON’T OVERCOMPLICATE THINGS OR PUSH UNNECESSARY FEATURES. OUR FOCUS IS ON TOOLS THAT REDUCE FRICTION, SAVE TIME, AND KEEP WORKING QUIETLY IN THE BACKGROUND.

                MOST OF OUR CLIENTS DON’T WANT “AI TRANSFORMATION.” THEY WANT FEWER MISSED CALLS, FASTER FOLLOW-UPS, SMOOTHER WORKFLOWS, AND LESS ADMIN. THAT’S EXACTLY WHAT WE DELIVER.

                AT IWILLMEDIA, AI ISN’T ABOUT REPLACING PEOPLE OR CHANGING HOW YOU RUN YOUR BUSINESS. IT’S ABOUT SUPPORTING THE WAY YOU ALREADY WORK — AND MAKING IT EASIER.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="text-lg md:text-2xl font-heading font-bold uppercase tracking-[0.2em] text-white mb-6">
              Our AI Partners
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-6 gap-y-8 text-white/70 text-sm md:text-base font-heading uppercase tracking-[0.25em]">
              {[
                { name: 'OpenAI', src: '/assets/OpenAI-Logo-white-transparent.png' },
                { name: 'Gemini', src: '/assets/Google_Gemini_logo.png' },
                { name: 'Copilot', src: '/assets/Microsoft-Copilot-Logo-PNG.png' },
                { name: 'Claude', src: '/assets/Claude_AI_logo..png' },
                { name: 'ElevenLabs', src: '/assets/elevenlabs-logo-black.png' },
              ].map((partner) => (
                <div key={partner.name} className="px-4 py-3 text-center">
                  {partner.src ? (
                    <img
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      className={`h-14 sm:h-16 md:h-12 w-auto object-contain ${partner.name === 'ElevenLabs' ? 'invert' : ''}`}
                    />
                  ) : (
                    partner.name
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section id="whatwedo" className="relative z-10 py-24 md:py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight">Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { label: '', title: 'AI AGENTS', sub: 'LOGIC SYSTEMS', icon: Users, offset: '-mt-2', desc: 'Placeholder text.' },
              { label: '', title: 'AI BOTS', sub: 'QUIET OPS', icon: Bot, offset: '-mt-2', desc: 'Placeholder text.' },
              { label: '', title: 'AI AUTOMATION', sub: 'ARCHITECTURE', icon: Settings, offset: '', desc: 'Placeholder text.' },
            ].map((card) => (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveTool({ title: card.title, desc: card.desc })}
                className="relative bg-white text-black min-h-[280px] md:min-h-[340px] pl-6 pr-12 py-8 md:pl-8 md:pr-16 md:py-10 border border-black/60 shadow-[0_12px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between text-left hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-shadow"
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.35em] text-black/40">
                  {card.title === 'AI AGENTS' || card.title === 'AI BOTS' || card.title === 'AI AUTOMATION' ? (
                    <div className="h-12 w-12 flex items-start justify-start">
                      <card.icon className="h-12 w-12 text-black/70" aria-hidden="true" />
                    </div>
                  ) : (
                    <span>{card.label}</span>
                  )}
                  <span className="p-1 text-black/30">
                    <ArrowRight className="w-7 h-7" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-col gap-6 pt-2">
                  {card.title === 'AI AGENTS' || card.title === 'AI BOTS' || card.title === 'AI AUTOMATION' ? null : (
                    <div className={`h-10 w-10 flex items-start justify-start ${card.offset}`}>
                      <card.icon className="h-8 w-8 text-black/70" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-heading font-black uppercase leading-tight max-w-[11ch] -ml-1">
                    {card.title}
                  </h3>
                  <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-black/40">
                    {card.sub}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 bg-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-start">
            <div>
              <div className="font-heading text-5xl md:text-6xl font-black uppercase leading-tight">
                CONTACT
              </div>
              <p className="mt-6 text-xs md:text-sm text-white/60 uppercase tracking-[0.25em] max-w-xs">
                We’re here when your business needs us.
              </p>
              <p className="mt-3 text-xs md:text-sm text-white/60 uppercase tracking-[0.25em] max-w-xs">
                Your business doesn’t stop. Neither do we. Reach out anytime — we’re available 24/7.
              </p>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-10">
              {[
                { label: 'Direct', value: '+61 0 450512904', href: 'tel:+610450512904' },
                { label: 'Signal', value: 'admin@iwillmedia.co', href: 'mailto:admin@iwillmedia.co' },
                { label: 'Network', value: 'www.iwillmedia.co', href: 'https://www.iwillmedia.co' },
              ].map((item) => (
                <div key={item.label} className="mb-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-2">
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    className="text-lg md:text-xl font-heading font-bold uppercase text-white hover:text-white/80 transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.35em] text-white/40">
            <span>© 2025 IWILLMEDIA SYS.ENG</span>
            <span>AUST_ARC_NATIVE • SYDNEY / NSW</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {[
              { label: 'LinkedIn', href: '#' },
              { label: 'Instagram', href: '#' },
              { label: 'X', href: '#' },
              { label: 'Facebook', href: 'https://www.facebook.com/iwillmedia.co/' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center border border-white/40 px-4 py-2 text-[10px] font-heading uppercase tracking-[0.35em] text-white/80 hover:text-white hover:border-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-6"
            onClick={() => setActiveTool(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="w-full max-w-2xl bg-white text-black border border-black/60 p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl md:text-4xl font-heading font-black uppercase">
                  {activeTool.title}
                </h3>
                <button
                  type="button"
                  className="text-xs font-heading uppercase tracking-[0.35em] text-black/50 hover:text-black transition-colors"
                  onClick={() => setActiveTool(null)}
                >
                  Close
                </button>
              </div>
              <p className="text-sm md:text-base font-heading uppercase text-black/70 leading-relaxed">
                {activeTool.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
