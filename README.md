# onTrack
## Incentivized Staking Protocol
## ontrack-frontend.vercel.app

## Problem
Big problem we face nowadays is that people can say anything and never deliver on their promises. Have you ever been told to expect something that has never happened? How many times you yourself have tried to stay on track with your goals, making a New Years’ resolution list or promising to start every Monday?  We came up with the solution to keep you and your peers accountable and put the money where the mouth is. 

## Vision
 **onTrack** - an incentivized accountability platform where you can set up your goals, invite others to participate in the same challenge, and keep each other accountable to deliver on your promises. 
We want to help keep you and your friends motivated in achieving your goals. The platform is user-friendly and backed by the DeFi staking protocol. Our aim is to empower you to take control of your accomplishments while having the support and inspiration from your buddies.

## How does it work
You decide on the commitment you want to make, how often you want to take the steps towards it, invite your buddies and keep on delivering on your promises
### A cherry on top: 
Your money is working for you while you are working towards your goals. The amount staked by all parties goes into a liquidity pool and at the end of the challenge, winners get a yielded amount. 


## Ecosystem Bounties & Sponsor Prizes

#### Push Protocol
**Push Protocol** is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. We used Push protocol to enable cross-chain notifications and messaging about the milestones achieved

#### Polygon 
Polygon is the leading platform for Ethereum scaling and infrastructure development.
For our applications process, we are deploying our smart contracts on Polygon as it offers scaling and infrastructure support to Ethereum decentralized applications (dApps) and is not plagued by the high transaction fees and network congestion that impacts the Ethereum network.

#### Optimism
**Optimism** We wanted to make our platform multichain, and at onTrack we are super optimistic about open source contributions and builders communities.
Optimism deployment of contract on goerli (https://goerli.etherscan.io/tx/0x5a7b2fa454597d7253d4432c849f12d8c4eb3eb9752820b21d1ae68a0f0d1719)

#### Gnosis Chain
**Gnosis Chain** We have deployed smart contract on Gnosis Chain to allow our users multichain experiance as the transactions are cheaper. As Gnosis chain can only be deployed on testnet here is a hash address for gnosis chiado contract 0x684f05d2208b10b25da1875b6feeadca82a7e6b09a7f4c2369e39a1e818be11f


#### ApeCoin
**ApeCoin** is an ERC-20 governance and utility token for decentralized communities building at the forefront of culture and web3. We have adopted ApeCoin as a staking token for our application  to give our users all the perks for ApeCoin holders.
- Governance - allows holders to participate in the ApeCoin DAO
- Unification of Spend - shared and open currency across more NFT native communities
- Access - exclusive games, merch, events, and services
- Incentivization - tool for third-party developers to incorporate APE into their services, games, and other projects

#### 0x Protocol
**0x Protocol** an open-source, decentralized exchange protocol that serves as the global backbone of 0x, trusted exchange infrastructure for the internet. 
We have used **0x Swap API**  to convert ApeCoin which is our staking token into a Stablecoin. That allowed us to provide aggregated liquidity to our users. https://mumbai.polygonscan.com/address/0x2134ad000311c150146eed3e9149fc22d0815dba


#### WorldCoin
**Worldcoin** is a Privacy-Preserving Proof-of-Personhood Protocol (PPPoPP).  We used **World ID** to enable Proof-of-Personhood for our sign-up process.

#### Tenderly
**Tenderly** is a leading blockchain development platform that simplifies building innovative blockchain products for seasoned and new developers alike. The company works closely with the Web 3.0 community to provide the right tools, services, and infrastructure to help developers build groundbreaking products, with less friction. We are utilizing Tenderly web application to have a seamless experience for testing our smart contracts, beacuse of their great UI.

#### Triangle
**Triangle** powers businesses to embed Web3 experiences across DeFi, NFTs, payments, social, gaming, and many more by using our wallet infrastructure API to build frictionless products and services. We used Triangle to create a vault to store crypto assets and handle dispersement for all participants.

#### Midpoint
**Midpoint** is the easiest way to connect your blockchain application to traditional web endpoints.
Midpoint makes it easy for developers to make any HTTP call from within a smart contract, without running any infrastructure and in one line of Solidity. Unlike traditional oracle networks, Midpoint allows developers to make requests with on-chain parameters, multi-step authentication workflows, and private off-chain data. Midpoint is natively multi-chain and can respond to requests across EVM chains.
We used Midpoint to pull data about the representatives by person’s respective addresses using Google's civic information API.

#### The Graph
**The Graph** is an indexing protocol for organising and efficiently accessing data from blockchains and storage networks. The Graph has been running a hosted service with over 2,300 subgraphs deployed for Web3 and DeFi applications built on Ethereum and IPFS, like Synthetix, Uniswap, Aave, Balancer, Gnosis, Aragon, and more. We have created a subgraph with our smart contract information. 


# create-web3 boilerplate

A boilerplate for starting a web3 project.

This boilerplate quickly creates a mono repo with 2 environments, a react frontend environment and a Ethereum development environment for writing, testing and deploying contracts.

## Quick Start Notes

1.  To start install

```bash
npx create-web3
```

2.  Run `yarn` or `npm install` to install all the dependencies
3.  Once installation is complete, `cd` into your app's directory and run `yarn chain` or `npm run chain` to start a local hardhat environment
4.  Open another terminal and `cd` into your app's directory
5.  Run `yarn deploy` or `npm run deploy` to deploy the example contract locally
6.  Run `yarn dev` or `npm run dev` to start your FrontEnd dev environment

## Technologies

This project is built with the following open source libraries, frameworks and languages. User choice of framework used, available in plain js or typescript.
| Tech | Description |
| --------------------------------------------- | ------------------------------------------------------------------ |
| ------ | ------ React Frontend Environment ------ |
| [Next JS](https://nextjs.org/) | React Framework |
| [Vite JS](https://vitejs.dev/) | Next Generation Frontend Tooling |
| ------ | ------ CSS Framework ------ |
| none | |
| [Tailwind](https://tailwindcss.com/) | A utility-first CSS framework |
| [Chakra](https://chakra-ui.com/) | A simple, modular and accessible component library that gives you the building blocks you need to build your React applications. |
| ------ | ------ Ethereum Development Environment ------ |
| [Hardhat](https://hardhat.org/) | Ethereum development environment for professionals |
| [Foundry](https://getfoundry.sh/) | a blazing fast, portable and modular toolkit for Ethereum application development written in Rust. |
| ------ | ------ Included Libraries ------ |
| [WAGMI](https://wagmi.sh/) | A set of React Hooks for Web3 |
| [RainbowKit](https://www.rainbowkit.com/docs/introduction) | RainbowKit is a React library that makes it easy to add wallet connection to your dapp. |

## Documentation

Please visit [create-web3.xyz](https://create-web3.xyz) to view the full documentation.

## Discussions

If you have questions how to use, want to suggest a feature, or show off a project you created with create-web3, join [discussions on GitHub](https://github.com/e-roy/create-web3/discussions). I would love to hear from you. 🙂

## Issues

If you find a bug or would like to request a feature, please visit [ISSUES](https://github.com/e-roy/create-web3/issues)
