import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private tableName: String
  
  constructor(){
    super()
    this.tableName = "UserCookenu"
  }

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into(this.tableName.toString());
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name })
        .where({ id: user.id })
        .into(this.tableName.toString());
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection(this.tableName.toString())
        .select()
        .where({email});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };
  
  public getUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(this.tableName.toString())
        .select()
        .where({id});
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };


}
