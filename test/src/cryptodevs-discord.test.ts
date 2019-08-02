/**

==========================================
   Testing CryptoDevs1stAnnversaryToken
==========================================

*/

// @ts-ignore
import solidityTest = require('solidity-test');
const solAssert = solidityTest.solAssert;

import chai = require('chai');
const assert = chai.assert;

import fs = require('fs');
import path = require('path');
const config: object = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../config.json'), 'utf8'));

// @ts-ignore
const CryptoDevs1stAnniversaryToken = artifacts.require('CryptoDevs1stAnniversaryToken');

let instances: any = {};

// @ts-ignore
contract('CryptoDevs1stAnniversaryToken', (accounts) => {

  const Kiwi: string = accounts[0];
  const Clément: string = accounts[1];
  const Kinrezc: string = accounts[2];
  const Moro: string = accounts[3];

  const noobs: string[] = accounts.slice(4);

  it('deploy token contract', async () => {
    instances.CryptoDevs1stAnniversaryToken = await CryptoDevs1stAnniversaryToken.new({ from: Kiwi });
    assert.ok(instances.CryptoDevs1stAnniversaryToken);
  })

  describe('mint', async () => {

    it('Kiwi can mint', async () => {
      //Check that noob 1 has no token
      assert.isTrue((await instances.CryptoDevs1stAnniversaryToken.balanceOf(noob[0]) === 0));

      //Kiwi graciously mints a token
      assert.ok(await instances.CryptoDevs1stAnniversaryToken.mint(, { from: Kiwi }));
      

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
      it('flex (check comments)', async () => {
        // * This actually doesn't do anything, but I wanted flex to feel special :(
        // * It is also important to keep the channel #flex-chat secret

        // * I have therefore gifted him with a test that will never fail
        // * One which will never falter in the darkness of blockchain development (dot) (dot) (dot)
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
