require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purse install basket foster test'; 
let testAccounts = [
"0x600c560f4e60a9fde20f359cf5523af0681a94c0295b4ed39ac0fc5c4332ac21",
"0x050f88398ad483556bc1aaa480301325aaef37f4675f7aca383722c6ec872d24",
"0xbd76f5f8db65985e67cc69cb8469afe00168c04be25908e4bf1344d8ea74598c",
"0x158d80c77b1d460f21355c02b39da34f100aa8323905cd26a0c8df9097768313",
"0x2eb0b4ec5d71bc9f9ce76e18c6584800776710114e490d3f6679ea1bfee4479b",
"0xc7111fda4af390f307be0065e506d019ddfb9b5a8eb4ac5baf088924e76b96b3",
"0x539272fba8753d6edd753fab94d55c0dc3fda3bfdc1bbf16e3e56473f7d4357f",
"0x525a7a0beee5be5dbe2e4c3611a50d8dd3b05518b28a6436f484625bebdcda04",
"0x75831b506061f484524121132bab348043aa6964ba534102150701ad4d53befe",
"0x9d41b1fd82e854b9a1a7eb253f36ce0868f35f04b664ce914076f547f649bb88"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

