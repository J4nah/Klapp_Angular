import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout-image',
  templateUrl: './logout-image.component.html', // Ajuste para o nome correto do seu arquivo de template
  styleUrls: ['./logout-image.component.scss'] // Ajuste para o nome correto do seu arquivo de estilo
})
export class LogoutImageComponent {
  notificationVisible: boolean = false;

  constructor(private userService: UserService) {}

  get userName(): string {
    const user = this.userService.getUser();
    return user ? user.name : 'Usuário'; // Nome padrão se não houver usuário
  }

  toggleNotification() {
    this.notificationVisible = !this.notificationVisible;
  }

  logout() {
    this.userService.logout(); // Limpa as informações do usuário
    // Redirecionar para a página de login ou realizar outras ações
  }
}
