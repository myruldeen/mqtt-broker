let SSL_KEY = __dirname + '/certs/key.pem';
let SSL_CERT = __dirname + '/certs/certificate.pem';
let MONGOURL = 'mongodb://localhost:27017/aedes';

module.exports = {
    protos: ['tcp'],
    host: '127.0.0.1',
    port: 1883,
    wsPort: 3000,
    wssPort: 4000,
    tlsPort: 8883,
    brokerId: 'aedes-cli',
    credentials: null,
    persistence: {
      name: 'mongodb',
      options: {
        url: MONGOURL
      }
    },
    mq: {
      name: 'mongodb',
      options: {
        url: MONGOURL
      }
    },
    key: SSL_KEY,
    cert: SSL_CERT,
    rejectUnauthorized: true,
    verbose: false,
    veryVerbose: false,
    noPretty: false
  }


