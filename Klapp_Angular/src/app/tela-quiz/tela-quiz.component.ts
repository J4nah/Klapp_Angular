import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-quiz',
  templateUrl: './tela-quiz.component.html',
  styleUrls: ['./tela-quiz.component.scss']
})
export class TelaQuizComponent {
  progress: number = 0;
  currentQuestionIndex: number = 0;
  totalQuestions: number = 5;
  answers: string[] = [];
  correctAnswers: string[] = ['Paris', '4', 'Júpiter', 'Machado de Assis', 'H2O'];
  score: number = 0;
  showScoreChart: boolean = false;
  selectedOption: string | null = null; // Inicializa selectedOption como null

  questions: { question: string; options: string[] }[] = [
    { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Berlim', 'Roma'] },
    { question: 'Qual é a soma de 2 + 2?', options: ['3', '4', '5', '6'] },
    { question: 'Qual é o maior planeta do sistema solar?', options: ['Terra', 'Marte', 'Júpiter', 'Saturno'] },
    { question: 'Quem escreveu "Dom Casmurro"?', options: ['Machado de Assis', 'Joaquim Manuel de Macedo', 'José de Alencar', 'Eça de Queirós'] },
    { question: 'Qual é a fórmula química da água?', options: ['H2O', 'CO2', 'O2', 'NaCl'] },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateProgress();
  }

  // Atualiza a resposta do usuário
  updateAnswer(answer: string) {
    this.answers[this.currentQuestionIndex] = answer;
  }

  // Define a opção selecionada e atualiza a resposta
  selectOption(option: string) {
    this.selectedOption = option;
    this.updateAnswer(option); // Atualiza a resposta para a pergunta atual
  }

  // Incrementa o índice da pergunta ou envia as respostas
  increaseProgress() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reseta selectedOption ao passar para a próxima pergunta
      this.updateProgress();
    } else {
      this.calculateScore();
    }
  }

  // Atualiza a barra de progresso
  updateProgress() {
    this.progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
  }

  // Calcula a pontuação do usuário
  calculateScore() {
    this.score = this.answers.filter((answer, index) => answer === this.correctAnswers[index]).length;
    this.showScoreChart = true;
  }

  // Função para enviar as respostas e redirecionar para a Home
  submitAnswers() {
    alert(`Você acertou ${this.score} de ${this.totalQuestions} questões!`);
    this.router.navigate(['/tela-aluno']);
  }

  // Função para retornar a letra da opção (A, B, C, etc.)
  getOptionLetter(index: number): string {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index];
  }
}
