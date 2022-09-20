import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { AuthenticatorData } from "../model/types";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginUserInputDTO,
  ProfileInputDTO,
} from "../model/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import idGenerator from "../services/idGenerator";

export class UserBusiness {
  
  private userDB: UserDatabase
  constructor(){
    this.userDB = new UserDatabase
  }

  public createUser = async (input: UserInputDTO) => {
    let { name, email, password} = input
  
    if(!name || !email || !password) {

      throw new CustomError(422, "falta algo!")
    }
    
    const id = idGenerator.generateId()
    const hash = await HashManager.generateHash(password)

    const user :user = {
      id,
      email,
      password: hash,
      name
    }
    
    await this.userDB.insertUser(user)

    const token = Authenticator.generateToken({id})

    return token

  }

  public login = async (input: LoginUserInputDTO) => {
    let { email, password} = input

    if(!email || !password) {
      throw new CustomError(400, "falta parametro")
    }

    const user = await this.userDB.findUserByEmail(email)
    const hashCompare = await HashManager.compareHash(
      password,
      user.password
    )

    if(!hashCompare){
      throw new InvalidPassword()
    }

    const payload: AuthenticatorData = {
      id: user.id
    }

    const token = Authenticator.generateToken(payload)

    return token    
  }

  public profile = async (token: string): Promise<ProfileInputDTO> => {
    try {
      const { id } = Authenticator.getTokenData(token) as any 
      const profileData = await this.userDB.getUserById(id)
      const data: ProfileInputDTO ={
        email: profileData.email,
        id: profileData.id,
        name: profileData.name
      }

      return data
    }catch (error: any){
      return error
    }
  }

  public otherProfile = async (token: string, otherId: string): Promise<ProfileInputDTO> => {
    try {
      const { id } = Authenticator.getTokenData(token) as any       
      const profileData: ProfileInputDTO = await this.userDB.getUserById(id)      
      const otherProfileData: ProfileInputDTO = await this.userDB.getUserById(otherId)

      if(!profileData){
        return profileData
      }

      if(!otherProfileData){
        return otherProfileData
      }

      const data: ProfileInputDTO ={
        email: otherProfileData.email,
        id: otherProfileData.id,
        name: otherProfileData.name
      }

      return data

    }catch (error: any){
      return error
    }
  }
  
  
}
