module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.php',
      './**/*.html',
      './resources/**/*.vue',
    ],
    options: {
      whitelistPatterns: [
        /bg-red/,/bg-orange/,/bg-yellow/,/bg-green/,/bg-blue/,/bg-teal/,/bg-indigo/,/bg-purple/,/bg-pink/,
        /text-red/,/text-orange/,/text-yellow/,/text-green/,/text-blue/,/text-teal/,/text-indigo/,/text-purple/,/text-pink/,
      ],
    }
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
