import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'windows-dark': {
          bg: '#202020',
          surface: '#2D2D2D',
          border: '#3D3D3D',
          hover: '#3A3A3A',
          text: '#E0E0E0',
          'text-secondary': '#B0B0B0',
          accent: '#0078D4',
          'accent-hover': '#106EBE',
        },
      },
    },
  },
  plugins: [],
}
export default config

