module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
