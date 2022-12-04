import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.scss']
})
export class FindPatientComponent implements OnInit {

  emailFormControl: FormControl = new FormControl('');

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/new-patient']);
  }


}
