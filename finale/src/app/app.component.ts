import { Component } from '@angular/core';
import { Registrazione } from './registrazione';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';
import { Registrazioni } from './mock-utenti';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finale';
  myForm: FormGroup;
  registrazioni: Registrazione[] = Registrazioni;
   constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'username': ['', Validators.required],
     'email': ['', [Validators.required, Validators.email]],
     'password': ['', Validators.required],
   });
 }
   onSubmit(): void {

    let registrazione: Registrazione = new Registrazione();
    registrazione.nome = this.myForm.controls['nome'].value;
    registrazione.cognome = this.myForm.controls['cognome'].value;
    registrazione.username = this.myForm.controls['username'].value;
    registrazione.email = this.myForm.controls['email'].value;
   
    this.registrazioni.push(registrazione);
  }
}