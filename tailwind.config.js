/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      screens: {
        'xxl': '1680px',
        // => @media (min-width: 1680px) { ... }
      },
      colors: {
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '200': '50rem',
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
