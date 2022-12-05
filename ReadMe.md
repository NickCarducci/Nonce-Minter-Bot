Solidity open source droplet (using nodejs as security without ~~hullabaloo~~ consensus): ["easily deploy open source apps"](https://www.digitalocean.com/blog/easily-deploy-open-source-apps-with-the-new-deploy-to-digitalocean-button-and-other-app-platform-enhancements)

Instruction ERC ~~not from express~~, but [solidity and "geth" network go-ethereum](https://github.com/ethereum/go-ethereum/blob/master/p2p/enode/localnode.go)

[unless we use Geth](https://github.com/ethereum/go-ethereum/issues/21759) IP of node peers, [`req.ips; app.set('trust proxy', true)`](https://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address) remote referer

I mean, [local](https://github.com/ethereum/go-ethereum/issues/21759):  [`enode.Node`](https://github.com/ethereum/go-ethereum/pull/17643) and [`admin.nodeInfo.enode.LocalNode`](https://github.com/ethereum/go-ethereum/pull/17753)

>Geth explicitly excludes internal IP addresses from it's discovery to avoid publishing unreachable nodes into the DHT.

*Is [this](https://github.com/ethereum/go-ethereum/issues/2765) not faulty security?*

>eth.accounts lists the accounts that are locally available on this node. They are not synced between nodes. 
>With eth.getBalance you can query the balance of any account (not necessarily a local one).

>[New API](https://github.com/cryptomental/go-ethereum/commit/f3d1cfb543bb21d56032d62e5ccfc40c5763454e) is added to retrieve the 
>enode.Node instance of a peer. The behavior of Server.Self with discovery disabled is improved. 
>It now tries much harder to report a working IP address, falling back to 127.0.0.1 if no suitable address can be determined through other means. 
>These changes were needed for tests of other packages later in the series.

### [Nonce-Minter-Bot](https://ethereum-magicians.org/t/nonce-minter-bot-for-erc20mintable-open-source-wallet-supply-recovery) for wallet recovery improvement proposal draft using: p2p [Network Addresses in Ethereum](https://dean.eigenmann.me/blog/2020/01/21/network-addresses-in-ethereum/)
