import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/Recipe";

export class RecipeController {

      private recipeBusiness: RecipeBusiness
      constructor(){
        this.recipeBusiness = new RecipeBusiness()
      }

      public createRecipe = async (req: Request, res: Response) => {
        try {
          
          const recipe: RecipeInputDTO = {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            idUser:  req.body.idUser
          }

            await this.recipeBusiness.createRecipe(recipe)
    
            res.status(201).send({ message: "Usuário criado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

    //   public login = async (req: Request, res: Response) => {
    //     try {

    //      const input = {
    //       email: req.body.email,
    //       password: req.body.password

    //      }

    //      const token = await this.userBusiness.login(input)

    //      res.status(200).send({message: "login feito com sucesso", token})
          
    //     } catch (error: any) {
    //       res.status(400).send(error.message);
    //     }

    //   }
    
}
