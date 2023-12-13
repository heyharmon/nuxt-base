module.exports = {
  content: [ // Content to be scanned
    './components/**/*.vue',
    './pages/*.vue',
    './nuxt.config.{js,ts}',
  ],

  plugins: [
    // Tailwind form styles
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
  ],
}