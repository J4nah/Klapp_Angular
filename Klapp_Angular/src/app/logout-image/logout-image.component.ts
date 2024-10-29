import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-image',
  templateUrl: './logout-image.component.html',
  styleUrls: ['./logout-image.component.scss']
})
export class LogoutImageComponent {
  notificationVisible = false; // Inicialmente, a notificação está oculta

  // Função para alternar a visibilidade da notificação ao clicar no ícone de sino
  toggleNotification() {
    this.notificationVisible = true; // Exibe a notificação quando o ícone é clicado
    setTimeout(() => {
      this.notificationVisible = false; // Esconde a notificação após 5 segundos
    }, 5000);
  }
}
