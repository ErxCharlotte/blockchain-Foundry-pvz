const config = {
  local: {
    providerUrl: "http://localhost:8545",
    contractAddress: "0xYourLocalContractAddress",
    contractABI: [
      {
        type: "constructor",
        inputs: [{ name: "mintFee", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "approve",
        inputs: [
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [{ name: "owner", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getApproved",
        inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getNumOfNFTMinted",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          { name: "owner", type: "address", internalType: "address" },
          { name: "operator", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "mintPlant",
        inputs: [
          { name: "player", type: "address", internalType: "address" },
          { name: "metadataURI", type: "string", internalType: "string" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "ownerOf",
        inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          { name: "from", type: "address", internalType: "address" },
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          { name: "from", type: "address", internalType: "address" },
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "approved", type: "bool", internalType: "bool" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tokenURI",
        inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "string", internalType: "string" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tradePlant",
        inputs: [
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "prevOwner", type: "address", internalType: "address" },
          { name: "newOwner", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          { name: "from", type: "address", internalType: "address" },
          { name: "to", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "Approval",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
          {
            name: "owner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "approved",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "BatchMetadataUpdate",
        inputs: [
          {
            name: "_fromTokenId",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
          {
            name: "_toTokenId",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "MetadataUpdate",
        inputs: [
          {
            name: "_tokenId",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "PlantMinted",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
          {
            name: "metadataURI",
            type: "string",
            indexed: false,
            internalType: "string",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "PlantTraded",
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
          {
            name: "prevOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          {
            name: "from",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "error",
        name: "ERC721IncorrectOwner",
        inputs: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "owner", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "ERC721InsufficientApproval",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
        ],
      },
      {
        type: "error",
        name: "ERC721InvalidApprover",
        inputs: [
          { name: "approver", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "ERC721InvalidOperator",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "ERC721InvalidOwner",
        inputs: [{ name: "owner", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "ERC721InvalidReceiver",
        inputs: [
          { name: "receiver", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "ERC721InvalidSender",
        inputs: [{ name: "sender", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "ERC721NonexistentToken",
        inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      },
      { type: "error", name: "PlantNFTFactory_insufficientFee", inputs: [] },
    ],
    // 你的 ABI 数据
  },
  rinkeby: {
    providerUrl: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    contractAddress: "0xYourRinkebyContractAddress",
    contractABI: [
      // 你的 ABI 数据
    ],
  },
  mainnet: {
    providerUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    contractAddress: "0xYourMainnetContractAddress",
    contractABI: [
      // 你的 ABI 数据
    ],
  },
};

module.exports = config;
