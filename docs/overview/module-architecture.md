---
sidebar_position: 3
---

# Module Architecture

## Blockchain + Clients

The future is decentralised backends with centralised frontends. The entirety of this plan revolves around the game state being entirely on-chain which is communicated to via a client. This initial client will be managed by Bibliotheca DAO, however, anyone can come and create their own client if they choose to.

One of the core tenets of Ethereums decentralisation is that it can be accessed by multiple clients. Obviously, we are not recreating a blockchain here, but the premise is similar. The protocol is the backend, and the original React client is just one of many potential clients.

## Open Item Tables

The project is designed around a core set of composable DAO governed contracts, extendable in the future via modules. Modules are isolated contracts written by Bibliotheca or external developers that all interact with the core contracts. These core contracts form the basis for the economy and can be seen much like item tables (Diablo items etc) in a traditional game. Namely, the most interesting contracts are:

## ERC1155 Resource Tokens

The core fungible high inflation, high burn tokens. 22 different tokens will exist in the origin epoch and will generate from a Settled (staked) Realm. New tokens will be released with the addition of new modules. All these will be available to trade on an AMM running on StarkNet.

## ERC1155 Crafting Items

These are items that are crafted from burning the resource tokens. These are rare, valuable, and provide unique statistics which can be leveraged in other areas of the game.

## ERC721 Loot Items

Inflationary contract of individual Loot items distilled with a special Layer 1 to Layer 2 contract. These inflate at a fixed rate and are available for trade and to equip onto their Character.

Balancing a game where external developers can submit core modules that affect the economy will be challenging. After the game is launched there will be a balancing committee of builders who will vote on how each new resource/item interoperates with the rest of the game.
