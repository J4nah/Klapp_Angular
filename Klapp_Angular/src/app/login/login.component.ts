import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  senha: string = ''; 
  role: string = '';  // Variável para armazenar o tipo de usuário

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      // Verifique se a variável 'role' foi preenchida
      if (!this.role) {
        console.error('Por favor, selecione o tipo de usuário');
        alert('Por favor, selecione o tipo de usuário');
        return; // Impede o login se o tipo de usuário não foi selecionado
      }

      // Tente o login
      const loginSuccess = await this.authService.login(this.username, this.senha);

      if (loginSuccess) {
        // Exibe o valor de 'role' no console para depuração
        console.log('Tipo de usuário selecionado:', this.role);
        
        // Lógica de redirecionamento baseada no tipo de usuário
        if (this.role === 'professor') {
          this.router.navigate(['/select-turmas']);
        } else if (this.role === 'aluno') {
          this.router.navigate(['/tela-aluno']);
        } else {
          console.error('Tipo de usuário inválido');
          alert('Tipo de usuário inválido!');
        }
      }
    }
  }
}
