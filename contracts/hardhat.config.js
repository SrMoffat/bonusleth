require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/zBWaZlZJEzTMtVmrV-LtvIY9zIS1hE-t",
      accounts: [
        "d0f1416b263fe585d48f24218333a18cf2b0e051b3dc01af1a0744a87a16b2bc",
      ],
    },
  },
};
