let SSL_KEY = __dirname + '/certs/key.pem';
let SSL_CERT = __dirname + '/certs/certificate.pem';
let MONGOURL = 'mongodb://localhost:27017/mqtt';
// let MONGOURL = 'mongodb://mirul123:mirul123@cluster0-shard-00-00-uexgi.mongodb.net:27017,cluster0-shard-00-01-uexgi.mongodb.net:27017,cluster0-shard-00-02-uexgi.mongodb.net:27017/iotfwjs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    id: 'broker',
    stats: false,
    port: 8443,
    logger: {
        name: 'iotfwjs',
        level: 'debug'
    },
    secure: {
        keyPath: SSL_KEY,
        certPath: SSL_CERT,
    },
    backend: {
        type: 'mongodb',
        url: MONGOURL
    },
    persistence: {
        factory: 'mongo',
        url: MONGOURL
    }
};


