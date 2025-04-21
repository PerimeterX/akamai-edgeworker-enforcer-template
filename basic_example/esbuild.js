const esbuild = require('esbuild');

const AKAMAI_BUILT_IN_MODULES = [
    'log',
    'http-request',
    'create-response',
    'cookies',
    'url-search-params',
    'crypto',
    'encoding',
    'text-encode-transform',
];

esbuild.buildSync({
    entryPoints: ['src/main.ts'],
    bundle: true,
    external: AKAMAI_BUILT_IN_MODULES,
    outfile: './dist/main.js',
    target: 'es2022',
    minify: false,
    format: 'esm',
});
