import httpProxy from 'http-proxy';

const API_URL = `https://my-project-2-4e46d.firebaseapp.com/__/auth/:path*`; // The actual URL of your API

const proxy = httpProxy.createProxyServer();

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
