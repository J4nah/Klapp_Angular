import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking-message',
  templateUrl: './ranking-message.component.html',
  styleUrl: './ranking-message.component.scss'
})
export class RankingMessageComponent {
  rank: number = 7; // valor padrão, mas pode ser alterado
}
