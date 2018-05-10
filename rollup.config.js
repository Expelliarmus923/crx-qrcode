import replace from 'rollup-plugin-replace'
import string from 'rollup-plugin-string'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  format: 'iife',
  moduleName: 'qrcode',
  dest: 'dist/qrcode.js',
  plugins: [
    nodeResolve({ main: true, browser: true }),
    commonjs(),
    string({ include: '**/*.css' }),
    replace({ __DEV__: !!process.env.DEV })
  ]
}
