require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note spike prosper grace force fringe gaze'; 
let testAccounts = [
"0x6eb5470688c1f1dc973cd8d11776ed559bdea3bb2ce64bb774aa5cfb592b97f9",
"0xbdd350f99d4d19f64f5d95f0c8b5f30a189b7533131547c93f39158030c84070",
"0x17b230b81e9a560a453e08575f8404bc3a50505f74b999891a02c918b1bec718",
"0x4863f43403ba54acc325359b971a586fa1a471231d04ec2ea38d314f21d14202",
"0xe34a79e1ea6498bd58c1e7848924c7da8e4ef91eeb3a6729bda964adbff82fa8",
"0xb73744b3f1022f1db3fea60259a9279fed3d4cdc66ae369d2aef7194edad4d3e",
"0xa20c75c139a47bfcabcfbe3e97d50a7ffa27cc8bdff5244eaa987a64c4df394a",
"0x806c93b5f717e6f9c4e81f56a4217981f8974c43ff0da4fa03a86dcc0f06a600",
"0x599c999016aa564238cf5172de936a328635f4e820d061151da9efb711ba546d",
"0x0e80fd2ca5fddabba6d61784631c480dd4417380729339b2c8048070b9421031"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


