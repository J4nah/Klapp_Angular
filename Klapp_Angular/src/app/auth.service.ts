import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL da sua API

  constructor(private router: Router, private userService: UserService) {}

  login(email: string, senha: string): Promise<any> {
    return fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha }) // Usa email e senha conforme a API
    })
    .then(response => {
      // Verifica se o status é 200 (OK)
      if (response.status === 200) {
        return response.json(); // Retorna o JSON se a resposta for bem-sucedida
      } else {
        throw new Error('Credenciais inválidas ou erro no servidor.'); // Lida com outros status
      }
    })
    .then(data => {
      // A lógica de sucesso depende do formato de resposta da API
      this.userService.setUser(data.user.nome);
      alert(data.message); // Mostra mensagem de sucesso do login
      this.router.navigate(['/tela-aluno']); // Redireciona para a tela do aluno
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      alert('Ocorreu um erro ao fazer login: ' + error.message); // Mensagem de erro
    });
  }

  // Outros métodos de autenticação...
}
