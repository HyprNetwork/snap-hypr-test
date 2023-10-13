import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-abi-exporter';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  paths: {
    sources: './contracts/',
    tests: './test',
    cache: './build/cache',
    artifacts: './build/artifacts',
  },
  abiExporter: {
    path: './build/abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
  },
  gasReporter: {
    enabled: true,
    showMethodSig: true,
    maxMethodDiff: 10,
    gasPrice: 127,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  typechain: {
    outDir: './build/types',
    target: 'ethers-v6',
  },
};

export default config;
