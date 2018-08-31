import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/app.scss',
  namespace: 'tun-stencil-sample',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ],
  plugins: [
    sass()
  ]
};
