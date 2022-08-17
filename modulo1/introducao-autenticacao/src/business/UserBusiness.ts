import { userInfo } from "os";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  UserSignUpDTO,
} from "../model/user"
import { idGenerate } from '../services/idGenerate'

const _idGenerate = new idGenerate()

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;
      
      if (!email || email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }

      // Item c. Validação da senha
    if (!password || password.length < 6) {
      throw new CustomError(400, "Invalid password");
    }


      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }
      
      const id: string = _idGenerate.generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      return await userDatabase.insertUser(user);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserByEmail = async (email: string)=>{
    try {

      if (!email || email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      return await userDatabase.getUserByEmail(email);

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
