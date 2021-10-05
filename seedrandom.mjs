import * as seedrandom from './seedrandom.js';

let seedrandom_export;

// Node.js
// -> seedrandom will contain a default export
if (seedrandom.default) {
  seedrandom_export = seedrandom.default;
}
// Browser
// -> global Math object will contain seedrandom property
else {
  seedrandom_export = Math.seedrandom;
  delete Math.seedrandom;
}

export default seedrandom_export;
