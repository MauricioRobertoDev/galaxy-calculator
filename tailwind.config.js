module.exports = {
     content: [
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
     ],
     theme: {
          container: {
               screens: {
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1280px',
               }
          },
          extend: {
               fontFamily: {
                    sans: ['Inter'],
               },
               colors: {
                    'primary-50': '#f0f9ff',
                    'primary-100': '#e0f2fe',
                    'primary-200': '#bae6fd',
                    'primary-300': '#7dd3fc',
                    'primary-400': '#38bdf8',
                    'primary-500': '#0ea5e9',
                    'primary-600': '#0284c7',
                    'primary-700': '#0369a1',
                    'primary-800': '#075985',
                    'primary-900': '#0c4a6e',
                    'primary-1000': '#1a1c2b',
               },
          },
     },
     plugins: [
          require('@tailwindcss/forms'),
     ],
}
