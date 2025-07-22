/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Figma design
        'figma-black': '#000000',
        'figma-white': '#FFFFFF',
        'figma-dark-purple': '#1B083A',
        'figma-monad-purple': '#45236A',
        'figma-light-gray': '#FAFAFA',
        'figma-text-secondary': '#E5E7EB',
        'figma-dark-card': '#191B1F',
        'figma-card-dark': '#0E100F',
        'figma-hero-start': '#2D1848',
        'figma-hero-end': '#0A0A0A',
        
        // Feature colors from Figma
        'figma-orange': '#FC7B0D',
        'figma-orange-dark': '#CC6500',
        'figma-orange-light': '#FC810D',
        'figma-purple': '#552396',
        'figma-green': '#0EAD3A',
        'figma-blue': '#6E54FF',
        'figma-telegram': '#37BBFE',
        'figma-telegram-dark': '#007DBB',
        
        // Text colors
        'figma-text-gradient-start': '#FFFFFF',
        'figma-text-gradient-end': '#666666',
        'figma-text-light': '#311C52',
        'figma-text-muted': '#E5E7EB',
        
        // Background variations
        'figma-bg-card': '#16171A',
        'figma-bg-overlay': 'rgba(255, 255, 255, 0)',
        'figma-bg-community': '#7E433B',
        
        // Legacy colors for backward compatibility
        primary: {
          900: '#45236A',
          950: '#2D1848',
        },
        accent: {
          orange: '#FC7B0D',
          green: '#0EAD3A',
          blue: '#6E54FF',
          purple: '#552396',
        },
        dark: {
          900: '#0A0A0A',
          800: '#1B083A',
          700: '#150828',
          600: '#311C52',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'helvetica': ['HelveticaNeue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Professional typography scale - reduced sizes
        'figma-h1': ['48px', { lineHeight: '1.1em', fontWeight: '600' }],
        'figma-h2': ['42px', { lineHeight: '1.1em', fontWeight: '500' }],
        'figma-h3': ['36px', { lineHeight: '1.2em', fontWeight: '700' }],
        'figma-h4': ['28px', { lineHeight: '1.3em', fontWeight: '700' }],
        'figma-body-large': ['18px', { lineHeight: '1.6em', fontWeight: '400' }],
        'figma-body-medium': ['16px', { lineHeight: '1.5em', fontWeight: '400' }],
        'figma-button-large': ['16px', { lineHeight: '1em', fontWeight: '500' }],
        'figma-button-medium': ['14px', { lineHeight: '1.2em', fontWeight: '500' }],
        'figma-feature': ['20px', { lineHeight: '1.3em', fontWeight: '400' }],
        'figma-social': ['48px', { lineHeight: '1.2em', fontWeight: '400' }],
        
        // Additional professional sizes
        'figma-small': ['14px', { lineHeight: '1.4em', fontWeight: '400' }],
        'figma-xs': ['12px', { lineHeight: '1.3em', fontWeight: '400' }],
      },
      backgroundImage: {
        // Exact gradients from Figma
        'figma-hero-gradient': 'linear-gradient(180deg, #2D1848 20%, #0A0A0A 100%)',
        'figma-text-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
        'figma-orange-gradient': 'linear-gradient(180deg, #CC6500 0%, #FC810D 100%)',
        'figma-button-gradient': 'linear-gradient(135deg, #45236A 0%, #45236A 100%)',
        'figma-card-gradient': 'linear-gradient(180deg, #2C313A 0%, #0D0D0D 100%)',
        'figma-community-gradient': 'linear-gradient(180deg, #282828 0%, #060606 100%)',
        'figma-sphere-gradient': 'linear-gradient(180deg, #673E8A 63.94%, #1F1133 100%)',
        
        // Legacy gradients
        'gradient-primary': 'linear-gradient(180deg, #2D1848 20%, #0A0A0A 100%)',
        'gradient-card': 'linear-gradient(135deg, #45236A 0%, #1B083A 100%)',
        'gradient-text': 'linear-gradient(180deg, #FFFFFF 0%, #666666 57.69%)',
      },
      spacing: {
        // Figma spacing system
        'figma-section': '80px',
        'figma-container-x': '278px',
        'figma-container-y': '95px',
        'figma-gap': '48px',
        'figma-gap-small': '22px',
      },
      maxWidth: {
        'figma-container': '1728px',
        'figma-content': '1488px',
        'figma-section': '1200px',
      },
      borderRadius: {
        'figma-card': '27px',
        'figma-button': '50px',
        'figma-large': '100px',
        'figma-medium': '38px',
        'figma-small': '20px',
      },
      boxShadow: {
        'figma-card': '0px 0px 0px 1px rgba(0, 0, 0, 1), 0px 1px 2px 0px rgba(0, 0, 0, 0.08), inset 0px 1px 1px 0px rgba(255, 255, 255, 0.12)',
        'figma-button': 'inset 0px 4px 4px rgba(0, 0, 0, 0.4), inset 0px -4px 4px rgba(0, 0, 0, 0.4)',
        'figma-feature': 'inset 0px 11px 5.3px 0px rgba(14, 16, 15, 1)',
        'figma-glow': '0px 0px 0px 1px rgba(79, 71, 235, 1), 0px 1px 2px 0px rgba(26, 19, 161, 0.5), inset 0px 1px 0.5px 0px rgba(255, 255, 255, 0.33)',
      },
      animation: {
        'figma-float': 'figmaFloat 4s ease-in-out infinite',
        'figma-pulse': 'figmaPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        figmaFloat: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        figmaPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(252, 130, 23, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(252, 130, 23, 0.8)' },
        }
      },
      blur: {
        'figma-large': '500px',
        'figma-medium': '20px',
        'figma-small': '7.3px',
      }
    },
  },
  plugins: [],
}