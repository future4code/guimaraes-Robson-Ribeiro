export type UserType = {
    name: string,
    cpf: string,
    dataNascimento: Date,
    saldo: number,
    extrato?: ExtratoType[]
}

type ExtratoType = {
    valor: number, 
    data: string, 
    descricao: string
}

export const Users: UserType[] = []