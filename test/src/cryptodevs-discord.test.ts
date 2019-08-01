/**

==========================================
   Testing CryptoDevs1stAnnversaryToken
==========================================

*/

// @ts-ignore
import solidityTest = require('solidity-test');
const solAssert = solidityTest.solAssert;

// @ts-ignore
const CryptoDevs1stAnnversaryToken = artifacts.require('CryptoDevs1stAnnversaryToken');

let instances: object = {};

// @ts-ignore
contract('CryptoDevs1stAnnversaryToken', (accounts) => {

  const Kiwi = accounts[0];
  const noobs = accounts.slice(1);

  it('meme', async () => {
    
  })

})
