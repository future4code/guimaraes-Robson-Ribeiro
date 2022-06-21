import { UserType, Users } from '../models/Users'
import moment from 'moment'
import { format } from 'path';

export const create = ( payload: UserType )  =>{
    moment.locale('pt-BR');
    const dateFormat = 'DD/MM/YYYY'
    const dateNow = new Date

    if(payload.name === "" || payload.name === undefined){
        throw new Error("É necessário informar um nome")
    }

    if(payload.cpf === "" || payload.cpf === undefined){
        throw new Error("É necessário informar o CPF")
    }

    if(!moment(payload.dataNascimento, dateFormat, true).isValid()){
        throw new Error("É necessário infromar a data de nascimento" )
    }

    const birthDayFormat = moment(dateNow, dateFormat).diff(moment(payload.dataNascimento, dateFormat ))
    const years = moment.duration(birthDayFormat).years()

    if(years <= 18){
        throw new Error('Para criar a conta você deve ser maior que 18 anos')
    }

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