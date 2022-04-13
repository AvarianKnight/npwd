const { build } = require('esbuild')

build({
	entryPoints: ['./server/server.ts'],
	outfile: './dist/server/server.js',
	platform: "node",
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			console.log(result)
			if (error) console.error('Server Build Failed:', error)
			else {
				console.log("Server build succeeded")
			}
		},
	}
}).catch(() => process.exit(1))

build({
	entryPoints: ['./client/client.ts'],
	outfile: './dist/client/client.js',
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Client Build Failed:', error)
			else {
				console.log('Client Build Succeeded')
			}
		},
	}
}).catch(() => process.exit(1))