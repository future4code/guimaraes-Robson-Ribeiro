import * as jwt from "jsonwebtoken";

  const expiresIn: string = "1min";
  
  export const generateToken = (input: AuthenticationData) => {
    const token: string = jwt.sign(
      {
        id: input.id as string,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


type AuthenticationData = {
  id: string;
}