import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/shared/models/paciente.model';

@Component({
    selector: 'app-find-patient',
    templateUrl: './new-patient.component.html',
    styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

    paciente: Paciente;

    nome: FormControl;
    cpf: FormControl;
    susId: FormControl;
    sexo: FormControl;
    dataNascimento: FormControl;
    estadoCivil: FormControl;
    profissao: FormControl;
    email: FormControl;
    telefone: FormControl;
    cep: FormControl;
    rua: FormControl;
    numero: FormControl;
    bairro: FormControl;
    complemento: FormControl;
    cidade: FormControl

    mockPaciente = {
        id: 1,
        nome: "João Ferreira dos Santos",
        cpf: "080.442.127-27",
        susId: "347628356734253",
        sexo: "Masculino",
        dataNascimento: new Date,
        estadoCivil: "Casado",
        profissao: "Herdeiro",
        email: "joao@email.com",
        telefone: "122223333",
        endereco: {
            cep: "0011122",
            rua: "Logo ali",
            numero: 100,
            bairro: "Qualquer um",
            complemento: "Bloco D",
            cidade: "Alguma",
        }
    }

    constructor() { }

    ngOnInit(): void {
        this.paciente = this.mockPaciente;

        this.inicializarCampos();
    }

    inicializarCampos() {
        this.nome = new FormControl('');
        this.cpf = new FormControl('');
        this.susId = new FormControl('');
        this.sexo = new FormControl('');
        this.dataNascimento = new FormControl('');
        this.estadoCivil = new FormControl('');
        this.profissao = new FormControl('');
        this.email = new FormControl('');
        this.telefone = new FormControl('');
        this.cep = new FormControl('');
        this.rua = new FormControl('');
        this.numero = new FormControl('');
        this.bairro = new FormControl('');
        this.complemento = new FormControl('');
        this.cidade = new FormControl('');
    }

}