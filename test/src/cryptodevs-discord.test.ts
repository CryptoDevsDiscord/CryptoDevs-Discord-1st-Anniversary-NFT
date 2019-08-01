/**

==========================================
   Testing CryptoDevs1stAnnversaryToken
==========================================

*/

// @ts-ignore
import solidityTest = require('solidity-test');
const solAssert = solidityTest.solAssert;

import fs = require('fs');
import path = require('path');
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../config.json')));

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
 
    describe('l337 mods can mint', async () => {
      it('Kiwi', async () => {

      })
      it('Clément', async () => {

      })
      it('Kinrezc', async () => {

      })
      it('Moro', async () => {

      })

    })

  })

  describe('token fields are expected', async () => {

    it('name', async () => {

    })

    it('symbol', async () => {

    })

    it('tokenURI', async () => {

    })

  })

})
