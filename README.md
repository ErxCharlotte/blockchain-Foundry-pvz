# PvZNFT

Users can mint NFTs, which represent different types of plants with different attibutes. Users can then use the NFTs they own to participate in games and fight with Zombies.

## Quick Start:

```shell
foundryup
forge install
forge build
yarn
```

## if you have not install forge:

run

```shell
curl -L https://foundry.paradigm.xyz | bash
```

and follow the instrauction

## Private Key:

To protect your private key

1. Run and enter your private key, secure with a password

```shell
cast wallet import YOUR_ACCOUNT_NAME --interactive
```

2. View existing 'accounts' with

```shell
cast wallet list
```

3. Run script without having private key in anywhere of the files

```shell
forge script server/script/Interactions.s.sol:FundSubscription --rpc-url YOUR_RPC_URL --account YOUR_ACCOUNT_NAME --broadcast
```

## Commands

### Deploy locally

run

```shell
anvil
```

to start a local node and start a new terminal while keeping the first one running

then run

```shell
make deploy-anvil
```

to deploy the contracts on the local node

then run

```shell
make start-interface
```

to start interact with the game

## TODOs

0. Account manager, user is asked to login (or sign up if it is for the first time). Then minted NFTs, username, password, and wallet connection can be stored
1. Implement game-logic.js, which starts the game, allow players to play with their own NFTs and verify the the provided NFTs
2. Implement scripts that auto record contract address, player's address and the token ids they own.
3. Write tests
4. Front-end
5. NFT trading
6. error handling
7. security

// TODO: use next.js to build a simple front end
// TODO: quickly learn golang and rust

## Take-aways:

1. function returns of solidiy is in the form of storing address, need to .toString() to convert to actual value
2. block.timestamp can get current time
3. vm.warp can set timestamp, vm.roll can change block number. It is good practice to vm.warp(block.timestamp + <whatever operations>; vm.roll(block.numer + 1);)
4. Solidity cannot interact with external file system, so nft cannot be mint in real time, but can be pre-build and transfer to player.

## Sturcture:

PlantFactory (a contract):

1. takes an IPFS URI and mints plant
2. takes a tokenId, identify the owner
3. handle trades of NFT between users

GameCore (back end):

1. Print out the board and relevant information (Sunlight amount, health of plants and zombies)
2. Ask user for an action, currently the action would be indicating a plantNFT to be placed at a position
3. Check the validity of the coordinate and the validity of the NFT (ensure it exist and is owned by this acount)
4. Deploy the plantNFT
5. Spawn zombies if condition met (certain round passed)
6. Process plant actions and update board accordingly
7. Process zombie actions and update borad accoridngly
8. Check if game ended
9. End turn

UserManager (back end):

1. connect wallets and assign user id
2. Mint NFTs and keep a lists of NFT they own
   a. Ask what types of plant users would like to mint
   b. get random number from contract and generate random attributes of plants
   c. store the NFT id under the user
3. Trade interface
4. start game interface
   a. generate random attribute and write into JSON file
   b. upload the JSON file to IPFS system and obtain the IPFS URI

UserInterface (front end):
use user's wallet to identify users and keep track of their properties

1. connect wallets and assign user id
2. Mint NFTs interface and keep a lists of NFT they own
   a. Ask what types of plant users would like to mint
   b. store the NFT id under the user
3. Trade interface
4. start game interface
   a. generate random attribute and write into JSON file
   b. upload the JSON file to IPFS system and obtain the IPFS URI

PlantData
a json file specify what attribute to be generated according to the type of plants

UserAccount
a json file recoridng user id and the NFTs they owned

<details>
<summary>Legacy Content</summary>

update:
since solidity does not have the ability to interact with external file systems, the random numbers would be generated by the contract, but the plant attributes will be generated externally and pass back to the contract to mint NFT

but since s.sol scripts cannot interact with IPFS as well, at this stage, the URI will be hard coded into the code.

PlantFactory:

1. takes an IPFS URI and mints plant
   a. generate random attribute and write into JSON file
   b. upload the JSON file to IPFS system and obtain the IPFS URI
   c. mint NFT and obtain the NFT id
2. takes a tokenId, identify the owner
3. handle trades of NFT between users

UserInterface:
use user's wallet to identify users and keep track of their properties

1. connect wallets and assign user id
2. Mint NFTs interface and keep a lists of NFT they own
   a. Ask what types of plant users would like to mint
   b. store the NFT id under the user
3. Trade interface
4. start game interface

PlantData
a json file specify what attribute to be generated according to the type of plants

UserAccount
a json file recoridng user id and the NFTs they owned

Start game

1. Print out the board and relevant information (Sunlight amount, health of plants and zombies)
2. Ask user for an action, currently the action would be indicating a plantNFT to be placed at a position
3. Check the validity of the coordinate and the validity of the NFT (ensure it exist and is owned by this acount)
4. Deploy the plantNFT
5. Spawn zombies if condition met (certain round passed)
6. Process plant actions and update board accordingly
7. Process zombie actions and update borad accoridngly
8. Check if game ended
9. End turn
</details>
