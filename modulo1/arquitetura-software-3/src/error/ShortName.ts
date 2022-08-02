import { CustomError } from "./CustomError";

export class ShortName extends CustomError{
    constructor(){
        super("O nome é muito curto",400)
    }
}