import { rootMain } from '../../../.storybook/main';

import type { StorybookConfig, Options } from '@storybook/core-common';
import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...(rootMain.addons || [])],
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

module.exports = config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
