import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    emailFormControl: FormControl = new FormControl('');
    passwordFormControl: FormControl = new FormControl('');

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        true
    }

    login() {
        this.router.navigate(['/find-patient']);
    }

}
