import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/userDTO";
import { generetId } from "../services/generateId";


export class UserBusiness {
public createUser = async (input: UserInputDTO) => {
   try {
     const { name, nickname, email, password } = input;
 
     if (!name || !nickname || !email || !password) {
       throw new CustomError('Preencha os campos "name","nickname", "email" e "password"',404);
     }
 
     const id: string = generetId()
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       nickname,
       email,
       password,
     });
   } catch (error: any) {
     throw new CustomError(error.message, 500);
   }
 };

}

