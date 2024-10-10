import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value);
    // Aqui você pode adicionar a lógica de autenticação
  }
}
