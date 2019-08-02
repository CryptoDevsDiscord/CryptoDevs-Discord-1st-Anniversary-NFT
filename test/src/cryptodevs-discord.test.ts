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
const config: any = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../config.json'), 'utf8'));

// @ts-ignore
import BN = web3.utils.BN;

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

    let expectedNextID: BN;

    before(async () => {
      expectedNextID = new BN(0);
    })

    it('Kiwi can mint, and minting increases counter', async () => {

      //Define this pitiful noob
      const noob: string = noobs[0];

      //Grab counter value, ensure is 0
      const nextID: BN = await instances.CryptoDevs1stAnniversaryToken.nextTokenID.call();
      assert.isTrue(nextID.eq(expectedNextID));

      //Check that noob 0 has no token
      assert.isTrue((await instances.CryptoDevs1stAnniversaryToken.balanceOf(noob)).eq(new BN(0)));

      //Kiwi graciously mints a token
      assert.ok(await instances.CryptoDevs1stAnniversaryToken.mint(noob, { from: Kiwi }));
      
      //Check that noob, indeed, has received a token
      assert.isTrue((await instances.CryptoDevs1stAnniversaryToken.balanceOf(noob)).eq(new BN(1)));

      //Check counter value has increased, therefore should be at 1
      const postNextID: BN = await instances.CryptoDevs1stAnniversaryToken.nextTokenID.call();
      assert.isTrue(postNextID.eq(expectedNextID.add(new BN(1))));

    })
    
    it('noobs cannot mint :(', async () => {
      await solAssert.revert(
        async () => {
          await instances.CryptoDevs1stAnniversaryToken.mint(noobs[1], { from: noobs[0] });
        }
      , 'MinterRole: caller does not have the Minter role');    

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
      const name: string = await instances.CryptoDevs1stAnniversaryToken.name.call();
      assert.equal(name, config.name);
    })

    it('symbol', async () => {
      const sym: string = await instances.CryptoDevs1stAnniversaryToken.symbol.call();
      assert.equal(sym, config.symbol);
    })

    it('tokenURI', async () => {
      const tokenURI: string = await instances.CryptoDevs1stAnniversaryToken.tokenURI.call();
      assert.equal(tokenURI, config.tokenURI);
    })

  })

})
