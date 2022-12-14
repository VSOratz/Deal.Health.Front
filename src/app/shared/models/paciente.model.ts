import { Endereco } from "./endereco.model";

export class Paciente {
    id?: number;
    nome: string;
    cpf: string;
    susId: string;
    sexo: string;
    dataNascimento: Date;
    estadoCivil: string;
    profissao: string;
    email: string;
    telefone: string;
    endereco: Endereco
}