import { Component } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finale';
  myForm: FormGroup;
   constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'username': ['', Validators.required],
     'email': ['', [Validators.required,Validators.email]],
     'password': ['', Validators.required],
   });
 }
}
