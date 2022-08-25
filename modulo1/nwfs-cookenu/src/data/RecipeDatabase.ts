import { CustomError } from "../error/customError";
import { recipeType } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  private tableName: String
  
  constructor(){
    super()
    this.tableName = "RecipeCookenu"
  }

  public insertRecipe = async (recipe: recipeType) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          idUser: recipe.idUser,
          date: recipe.date
        })
        .into(this.tableName.toString());
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

//   public editUser = async (user: EditUserInput) => {
//     try {
//       await UserDatabase.connection
//         .update({ name: user.name })
//         .where({ id: user.id })
//         .into(this.tableName.toString());
//     } catch (error: any) {
//       throw new CustomError(400, error.message);
//     }
//   };

//   public findUserByEmail = async (email: string) => {
//     try {
//       const result = await UserDatabase.connection(this.tableName.toString())
//         .select()
//         .where({email});
//       return result[0];
//     } catch (error: any) {
//       throw new CustomError(400, error.sqlMessage);
//     }
//   };
  
//   public getUserById = async (id: string) => {
//     try {
//       const result = await UserDatabase.connection(this.tableName.toString())
//         .select()
//         .where({id});
//       return result[0];
//     } catch (error: any) {
//       throw new CustomError(400, error.sqlMessage);
//     }
//   };


}
