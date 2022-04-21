$env:SENTRY_VERSION=$(git rev-parse --short HEAD);
npm run build;
node sentry.js