import corsProxy from 'cors-anywhere';

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 3000;

corsProxy
    .createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: [],
        removeHeaders: ['cookie', 'cookie2', 'x-frame-options'],
    })
    .listen(port, host, () => {
        // eslint-disable-next-line no-console
        console.log(`Running CORS Anywhere on ${host}:${port}`);
    });
