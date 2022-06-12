import { UserType, Users } from '../models/Users'

export const create = ( payload: UserType )  =>{
    return Users.push(payload)
}

export const all = () => {
    return Users
}

export const balance = (name: string, cpf: string ) =>{
    const findUser = Users.find( u => u.name === name && u.cpf === cpf )
    return findUser
}

export const addBalance = (name: string, cpf: string, saldo: number) => {
    console.log(`name: ${name}, cpf: ${cpf}, saldo: ${saldo}`)
    
    const findUserIndex = Users.findIndex( u => u.name === name && u.cpf === cpf )

    if(findUserIndex > -1 ){
        Users[findUserIndex].saldo +=  saldo
        return Users[findUserIndex]
    }

    return []
    
}