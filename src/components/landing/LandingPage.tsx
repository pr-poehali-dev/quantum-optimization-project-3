import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './Layout'

const PHOTOS = {
  anna_child: 'https://cdn.poehali.dev/files/f38a83fb-308c-417a-a6e8-7b1f5cb218c6.jpg',
  misha_child: 'https://cdn.poehali.dev/files/cd71a2bc-eea8-495b-95c1-0c5fd0c9d10e.jpg',
  ring: 'https://cdn.poehali.dev/files/0d5fad99-1538-4292-81c8-f7c94d220379.jpg',
  couple: 'https://cdn.poehali.dev/files/f6692405-cee3-4412-bd8c-8093456c8cc9.jpg',
  map: 'https://cdn.poehali.dev/files/b4875706-3f9a-4f82-9f1d-a1fd615f4acc.jpg',
}

function Petal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full opacity-20 bg-rose-300 blur-sm pointer-events-none"
      style={style}
    />
  )
}

function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <Petal key={i} style={{
          width: `${8 + (i * 7) % 20}px`,
          height: `${8 + (i * 7) % 20}px`,
          left: `${(i * 17 + 5) % 95}%`,
          top: `${(i * 23 + 10) % 90}%`,
          animationDelay: `${i * 0.3}s`,
        }} />
      ))}
    </div>
  )
}

// ─── Секция 1: Детские фото ────────────────────────────────────────────────
function ChildhoodSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#1a0a0f] to-[#2d0f1e]">
      <FloatingPetals />
      <motion.p
        className="text-rose-300 text-sm tracking-[0.3em] uppercase mb-6 font-light"
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        история любви
      </motion.p>

      <div className="flex gap-6 md:gap-12 mb-8">
        {/* Анна */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -60 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-36 h-44 md:w-48 md:h-60 rounded-2xl overflow-hidden border-2 border-rose-400/40 shadow-2xl">
            <img src={PHOTOS.anna_child} alt="Анна" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <p className="mt-3 text-white font-serif text-xl italic">Анна</p>
        </motion.div>

        {/* Сердечко */}
        <motion.div
          className="flex items-center text-rose-400 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ♡
        </motion.div>

        {/* Михаил */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-36 h-44 md:w-48 md:h-60 rounded-2xl overflow-hidden border-2 border-rose-400/40 shadow-2xl">
            <img src={PHOTOS.misha_child} alt="Михаил" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <p className="mt-3 text-white font-serif text-xl italic">Михаил</p>
        </motion.div>
      </div>

      <motion.h2
        className="text-white text-center font-serif text-3xl md:text-5xl italic leading-snug"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Мы уже взрослые —<br />
        <span className="text-rose-300">нам можно</span> 💍
      </motion.h2>
    </div>
  )
}

// ─── Секция 2: Кольцо + приглашение ────────────────────────────────────────
function InviteSection({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="relative h-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${PHOTOS.ring})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <FloatingPetals />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <p className="text-rose-200 tracking-[0.4em] uppercase text-xs mb-4">приглашение на свадьбу</p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur border border-rose-300/50 flex items-center justify-center">
            <span className="text-white font-serif text-3xl md:text-4xl">М</span>
          </div>
          <span className="text-rose-300 text-3xl">♡</span>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur border border-rose-300/50 flex items-center justify-center">
            <span className="text-white font-serif text-3xl md:text-4xl">А</span>
          </div>
        </div>
        <h2 className="text-white font-serif text-4xl md:text-6xl italic mb-3">
          Михаил & Анна
        </h2>
        <p className="text-rose-200 text-lg md:text-xl tracking-widest">
          просят разделить с ними этот особенный день
        </p>
      </motion.div>
    </div>
  )
}

