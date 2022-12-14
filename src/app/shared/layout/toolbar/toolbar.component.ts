import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    showFiller: boolean = false;
    closeResult = '';
    menuPacienteAtivo: boolean;
    menuConsultasAtivo: boolean;
    menuTriagemAtivo: boolean;
    menuExameAtivo: boolean;

    constructor(
        private offcanvasService: NgbOffcanvas,
        private router: Router
    ) { 
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {

                let path = event.url.split('/')[1];

                switch (path) {
                    case 'find-patient':
                        this.menuPacienteAtivo = true;
                        this.menuConsultasAtivo = false;
                        this.menuTriagemAtivo = false;
                        this.menuExameAtivo = false;
                        break;
                    case 'consultas':
                        this.menuPacienteAtivo = false;
                        this.menuConsultasAtivo = true;
                        this.menuTriagemAtivo = false;
                        this.menuExameAtivo = false;
                        break;
                    case 'triagem':
                        this.menuPacienteAtivo = false;
                        this.menuConsultasAtivo = false;
                        this.menuTriagemAtivo = true;
                        this.menuExameAtivo = false;
                        break;
                    case 'exame':
                        this.menuPacienteAtivo = false;
                        this.menuConsultasAtivo = false;
                        this.menuTriagemAtivo = false;
                        this.menuExameAtivo = true;
                        break;
                    default:
                        break;
                }

                console.log()
            }
        });
    }

    ngOnInit(): void {
    }

    open(content: any) {
        this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === OffcanvasDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on the backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    direcionarTelaPacientes() {
        this.menuPacienteAtivo = true;
        this.menuConsultasAtivo = false;
        this.menuTriagemAtivo = false;
        this.menuExameAtivo = false;
        this.router.navigate(['find-patient']);
        this.getDismissReason(OffcanvasDismissReasons.BACKDROP_CLICK)
    }

    direcionarTelaConsultas() {
        this.menuPacienteAtivo = false;
        this.menuConsultasAtivo = true;
        this.menuTriagemAtivo = false;
        this.menuExameAtivo = false;
        this.getDismissReason(OffcanvasDismissReasons.BACKDROP_CLICK)
    }

    direcionarTelaTriagem() {
        this.menuPacienteAtivo = false;
        this.menuConsultasAtivo = false;
        this.menuTriagemAtivo = true;
        this.menuExameAtivo = false;
        this.router.navigate(['triagem']);
        this.getDismissReason(OffcanvasDismissReasons.BACKDROP_CLICK)
    }

    direcionarTelaExames() {
        this.menuPacienteAtivo = false;
        this.menuConsultasAtivo = false;
        this.menuTriagemAtivo = false;
        this.menuExameAtivo = true;
        this.getDismissReason(OffcanvasDismissReasons.BACKDROP_CLICK)
    }

}
