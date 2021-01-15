'use strict';

global._prsAtm = Object.assign(require('./package.json'), {
    testNetRpcApi: 'http://51.255.133.170:8888',
    testNetChainApi: 'https://elm-sushibar.ngrok.io',
    authorityChainApi: 'https://prs-bp1.press.one',
});

module.exports = Object.assign(require('sushitrain'), {
    keythereum: require('keythereum-pure-js'),
    atm: require('./lib/atm'),
    ballot: require('./lib/ballot'),
    chain: require('./lib/chain'),
    config: require('./lib/config'),
    etc: require('./lib/etc'),
    exchange: require('./lib/exchange'),
    keychain: require('./lib/keychain'),
    statement: require('./lib/statement'),
    system: require('./lib/system'),
    wallet: require('./lib/wallet'),
});
