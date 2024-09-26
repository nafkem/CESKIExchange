// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "./chainlinlOracle.sol";



// alfajores 0x874069fa1eb16d44d622f2e0ca25eea172369bc1
//0x642Abc0c069dC5041dEA5bFC155D38D844779274); // KES/USD price feed

contract CKESConverter is ERC20, Ownable, ReentrancyGuard, Pausable {

    AggregatorV3Interface internal priceFeed;
    IERC20 public cUSD;
    uint8 private constant DECIMALS = 18; // cKES token decimals

    // Events for on-ramp and off-ramp transactions
    event FiatToCKES(address indexed user, uint256 cKESAmount, string fiatTransactionId);
    event CKESToFiat(address indexed user, uint256 cKESAmount, string fiatPaymentDetails);
    
    // Constructor, passing cUSD token address and setting the price feed
    constructor(address _cUSD) ERC20("CeloKES", "CKES") Ownable(msg.sender) {
        cUSD = IERC20(_cUSD);
        // Initialize Chainlink price feed for KES/USD conversion
        priceFeed = AggregatorV3Interface(0x642Abc0c069dC5041dEA5bFC155D38D844779274); // KES/USD price feed
    }

    // Modifier to ensure only the owner can perform certain actions
    modifier onlyOwnerOrAdmin() {
        require(owner() == msg.sender, "Caller is not the owner");
        _;
    }

    // Function to mint cKES after verifying fiat transaction (with reentrancy and pausable guards)
    function onRamp(string memory fiatTransactionId, uint256 fiatAmountKES) 
    external 
    onlyOwner 
    nonReentrant 
    whenNotPaused {
        require(fiatAmountKES > 0, "Invalid fiat amount");

        // Get the latest price from the price feed (KES/USD)
        (,int256 price,,,) = priceFeed.latestRoundData();
        require(price > 0, "Invalid price feed data");

        uint256 exchangeRate = uint256(price); // KES/USD conversion rate, typically 8 decimals

        // Adjust for decimal places to match the cKES token decimals
        uint256 cKESAmount = (fiatAmountKES * exchangeRate) / 1e8; // Convert to cKES with 18 decimals precision
        
        // Mint cKES to the contract owner (you can modify to mint to a different user)
        _mint(msg.sender, cKESAmount);

        // Emit event for logging
        emit FiatToCKES(msg.sender, cKESAmount, fiatTransactionId);
    }

    // Function to off-ramp (convert cKES back to fiat equivalent)
    function offRamp(uint256 cKESAmount, string memory fiatPaymentDetails) 
    external 
    nonReentrant 
    whenNotPaused {
        require(cKESAmount > 0, "Invalid cKES amount");
        require(balanceOf(msg.sender) >= cKESAmount, "Insufficient cKES balance");

        // Burn the user's cKES tokens
        _burn(msg.sender, cKESAmount);

        // Emit event for logging
        emit CKESToFiat(msg.sender, cKESAmount, fiatPaymentDetails);
    }

    // Function to pause the contract (onlyOwner)
    function pause() external onlyOwner {
        _pause();
    }

    // Function to unpause the contract (onlyOwner)
    function unpause() external onlyOwner {
        _unpause();
    }
}
