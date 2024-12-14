import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-quizzes',
  templateUrl: './teacher-quizzes.component.html',
  styleUrls: ['./teacher-quizzes.component.scss']  // Corrigido 'styleUrl' para 'styleUrls'
})
export class TeacherQuizzesComponent {
  selectedDiscipline: string | null = null;

  // Função chamada quando o usuário seleciona uma disciplina
  selectDiscipline(discipline: string) {
    this.selectedDiscipline = discipline;  // Atualiza o valor selecionado
  }

  selectedClass: string | null = null;

  // Função chamada quando o usuário seleciona uma classe
  selectClass(className: string) {   // Alterado de 'class' para 'className'
    this.selectedClass = className;
  }

  selectedDuration: string | null = null;

  selectDuration(duration: string) {
    this.selectedDuration = duration;
}
}