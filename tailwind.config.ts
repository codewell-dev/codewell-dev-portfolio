import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:    '#0C0D0F',
        surface: '#141517',
        lift:    '#1C1D20',
        border:  'rgba(255,255,255,0.07)',
        mint:    '#6EE7B7',
        'mint-muted': 'rgba(110,231,183,0.12)',
        orange:  '#FB923C',
        cream:   '#F2F0EB',
        muted:   'rgba(242,240,235,0.45)',
        faint:   'rgba(242,240,235,0.12)',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
