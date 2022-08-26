export type user = {
   id: string
   email: string
   password: string
   name: string   
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   id: string
}

export interface EditUserInput {
   name: string,
   id: string
}

export interface LoginUserInputDTO {
   email: string,
   password: string
}

export interface ProfileInputDTO{
   id: string,
   name: string,
   email: string
}