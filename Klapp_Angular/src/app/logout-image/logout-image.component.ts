import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-image',
  templateUrl: './logout-image.component.html',
  styleUrls: ['./logout-image.component.scss']
})
export class LogoutImageComponent implements OnInit {
  notificationVisible = true;

  ngOnInit() {
    setTimeout(() => {
      this.notificationVisible = false;
    }, 5000); // A notificação permanece visível por 5 segundos
  }
}
