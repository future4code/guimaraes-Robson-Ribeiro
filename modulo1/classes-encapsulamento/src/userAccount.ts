import Transaction from "./transaction";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCPF():string{
        return this.cpf
    }

    public getName():string{
        return this.name
    }

    public getAge():number{
        return this.age
    }

    public getBalance():number{
        return this.balance
    }

    public getTransaction():Transaction[]{
        return this.transactions
    }

    public addBalance(balance: number):number{
        const newBalance = (this.balance + balance)
        this.balance = newBalance
        return this.balance
    }
  
  }

  export default UserAccount
