import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-quiz',
  templateUrl: './tela-quiz.component.html',
  styleUrls: ['./tela-quiz.component.scss']
})
export class TelaQuizComponent {
  progress: number = 0; // Valor inicial de progresso
  clickCount: number = 0; // Contador de cliques
  totalQuestions: number = 5; // Total de perguntas
  answers: string[] = []; // Array para armazenar as respostas
  currentQuestionIndex: number = 0; // Índice da pergunta atual

  questions: { question: string; options: string[] }[] = [ // Exemplo de perguntas
    { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Berlim', 'Roma'] },
    { question: 'Qual é a soma de 2 + 2?', options: ['3', '4', '5', '6'] },
    { question: 'Qual é o maior planeta do sistema solar?', options: ['Terra', 'Marte', 'Júpiter', 'Saturno'] },
    { question: 'Quem escreveu "Dom Casmurro"?', options: ['Machado de Assis', 'Joaquim Manuel de Macedo', 'José de Alencar', 'Eça de Queirós'] },
    { question: 'Qual é a fórmula química da água?', options: ['H2O', 'CO2', 'O2', 'NaCl'] },
  ];

  // Atualiza a resposta do usuário
  updateAnswer(answer: string) {
    this.answers[this.currentQuestionIndex] = answer; // Armazena a resposta no índice correspondente
  }

  // Incrementa o índice da pergunta ou envia as respostas
  increaseProgress() {
    this.clickCount++; // Incrementa o contador de cliques

    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.updateProgress();
    } else {
      // Envia as respostas se for o último clique
      this.submitAnswers();
    }
  }

  // Atualiza a barra de progresso
  updateProgress() {
    this.progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100; // Calcula o progresso em % 
  }

  // Função para enviar as respostas
  submitAnswers() {
    console.log('Respostas enviadas:', this.answers);
    alert('Respostas enviadas com sucesso!');
    // Aqui você pode adicionar a lógica para enviar as respostas para o servidor
  }

  // Função para retornar a letra da opção
  getOptionLetter(index: number): string {
    const letters = ['A', 'B', 'C', 'D', 'E']; // Lista de letras
    return letters[index];
  }

  // Inicializa a barra de progresso ao começar
  ngOnInit() {
    this.updateProgress(); // Chama para definir o progresso inicial
  }
}
