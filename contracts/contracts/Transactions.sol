//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract Transactions {
    uint256 transactionCount;

    event Send(address from, address receiver, uint amount, string message, uint256 timestamp, string spec);
  
    struct SendStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string spec;
    }

    SendStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory spec) public {
        transactionCount += 1;
        transactions.push(SendStruct(msg.sender, receiver, amount, message, block.timestamp, spec));

        emit Send(msg.sender, receiver, amount, message, block.timestamp, spec);
    }

    function getAllTransactions() public view returns (SendStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}