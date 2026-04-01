import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0f',
      borderTop: '1px solid rgba(145,94,255,0.30)',
      padding: '32px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '18px',
        fontWeight: 800,
        color: '#f3f3f3',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
      }}>
        MK<span style={{ color: '#915EFF', fontSize: '24px' }}>.</span>
      </div>

      <div style={{
        fontSize: '13px',
        color: '#aaa6c3',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        Built with <Heart size={12} color="#915EFF" fill="#915EFF" /> by{' '}
        <span style={{ color: '#915EFF' }}>Monish Koya</span> · 2026
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        {[
          { icon: <Github size={16} />, href: 'https://github.com/MonishKoya' },
          { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/monish-koya' },
          { icon: <Mail size={16} />, href: 'mailto:monishkoya18@gmail.com' },
        ].map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, color: '#915EFF' }}
            style={{
              color: '#aaa6c3',
              transition: 'color 0.2s',
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
