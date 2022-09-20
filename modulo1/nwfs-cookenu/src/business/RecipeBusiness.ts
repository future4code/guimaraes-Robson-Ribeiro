import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { AuthenticatorData } from "../model/types";
import {
RecipeInputDTO, recipeType
} from "../model/Recipe";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import idGenerator from "../services/idGenerator";

export class RecipeBusiness {  
  private recipeDB: RecipeDatabase
  constructor(){
    this.recipeDB = new RecipeDatabase
  }

  public createRecipe = async (input: RecipeInputDTO) => {
    let { description, title, date, idUser } = input
  
    if(!description || !title ) {
      throw new CustomError(422, "falta algo!")
    }
    
    const id = idGenerator.generateId()

    const recipe: recipeType = {
        date,
        description,
        id,
        idUser,
        title
    }
    
    await this.recipeDB.insertRecipe(recipe)

  }

  public findRecipeById = async (id: string): Promise<recipeType> => {
    try {
      return await this.recipeDB.findRecipeById(id)
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

//   public login = async (input: LoginUserInputDTO) => {
//     let { email, password} = input

//     if(!email || !password) {
//       throw new CustomError(400, "falta parametro")
//     }


//     const user = await this.userDB.findUserByEmail(email)
//     const hashCompare = await HashManager.compareHash(
//       password,
//       user.password
//     )

//     if(!hashCompare){
//       throw new InvalidPassword()
//     }

//     const payload: AuthenticatorData = {
//       id: user.id
//     }

//     const token = Authenticator.generateToken(payload)

//     return token
    
//   }
  
  
}
