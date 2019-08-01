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

  const Kiwi: string = accounts[0];
  const Clément: string = accounts[1];
  const Kinrezc: string = accounts[2];
  const Moro: string = accounts[3];

  const noobs: string[] = accounts.slice(4);

  describe('mint', async () => {

    it('Kiwi can mint', async () => {

    })
    
    it('noobs cannot mint :(', async () => {
    

    })

    it('Kiwi can mod mods', async () => {


    })
 
    it('l337 mods can mint', async () => {


    })

  })

})
