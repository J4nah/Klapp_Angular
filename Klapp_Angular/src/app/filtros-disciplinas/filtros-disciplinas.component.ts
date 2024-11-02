// filtros-disciplinas.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

interface Disciplina {
  nome: string;
  selecionada: boolean;
}

@Component({
  selector: 'app-filtros-disciplinas',
  templateUrl: './filtros-disciplinas.component.html',
  styleUrls: ['./filtros-disciplinas.component.scss']
})
export class FiltrosDisciplinasComponent {
  @Output() filtrosChange = new EventEmitter<string[]>();

  disciplinas: Disciplina[] = [
    { nome: 'Ciências Exatas', selecionada: false },
    { nome: 'Sustentabilidade', selecionada: false },
    { nome: 'Arquitetura de computadores', selecionada: false },
    { nome: 'Construção de Algoritmos', selecionada: false },
    { nome: 'Banco de Dados', selecionada: false },
    { nome: 'Fundamentos de Sistemas de Informação', selecionada: false }
  ];

  onFilterChange(): void {
    this.emitSelectedDisciplines();
  }

  aplicarFiltros(): void {
    this.emitSelectedDisciplines();
  }

  private emitSelectedDisciplines(): void {
    const selectedDisciplines = this.disciplinas
      .filter(d => d.selecionada)
      .map(d => d.nome);
    this.filtrosChange.emit(selectedDisciplines);
  }
}