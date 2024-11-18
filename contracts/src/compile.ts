/**
 * To run locally:
 * Build the project: `$ npm run build`
 * Run with node:     `$ node build/src/compile.js`.
 */
import { AddProgram } from './AddProgram.js';

console.log('compiling zkProgram...');

console.time('compile zkProgram');
await AddProgram.compile();
console.timeEnd('compile zkProgram');

// compile zkProgram: 36.702s on Macbook Pro 2022 M2 16GB RAM
