// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/*
 * @title Token Staking with Infinite Rewards
 * @author Breakthrough Labs Inc.
 * @notice Staking, Token, ERC20
 * @custom:version 1.0.0
 * @custom:address 55
 * @custom:default-precision 0
 * @custom:simple-description Token staking contract that rewards stakers with an exact number of ERC20 tokens per period for every token staked.
 * @dev Token staking contract that rewards stakers with an exact number of ERC20 tokens per period for every token staked. On deployment, the owner specifies a reward rate,
 * and an address that tokens will be pulled from. Neither of these can be changed. The per token rate stays the same even when the total number of staked tokens increases/decreases.
 *
 * A common usecase is for blockchain-based games, where holding tokens rewards a certain number of lives per day.
 *
 */
contract incentivizedstaking is Context {
    IERC20 public mainToken;
    IERC20 public rewardToken;
    address public rewardWallet;
    // @custom:precision 18
    uint256 public rewardPerTokenPerPeriod;
    uint256 public daysPerPeriod;

    // @custom:precision 18
    mapping(address => uint256) public balanceOf;
    mapping(address => uint256) public lastUpdateTime;
    // @custom:precision 18
    mapping(address => uint256) private reward;

    /**
     * @param mainTokenAddress  Staked Token Address
     * @param rewardTokenAddress Reward Token Address
     * @param rewardWalletAddress Wallet that holds rewards to be paid out
     * @param rewardRate # of tokens per staked token per period | precision:18
     * @param _daysPerPeriod # of days per period
     */
    constructor(
        address mainTokenAddress,
        address rewardTokenAddress,
        address rewardWalletAddress,
        uint256 rewardRate,
        uint256 _daysPerPeriod
    ) {
        mainToken = IERC20(mainTokenAddress);
        rewardToken = IERC20(rewardTokenAddress);
        rewardWallet = rewardWalletAddress;
        rewardPerTokenPerPeriod = rewardRate;
        daysPerPeriod = _daysPerPeriod;
    }

    modifier update(address account) {
        reward[account] = available(account);
        lastUpdateTime[account] = block.timestamp;
        _;
    }

    /**
     * @dev returns the number of reward tokens available for an address
     * @param account account
     */
    function available(address account) public view returns (uint256) {
        uint256 timeElapsed = block.timestamp - lastUpdateTime[account];
        uint256 earned = (balanceOf[account] *
            timeElapsed *
            rewardPerTokenPerPeriod) / (86400 * daysPerPeriod);
        return reward[account] + earned;
    }

    /**
     * @dev stakes an amount of tokens
     * @param amount amount to stake
     */
    function stake(uint256 amount) external update(_msgSender()) {
        mainToken.transferFrom(_msgSender(), address(this), amount);
        balanceOf[_msgSender()] += amount;
    }

    /**
     * @dev withdraws tokens
     * @param amount amount to withdraw
     */
    function withdraw(uint256 amount) external update(_msgSender()) {
        require(amount <= balanceOf[_msgSender()], "Exceeds balance");
        balanceOf[_msgSender()] -= amount;
        mainToken.transfer(_msgSender(), amount);
    }

    /**
     * @dev redeems all of a user's reward tokens.
     */
    function redeem() external update(_msgSender()) {
        uint256 amount = reward[_msgSender()];
        require(amount > 0, "Nothing to redeem");
        reward[_msgSender()] = 0;
        rewardToken.transferFrom(rewardWallet, _msgSender(), amount);

    }
    
}
