---
sidebar_position: 3
---

# AMM

> Become a liquidity provider and trader of resources on the StarkNet native AMM

The AMM is running on StarkNet and is Alpha software. The design of it may change from this current iteration as StarkNet evolves and the needs for the protocol evolves.

The primary economic trading mechanism within the Realmverse is the Resources AMM (Automatic Market Maker). This is a decentralised marketplace where players provide resources and $LORDS pairs and are rewarded for doing so. By providing assets to the market a thriving economy emerges where players can trade instantly. 

This is an ERC1155 (resources token type) & ERC20 ($LORDS token type) Automatic Market Maker & the first of its kind running on StarkNet. It is based on the Solidity AMM, [NiftySwap](https://github.com/0xsequence/niftyswap/blob/master/src/contracts/exchange/NiftyswapExchange20.sol). 

This is the buy snippet from the codebase. See the full code here. Please note that this is Alpha software, and is still in active development. If you wish to contribute either fork it or please reach out to a Core Lord in the discord. We do not suggest using this with live tokens in its current iteration.

[See the full code here](https://github.com/BibliothecaForAdventurers/realms-contracts/tree/main/contracts/exchange)

---

## How does trading work on the AMM?

When making a swap, the exchange will calculate the price according to the x * y = k curve. Fees are collected against the currency in both buy and sell actions. Due to this, k will steadily increase as a measure to collect rewards for the liquidity providers.

### Multi-resource swaps

The key difference between the resource AMM and traditional AMMs (Uniswap) is that it allows multi-swapping of tokens. Meaning, that you can achieve the following:

100 Wood (assumes 1:1 pair)
100 Stone (assumes 1:1 pair)
100 Dragonhide (assumes 1:1 pair)

exchange for: 

300 Lords - fees

If you need a specific amount of resources for an upgrade you could purchase all the resources in one transaction - saving time and fees!

---

### AMM Trading Fees

Two types of trading fees exist on the AMM.

| Fee | % | Destination |
| ----------- | ----------- | ----------- |
| LP Rewards | 1.5% | LP Providers |
| $LORDS Commission | 1.5% | Nexus |

**LP Rewards**

If you are supplying liquidity to a resource pool you will be returned LP tokens for that pool. These tokens represent your share of the Pool. When removing your LP tokens you will have earned interest according to the fees on $LORDS generated within that pool. (This is similar to Sushiswaps LP pools and is not the same as Uniswap V3 pools)

**$LORDS Commission**

All trades will contain $LORDS as the opposite side of the trade. There is a commission on these $LORDS which will be set originally at 1.5%. This commission will be split into the Nexus and Treasury.

---

## Liquidity in the AMM

Providing Liquidity 

When providing liquidity to AMM, you are returned LP tokens for that pool. As trading occurs, the LP position will accrue a portion of the fees, and as with any AMM, the pool may be subject to impermanent loss. We strongly recommend understanding the risks of impermanent loss before becoming an LP merchant.

Liquidity is supplied at the current price point in the x * y = k curve.

**Staking your LP tokens for further rewards**

You can then become a Liquidity Merchant and stake your LP tokens for further rewards - learn how via The Nexus.