import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationModule } from './views/authentication/authentication.module';
import { FindPatientModule } from './views/find-patient/find-patient.module';
import { NewPatientModule } from './views/new-patient/new-patient.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        AuthenticationModule,
        FindPatientModule,
        NewPatientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
