---
sidebar_position: 3
description: Developer and gamer first solutions.
---

# The Stack

All game state and logic is created on-chain, with the majority of transactions occuring on Starknet. The data is then cached in a performant GraphQL indexer which can be queried by any frontend application, such as the Atlas website or user created experiences.

### The Contracts
Bibliotheca's Open Source contracts can be found in a monorepo on [GitHub](https://github.com/BibliothecaForAdventurers/realms-contracts), consisting of both L1 contracts written in Solidity, and L2 contracts for StarkNet written in Cairo. These range from Realms Asset contracts (ERC721 and ERC1155), to staking, game logic, bridging and content (lore) contracts.

Contracts currently deployed to mainnet include:

|     Contract       | Network   |        Address                             |
|--------------------|:---------:|:------------------------------------------:|
| Realms NFT (ERC721)|  Ethereum | 0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d |
| Lords (ERC20)      |  Ethereum | 0x686f2404e77ab0d9070a46cdfb0b7fecdd2318b0 |
| Journey V1         |  Ethereum | 0x17963290db8C30552D0cfa2A6453FF20a28C31a2 |
| Journey V2         |  Ethereum | 0xcdFe3d7eBFA793675426F150E928CD395469cA53 |


### The Indexer
Asset and game events are tracked by our own [Indexer](https://github.com/BibliothecaForAdventurers/starknet-indexer), employing Apollo Server, Typescript, Prisma and Postgres. This enables any client applications (e.g frontends, analytics tools or bots) to query for events using GraphQL, or any proposed module to make an update to the indexer to make new events available to clients.

### The Client
The majority of development is currently occuring on the [Atlas](https://atlas.bibliothecadao.xyz) website, which will serve as the base for the future Realms' Settling (WIP) game. This React client is built on Next.js and hosted on Vercel, and you can find the source code on [GitHub](https://github.com/BibliothecaForAdventurers/realms-react/)

### Contributing
We are actively seeking contributors, with rewards to be issued by the DAO. Get in contact on the #builders-council on our [Discord](https://discord.com/channels/884211910222970891/884214944457981983)
