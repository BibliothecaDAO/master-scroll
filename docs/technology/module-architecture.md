---
sidebar_position: 2
description: Enabling composability and upgradability.
---

# Module Architecture
---

The Bibliotheca stack has been crafted to take advantage of Ethereum's capability to facilitate composability between smart contracts. The financial lego blocks of DeFi demonstrated the enhancements composability provides both to developers and users, such as the ablility to bootstrap complex financial applications and having standards to trade between assets. 

Feature rich gaming applications proved to require too much computation for the L1 network to be viable, however we believe StarkNet will provide a new paradigm of development allowing the benefits of composability to be applied to gaming ecosystems. These extend beyond simply being able to share a PFP between games or trade one games' asset for another - but rather deeply integrated gaming experiences developed in a more decentralized fashion. The open nature of the blockchain allows developers to build on top of each other and integrate applications - leading to the emergence of standards encompassing concepts such as shared XP upgrades, physics and verifiable randomness. 


## Modules act as open source DLCs
Individual applications (such as developed at Bibliotheca) can take advantage on a more micro level by splitting monolithic codebases into functional modules that can be "composed" together. We split elements such as Settling, Resource Production, Building Construction, Realm Statistics, Wonders, AMM & Adventurers into logical modules that developers can reuse or modify and potentially be integrated back into the main game contract. For example - Crypts & Caverns has replicated the Settling & Resource modules, allowing the game assets to easily be integrated back into the main game logic and subsequently the user frontend client.
![module controller](/img/game/module-controller.png)
The entirety of the game is controlled through a core module controller contract determing which contracts have write access to the game state and logic. All upgrades to the controller (such as adding a new building type or integrating another project) are governed by the Bibliotheca DAO. By creating this modular structure the game has the ability expand independent of the core team. A new developer could choose to write a module that interacted with the rest of the game, proposed it to the community, and on a successful vote the game expands. 

### Creators get paid

The verifiability of the blockchain allows us to simulate an 'app store' like experience for new developers. When a new developer writes a module, they could choose to bake in a micro transaction to use this contract, resulting in the developer being paid each time a player interacts with it. Alternatively creators may be rewarded by the DAO for providing new experiences.

