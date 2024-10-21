import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Verifique se este arquivo existe no caminho correto
})
export class LoginComponent {
  username: string = ''; // Inicializando com uma string vazia
  password: string = ''; // Inicializando com uma string vazia

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Lógica de login aqui (por exemplo, autenticação)
      this.router.navigate(['/tela-aluno']);
    }
  }
}
