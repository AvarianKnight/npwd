const { build } = require('esbuild')

build({
  entryPoints: ['./server/server.ts'],
  outfile: './dist/server/server.js',
  platform: "node",
  minify: false,
  bundle: true,
  target: "es2016"
}).catch(() => process.exit(1))

build({
	entryPoints: ['./client/client.ts'],
	outfile: './dist/client/client.js',
	minify: false,
	bundle: true,
	target: "es2016"
}).catch(() => process.exit(1))