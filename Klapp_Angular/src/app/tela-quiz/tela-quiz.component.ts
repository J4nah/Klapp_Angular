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
  correctAnswers: string[] = ['Um espaço na memória onde armazenamos temporariamente dados.', 'Operador de atribuição (=).', '5 + 2.', 'Scanner.nextLine().', 'System.out.println("Bem-vindo ao curso!").'];
  score: number = 0;
  showScoreChart: boolean = false;
  selectedOption: string | null = null; // Inicializa selectedOption como null

  questions: { question: string; options: string[] }[] = [
    { question: 'O que é uma variável em programação Java?', options: ['Um espaço na memória onde armazenamos temporariamente dados.', 'Um programa que processa informações automaticamente.', 'Um dispositivo de entrada de dados.', 'Um tipo de banco de dados usado para armazenar grandes volumes de informação.'] },
/* ------------------------------------------------------------------------------------------------------------------------------------ */
    { question: 'Qual operador é usado para atribuir um valor a uma variável em Java?', options: ['Operador de adição (+).', 'Operador de subtração (-).', 'Operador de multiplicação (*).', 'Operador de atribuição (=).'] },
/* ------------------------------------------------------------------------------------------------------------------------------------ */
    { question: 'Qual das alternativas abaixo é uma operação válida de soma em Java?', options: ['"texto" + 10.', '5 + 2.', '"Java" + Programação.', '10 + "5".'] },
/* ------------------------------------------------------------------------------------------------------------------------------------ */
    { question: 'Qual método é utilizado para capturar a entrada de dados do usuário em Java?', options: ['System.out.print().', 'Scanner.nextLine().', 'input().', 'Eread().'] },
/* ------------------------------------------------------------------------------------------------------------------------------------ */
    { question: 'Como podemos imprimir a mensagem "Bem-vindo ao curso!" em Java?', options: ['show("Bem-vindo ao curso!").', 'write("Bem-vindo ao curso!").', 'System.out.println("Bem-vindo ao curso!").', 'print("Bem-vindo ao curso!").'] },
  ];
/* ------------------------------------------------------------------------------------------------------------------------------------ */

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
