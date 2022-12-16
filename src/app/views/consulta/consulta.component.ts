import { Component, OnInit } from '@angular/core';
import { TabelaConsultaModel } from 'src/app/shared/models/tabelaConsultaModel.model';


const rua = 'Rua Pedro Chiurato';
const numero = 758;
const bairro = 'Quissiana';

const MOCK_DATA: TabelaConsultaModel[] = [
    {
        urgencia: 'Emergência',
        id: 4363545,
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        endereco: `${rua}, ${numero}, ${bairro}`,
        cidade: 'Curitiba',
        estado: 'PR',
        dataAtendimento: null,
        status: 'Em atendimento',
        acao: '-'
    },
    {
        urgencia: 'Muito urgente',
        id: 4363545,
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        endereco: `${rua}, ${numero}, ${bairro}`,
        cidade: 'Curitiba',
        estado: 'PR',
        dataAtendimento: '30/11/2022 às 13h15',
        status: 'Atendido',
        acao: '-'
    },
    {
        urgencia: 'Não urgente',
        id: 4363545,
        nome: 'João Ferreira dos Santos',
        idade: `${52} anos`,
        endereco: `${rua}, ${numero}, ${bairro}`,
        cidade: 'Curitiba',
        estado: 'PR',
        dataAtendimento: null,
        status: 'Aguardando',
        acao: '-'
    },
];

@Component({
    selector: 'app-consulta',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

    listaUrgencia: string[];
    listaStatus: string[];

    displayedColumns: string[] = ['urgencia', 'id', 'nome', 'idade', 'endereco', 'cidade', 'estado', 'dataAtendimento', 'status', 'acao'];
    dataSource = MOCK_DATA;

    pacienteModalConsulta: TabelaConsultaModel;

    constructor() { }

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
            'Aguardando'
        ];
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

}
