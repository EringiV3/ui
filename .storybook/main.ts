const viteTsconfig = require('vite-tsconfig-paths')
const tsconfigPaths = viteTsconfig.default

const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}
