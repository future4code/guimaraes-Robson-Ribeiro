export type UserType = {
    name: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato?: [{ valor: number, data: string, descricao: string }]
}

export const Users: UserType[] = []