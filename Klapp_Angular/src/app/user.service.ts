import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: { name: string } | null = null; // Armazenar informações do usuário

  constructor() {}

  // Método para definir o usuário
  setUser(name: string): void {
    this.user = { name };
  }

  // Método para obter o usuário
  getUser(): { name: string } | null {
    return this.user;
  }

  // Método para limpar o usuário (logout)
  logout(): void {
    this.user = null;
  }
}
