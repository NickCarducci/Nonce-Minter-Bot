var Accounts = require('web3-eth-accounts');

var accounts = new Accounts('ws://localhost:8546');

var alloc = {};

accounts.forEach(x=>{
  return {
    "7df9a875a174b3bc565e6424a0050ebc1b2d1d82": 
        { "balance": "300000" },
    "f41c74c9ae680c1aa78f42e5647a62f353b7bdde": 
        { "balance": "400000" }
}

const genesis = {
    "config": {
        "chainId": 15, 
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "difficulty": "20",
    "gasLimit": "2100000",
    "alloc": alloc
}

fs.writeFile(__dirname+"/genesis.json",genesis,()=>{});

/*module.exports = () => {
     
}*/
