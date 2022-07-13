import UserAccount from "./userAccount";

const userAccount = new UserAccount('222','Robson',1)

console.log(userAccount)

console.log('balance 10', userAccount.addBalance(10))
console.log('balance 5 ', userAccount.addBalance(5))
console.log('getBalance', userAccount.getBalance())