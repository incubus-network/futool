// Endpoints
const FURY_ENDPOINT_KVTOOL = "http://localhost:1317";
const BINANCE_CHAIN_ENDPOINT_KVTOOL = "http://localhost:8080";

// Mnemonics
const LOADED_FURY_MNEMONIC = "arrive guide way exit polar print kitchen hair series custom siege afraid shrug crew fashion mind script divorce pattern trust project regular robust safe";
const LOADED_BINANCE_CHAIN_MNEMONIC = "village fiscal december liquid better drink disorder unusual tent ivory cage diesel bike slab tilt spray wife neck oak science beef upper chapter blade";

// BEP3 assets
const BEP3_ASSETS = {
  "bnb": {
    furyDenom: "bnb",
    binanceChainDenom: "BNB",
    furyDeputyHotWallet: "fury1agcvt07tcw0tglu0hmwdecsnuxp2yd45f3avgm",
    binanceChainDeputyHotWallet: "bnb1zfa5vmsme2v3ttvqecfleeh2xtz5zghh49hfqe",
    conversionFactor: 10 ** 8
  },
  "btcb": {
    furyDenom: "btcb",
    binanceChainDenom: "BTCB-1DE",
    furyDeputyHotWallet: "fury1kla4wl0ccv7u85cemvs3y987hqk0afcv7vue84",
    binanceChainDeputyHotWallet: "bnb1z8ryd66lhc4d9c0mmxx9zyyq4t3cqht9mt0qz3",
    conversionFactor: 10 ** 8
  },
  "xrpb": {
    furyDenom: "xrpb",
    binanceChainDenom: "XRP-BF2",
    furyDeputyHotWallet: "fury14q5sawxdxtpap5x5sgzj7v4sp3ucncjlpuk3hs",
    binanceChainDeputyHotWallet: "bnb1ryrenacljwghhc5zlnxs3pd86amta3jcaagyt0",
    conversionFactor: 10 ** 8
  },
  "busd": {
    furyDenom: "busd",
    binanceChainDenom: "BUSD-BD1",
    furyDeputyHotWallet: "fury1j9je7f6s0v6k7dmgv6u5k5ru202f5ffsc7af04",
    binanceChainDeputyHotWallet: "bnb1j20j0e62n2l9sefxnu596a6jyn5x29lk2syd5j",
    conversionFactor: 10 ** 8
  },
}

module.exports = {
  FURY_ENDPOINT_KVTOOL,
  BINANCE_CHAIN_ENDPOINT_KVTOOL,
  LOADED_FURY_MNEMONIC,
  LOADED_BINANCE_CHAIN_MNEMONIC,
  BEP3_ASSETS
}
