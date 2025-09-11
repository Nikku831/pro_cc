/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base Colors
        'bg': '#121212',
        'surface': '#1E1E1E',
        'on-surface': '#FFFFFF',
        
        // Primary Accent (Blue)
        'primary': '#0EA5E9',
        'primary-hover': '#0284C7',
        
        // Secondary Accent (Purple)
        'purple': '#8B5CF6',
        'purple-hover': '#6D28D9',
        
        // Highlight Accent (Pink)
        'pink': '#EC4899',
        'pink-hover': '#DB2777',
        
        // Neutral Gray
        'gray-light': '#2A2A2A',
        'gray-dark': '#0F0F0F',
      }
    },
  },
  plugins: [],
};