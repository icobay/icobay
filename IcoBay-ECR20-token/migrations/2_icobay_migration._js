var IcoBayToken = artifacts.require("./IcoBayToken.sol");

module.exports = function(deployer) {
  deployer.deploy(IcoBayToken);
};
