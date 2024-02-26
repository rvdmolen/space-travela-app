import { fromRollup } from '@web/dev-server-rollup';
import rollupBabel from '@rollup/plugin-babel';

const babel = fromRollup(rollupBabel);

export default {
  open: '/',
  watch: true,
  nodeResolve: { exportConditions: ['browser', 'development'] },

  /** Set appIndex to enable SPA routing */
  appIndex: './index.html',

  plugins: [
    babel({
      include: ['**/*.js'],
      babelHelpers: 'bundled',
    }),
  ],
};
