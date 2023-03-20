module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
}
