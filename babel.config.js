const { NODE_ENV, BABEL_ENV } = process.env
const cjs = NODE_ENV === 'test' || BABEL_ENV === 'commonjs'
const loose = true

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose,
        modules: false,
        bugfixes: true,
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [cjs && ['@babel/transform-modules-commonjs', { loose }]].filter(
    Boolean,
  ),
}
