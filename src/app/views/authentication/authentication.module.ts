import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [SigninComponent],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
    ]
})
export class AuthenticationModule { }
