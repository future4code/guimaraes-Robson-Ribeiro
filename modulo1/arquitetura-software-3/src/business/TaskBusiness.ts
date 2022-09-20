import { TaskDatabase } from "../data/TaskDatabase";
import { CustomError } from "../error/CustomError";
import { TaskInputDTO } from "../model/TaskDTO";
import { generetId } from "../services/generateId";

export class TaskBusiness {
  public createTask = async (input: TaskInputDTO) => {
    try {
      const { title, description, deadline, authorId } = input;

      if (!title || !description || !deadline || !authorId) {
        throw new CustomError('"title", "description", "deadline" e "authorId" são obrigatórios', 404);
      }

      const id: string = generetId()

      const taskDatabase = new TaskDatabase();
      await taskDatabase.insertTask({
        id,
        title,
        description,
        deadline,
        authorId,
      });
    } catch (error: any) {
      throw new CustomError(error.message, 500);
    }
  };
}
