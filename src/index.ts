/* eslint-disable no-console */
import corsProxy from 'cors-anywhere';

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const removeHeaders = ['cookie', 'cookie2', 'x-frame-options'];
const removeHeadersFromResponse = ['x-frame-options', 'content-security-policy', 'access-control-expose-headers'];

corsProxy
    .createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: [],
        removeHeaders,
        removeHeadersFromResponse,
    })
    .listen(port, host, () => {
        console.log(`Running CORS Anywhere on ${host}:${port}`);
        console.log('Remove from request:', removeHeaders);
        console.log('Remove from response:', removeHeadersFromResponse);
    });