// ─── Секция 3: Совместное фото ──────────────────────────────────────────────
function CoupleSection({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="relative h-full flex flex-col items-center justify-end pb-16"
      style={{
        backgroundImage: `url(${PHOTOS.couple})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <p className="text-rose-200 text-sm tracking-[0.3em] uppercase mb-2">дата торжества</p>
        <h2 className="text-white font-serif text-5xl md:text-7xl italic mb-2">2025</h2>
        <p className="text-rose-300 text-xl md:text-2xl font-light">Мы ждём тебя рядом ♡</p>
      </motion.div>
    </div>
  )
}

// ─── Секция 4: Дресс-код ────────────────────────────────────────────────────
function DressCodeSection({ isActive }: { isActive: boolean }) {
  const forbidden = [
    { color: '#000000', label: 'Чёрный' },
    { color: '#FFFFFF', label: 'Белый' },
    { color: '#C0392B', label: 'Красный' },
    { color: '#8B4513', label: 'Коричневый' },
  ]
  const welcome = [
    { color: '#F8BBD0', label: 'Пудровый' },
    { color: '#CE93D8', label: 'Сиреневый' },
    { color: '#B0BEC5', label: 'Серебристый' },
    { color: '#A5D6A7', label: 'Мятный' },
    { color: '#FFCC80', label: 'Персиковый' },
  ]

  return (
    <div className="relative h-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#2d0f1e] to-[#1a0a0f]">
      <FloatingPetals />
      <motion.p
        className="text-rose-300 text-xs tracking-[0.4em] uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        дресс-код
      </motion.p>
      <motion.h2
        className="text-white font-serif text-3xl md:text-4xl italic text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Пожалуйста, не надевайте
      </motion.h2>

      <motion.div
        className="flex gap-4 mb-8 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {forbidden.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div className="relative w-12 h-12 rounded-full border-2 border-rose-400/40 shadow-lg" style={{ backgroundColor: item.color }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-0.5 bg-rose-400 rotate-45 rounded" />
              </div>
            </div>
            <span className="text-white/70 text-xs">{item.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="w-full max-w-sm h-px bg-rose-400/30 mb-8"
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      <motion.h3
        className="text-rose-200 font-serif text-xl italic text-center mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Приветствуются оттенки
      </motion.h3>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        {welcome.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-rose-300/40 shadow-lg" style={{ backgroundColor: item.color }} />
            <span className="text-white/70 text-xs">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Секция 5: Карта ────────────────────────────────────────────────────────
function MapSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#1a0a0f] to-[#2d0f1e]">
      <FloatingPetals />
      <motion.p
        className="text-rose-300 text-xs tracking-[0.4em] uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        место проведения
      </motion.p>
      <motion.h2
        className="text-white font-serif text-3xl md:text-4xl italic text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Ждём вас здесь ♡
      </motion.h2>

      <motion.div
        className="w-full max-w-sm rounded-2xl overflow-hidden border-2 border-rose-400/30 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src={PHOTOS.map} alt="Карта" className="w-full h-auto" />
      </motion.div>

      <motion.p
        className="text-white/60 text-sm text-center mt-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        ул. Маршала Жукова, Уфа
      </motion.p>
    </div>
  )
}

// ─── Главный компонент ──────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'childhood', Component: ChildhoodSection },
  { id: 'invite', Component: InviteSection },
  { id: 'couple', Component: CoupleSection },
  { id: 'dresscode', Component: DressCodeSection },
  { id: 'map', Component: MapSection },
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        setActiveSection(Math.round(scrollPosition / windowHeight))
      }
    }
    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <Layout>
      {/* Навигационные точки */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {SECTIONS.map((s, index) => (
          <button
            key={s.id}
            className={`w-2.5 h-2.5 rounded-full my-2 transition-all duration-300 ${
              index === activeSection ? 'bg-rose-400 scale-150' : 'bg-white/30'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      {/* Прогресс-бар */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-rose-900/40 z-30">
        <div
          className="h-full bg-rose-400 transition-all duration-300"
          style={{ width: `${((activeSection) / (SECTIONS.length - 1)) * 100}%` }}
        />
      </div>

      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {SECTIONS.map(({ id, Component }, index) => (
          <section key={id} id={id} className="h-screen snap-start">
            <Component isActive={index === activeSection} />
          </section>
        ))}
      </div>
    </Layout>
  )
}
