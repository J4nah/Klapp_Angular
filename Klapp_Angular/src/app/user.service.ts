import { Injectable } from '@angular/core';

export interface userModel {
  id: string;
  nome: string;
  email: string;
  ra: string;
  curso: string;
  semestreIngresso: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: userModel | null;

  constructor() { }

  // Método para definir o usuário
  setUser(user: userModel): void {
    this.user = user;
  }

  // Método para obter o usuário
  getUser(): userModel | null {
    return this.user;
  }

  // Método para limpar o usuário (logout)
  logout(): void {
    this.user = null;
  }

  // Método para atualizar o usuário no banco de dados
  updateUser(id: string, nome: string, email: string): void {
    const apiUrl: string = `http://localhost:3000/usuario`;
    
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        nome: nome,
        email: email,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Usuário atualizado com sucesso') {
        // Atualizar o usuário localmente
        if (this.user) {
          this.user.nome = nome;
          this.user.email = email;
        }
        alert('Usuário atualizado com sucesso!');
      } else {
        alert('Erro ao atualizar usuário: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Erro ao atualizar usuário:', error);
      alert('Ocorreu um erro ao tentar atualizar o usuário: ' + error.message);
    });
  }

  // Método para criar usuário no banco
  createUser(nome: string, email: string, ra: string, curso: string, semestreIngresso: string, senha: string) {
    const apiUrl: string = 'http://localhost:3000/usuario';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, ra, curso, semestreIngresso, senha })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert(data.message);
    })
    .catch(error => {
      console.error('Erro ao criar usuario:', error);
      alert('Ocorreu um erro ao criar usuario: ' + error.message);
    });
  }
}
