const Voting = artifacts.require("Voting");
const {BN,expectRevert,expectEvent} = require('@openzeppelin/test-helpers');
const {expect} = require('chai');

contract('Voting', accounts => {
    // Déclaration des comptes de test
    const owner = accounts[0];
    const voter1 = accounts[1];
    const voter2 = accounts[2];
    const voter3 = accounts[3];

    let votingContractInstance;

    // Nouvelle instance du contrat Voting
    beforeAll(async function () {
        votingContractInstance = await Voting.new({from: owner });
    });

    describe("Initial verifications", function(){
        describe("Verify owner", function(){
            // Vérification de l'administrateur
            it("Fail if the caller is not the owner", async () => {
                await expect(votingContractInstance.isOwnable(owner)).to.be.true;
            })
            
        })
    })


});


