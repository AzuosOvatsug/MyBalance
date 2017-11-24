import {Disciplina} from "./disciplina.model";
export class Professor {
    constructor(public nome: string,
                public disciplina: Disciplina) {
    }
  }