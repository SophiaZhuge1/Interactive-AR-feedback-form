/** @type {import("snowpack").SnowpackUserConfig } */

import path from 'path';

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    ['@snowpack/plugin-dotenv', { dir: path.resolve(process.cwd(), '..') }],
  ],
  knownEntrypoints: ['react-is'],
};
