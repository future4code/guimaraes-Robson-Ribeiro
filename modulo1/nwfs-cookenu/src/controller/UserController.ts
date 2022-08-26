import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      private userBusiness: UserBusiness
      constructor(){
        this.userBusiness = new UserBusiness()
      }

      public signup = async (req: Request, res: Response) => {
        try {
          
          const input: UserInputDTO = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
          }

          const token = await this.userBusiness.createUser(input)
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response) => {
        try {

         const input = {
          email: req.body.email,
          password: req.body.password

         }

         const token = await this.userBusiness.login(input)

         res.status(200).send({message: "login feito com sucesso", token})
          
        } catch (error: any) {
          res.status(400).send(error.message);
        }

      }

      public profile = async (req: Request, res: Response) => {
        try {

          const token = req.headers.authorization as string
          const profile = await this.userBusiness.profile(token)

         res.status(200).send({message: "login feito com sucesso", profile: profile })
          
        } catch (error: any) {
          res.status(400).send(error.message);
        }

      }

      public otherProfile = async (req: Request, res: Response) => {
        try {

          const token = req.headers.authorization as string
          const otherId = req.params.id as string
          const profile = await this.userBusiness.otherProfile(token, otherId)

         res.status(200).send({message: "perfil do usuário", profile: profile })
          
        } catch (error: any) {
          res.status(400).send(error.message);
        }

      }
    
 



}
