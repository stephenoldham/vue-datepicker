module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/Datepicker.vue',
    ],
    options: {
      whitelistPatterns: [
        // /bg-.*?-(200|300|500|700|900)/,
        // /text-.*?-(200|300|500|700|900)/
        /text-.*?-(300|500)/,
        /bg-.*?-(300|500|700)/,
        /group-hover\:bg-.*?-(200|900)/,
      ],
    }
  },
  theme: {
    screens: {
      'sm': '640px'
    },
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
