// messages-scroll.component.ts
import { Component, OnInit } from '@angular/core';

interface Post {
  id: number;
  author: string;
  authorImage: string;
  title: string;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-messages-scroll',
  templateUrl: './messages-scroll.component.html',
  styleUrls: ['./messages-scroll.component.scss']
})

export class MessagesScrollComponent implements OnInit {
  posts: Post[] = [
    {
      id: 1,
      author: 'João Silva',
      authorImage: 'assets/images/Profile-image.svg',
      title: 'Erro na tarefa',
      content: 'Mais alguém não conseguiu fazer a tarefa de semana passada?',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3) // 3 dias atrás
    },
    {
      id: 2,
      author: 'Maria Machado',
      authorImage: 'assets/images/Profile-image.svg',
      title: 'Resposta ao João',
      content: 'O professor disse que você pode fazer do seu jeito mesmo, não precisa estar igualzinho ao exemplo',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2) // 2 dias atrás
    },
    {
      id: 3,
      author: 'Marco Belo',
      authorImage: 'assets/images/Profile-image.svg',
      title: 'Erro na tarefa x2',
      content: 'Aqui tbm n deu',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 5) // 5 horas atrás
    },
    {
      id: 4,
      author: 'Felipe Diri',
      authorImage: 'assets/images/Profile-image.svg',
      title: 'Tarefa passada',
      content: 'Aqui deu certo normal',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 60 * 1) // 1 hora atrás
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch posts from your service here
  }
}
