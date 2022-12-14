import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

export interface TabelaTriagemModel {
    urgencia: string,
    nome: string,
    idade: string,
    pressao: string,
    temperatura: string,
    oximetro: string,
    peso: string,
    altura: string,
    dataHora: string,
    status: string,
    acao: any
}

const MOCK_DATA: TabelaTriagemModel[] = [
    {
        urgencia: 'Emergência',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Atendido',
        acao: '-'
    },
    {
        urgencia: 'Emergência',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Atendido',
        acao: '-'
    },
    {
        urgencia: 'Muito urgente',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Em atendimento',
        acao: '-'
    },
    {
        urgencia: 'Urgente',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Em atendimento',
        acao: '-'
    },
    {
        urgencia: 'Pouco urgente',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Não atendido',
        acao: '-'
    },
    {
        urgencia: 'Não urgente',
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        pressao: 'Lorem Ipsum',
        temperatura: 'Lorem Ipsum',
        oximetro: 'Lorem Ipsum',
        peso: '-',
        altura: '-',
        dataHora: '30/11/2022 às 13h',
        status: 'Não atendido',
        acao: '-'
    },
];

@Component({
    selector: 'app-triagem',
    templateUrl: './triagem.component.html',
    styleUrls: ['./triagem.component.scss']
})

export class TriagemComponent implements OnInit {

    listaUrgencia: string[];
    listaStatus: string[];

    displayedColumns: string[] = ['urgencia', 'nome', 'idade', 'pressao', 'temperatura', 'oximetro', 'peso', 'altura', 'dataHora', 'status', 'acao'];
    dataSource = MOCK_DATA;

    pacienteModalTriagem: TabelaTriagemModel;

    idade: FormControl
    pressao: FormControl
    temperatura: FormControl
    oximetro: FormControl
    peso: FormControl
    altura: FormControl
    observacoes: FormControl

    constructor(
        private offcanvasService: NgbOffcanvas
    ) { }

    ngOnInit(): void {
        this.listaUrgencia = [
            'Emergência',
            'Muito urgente',
            'Urgente',
            'Pouco urgente',
            'Não urgente'
        ];

        this.listaStatus = [
            'Atendido',
            'Em atendimento',
            'Não atendido'
        ];

        this.idade = new FormControl('')
        this.pressao = new FormControl('')
        this.temperatura = new FormControl('')
        this.oximetro = new FormControl('')
        this.peso = new FormControl('')
        this.altura = new FormControl('')
        this.observacoes = new FormControl('')
    }

    defineUrgenciaColor(urgencia: any): string {

        switch (urgencia) {
            case this.listaUrgencia[0]:
                return 'badge-urgencia-emergencia'
            case this.listaUrgencia[1]:
                return 'badge-urgencia-mto-urgente'
            case this.listaUrgencia[2]:
                return 'badge-urgencia-urgente'
            case this.listaUrgencia[3]:
                return 'badge-urgencia-pouco-urgente'
            case this.listaUrgencia[4]:
                return 'badge-urgencia-nao-urgente'
            default:
                return '';
        }
    }

    defineStatusColor(status: any): string {
        switch (status) {
            case this.listaStatus[0]:
                return 'badge-status-atendido'
            case this.listaStatus[1]:
                return 'badge-status-em-atendimento'
            case this.listaStatus[2]:
                return 'badge-status-nao-atendido'
            default:
                return '';
        }
    }

    openEnd(content: TemplateRef<any>, element: TabelaTriagemModel) {
        this.pacienteModalTriagem = element;
        this.offcanvasService.open(content, { position: 'end' });
    }

}
