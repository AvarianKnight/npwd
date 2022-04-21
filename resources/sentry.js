const SentryCli = require('@sentry/cli');

const createSourceMap = async () =>  {
	const release = process.env.SENTRY_VERSION; 
	
	if (!release) {
	  console.warn('SENTRY_RELEASE is not set');
	  return;
	}  
	
	const cli = new SentryCli();
	
	try {
	  console.log('Creating sentry release ' + release);
	  await cli.releases.new(release);
	  console.log('Uploading source maps');
	  await cli.releases.uploadSourceMaps(release, {
		include: ['./../resources/dist'],
		rewrite: false,
	  });
	  console.log('Finalizing release');
	  await cli.releases.finalize(release);
	} catch (e) {
	  console.error('Source maps uploading failed:', e);
	}
}

createSourceMap()
