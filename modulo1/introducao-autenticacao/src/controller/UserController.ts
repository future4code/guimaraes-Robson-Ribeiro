import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, UserSignUpDTO } from "../model/user";
import { generateToken } from "../services/generateToken";
import { idGenerate } from "../services/idGenerate";

export class UserController {

      public createUser = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
          
          const _idGenerate = new idGenerate()
          const id = _idGenerate.generateId()

          const input: UserInputDTO = {
            id: id,
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()

          const user = await userBusiness.createUser(input);
          
          const token = generateToken({ id: id }) 
    
          res.status(201).send({ message: "Usuário criado!", user: user, token: "token gerado pelo jwt"});

        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  
      
      public getUserByEmail = async (req: Request, res: Response) =>{
        try {
          const { email } = req.params;

          const userBusiness = new UserBusiness()
          const user = await userBusiness.getUserByEmail(email);
    
          res.status(200).send(user);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
