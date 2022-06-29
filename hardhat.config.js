require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },
    mainnet: {
      url: "https://rpc.nextsmartchain.com",
      chainid: 96,
      accounts: ["ac05a1eae8284402d2015cdbb8d5dd551a113a6910fb4092b25a5529c926f985"]
    },
    testnet: {
      url: "https://testnet-rpc.nextsmartchain.com",
      chainid: 98,
      accounts: ["ac05a1eae8284402d2015cdbb8d5dd551a113a6910fb4092b25a5529c926f985"]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
