import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Aluno {
	Nome: string;
	RA: number;
	PontosSemana1: number;
	PontosSemana2: number;
	PontosSemana3: number;
	PontosSemana4: number;
	PontosSemana5: number;
	PontosSemana6: number;
	PontosSemana7: number;
	PontosSemana8: number;
	Media: number
}

const ALUNOS: Aluno[] = [
	{
	  "Nome": "Kauan Oliveira",
	  "RA": 210105,
	  "PontosSemana1": 5,
	  "PontosSemana2": 4,
	  "PontosSemana3": 4,
	  "PontosSemana4": 2,
	  "PontosSemana5": 4,
	  "PontosSemana6": 5,
	  "PontosSemana7": 4,
	  "PontosSemana8": 3,
	  "Media": 3.875
	},
	{
	  "Nome": "Ana Felipe",
	  "RA": 240369,
	  "PontosSemana1": 5,
	  "PontosSemana2": 5,
	  "PontosSemana3": 5,
	  "PontosSemana4": 5,
	  "PontosSemana5": 5,
	  "PontosSemana6": 5,
	  "PontosSemana7": 5,
	  "PontosSemana8": 5,
	  "Media": 5
	},
	{
	  "Nome": "Kaua Francisco",
	  "RA": 240520,
	  "PontosSemana1": 5,
	  "PontosSemana2": 5,
	  "PontosSemana3": 3,
	  "PontosSemana4": 4,
	  "PontosSemana5": 2,
	  "PontosSemana6": 2,
	  "PontosSemana7": 5,
	  "PontosSemana8": 1,
	  "Media": 3.375
	},
	{
	  "Nome": "Leandro Ferreira",
	  "RA": 248670,
	  "PontosSemana1": 4,
	  "PontosSemana2": 5,
	  "PontosSemana3": 5,
	  "PontosSemana4": 3,
	  "PontosSemana5": 3,
	  "PontosSemana6": 5,
	  "PontosSemana7": 5,
	  "PontosSemana8": 4,
	  "Media": 4.25
	},
	{
	  "Nome": "Rodrigo Junior",
	  "RA": 248609,
	  "PontosSemana1": 5,
	  "PontosSemana2": 3,
	  "PontosSemana3": 3,
	  "PontosSemana4": 0,
	  "PontosSemana5": 3,
	  "PontosSemana6": 5,
	  "PontosSemana7": 2,
	  "PontosSemana8": 4,
	  "Media": 3.125
	},
	{
	  "Nome": "Gabriel Miranda",
	  "RA": 240241,
	  "PontosSemana1": 5,
	  "PontosSemana2": 4,
	  "PontosSemana3": 5,
	  "PontosSemana4": 3,
	  "PontosSemana5": 4,
	  "PontosSemana6": 3,
	  "PontosSemana7": 5,
	  "PontosSemana8": 5,
	  "Media": 425
	},
	{
	  "Nome": "Diego Amorim",
	  "RA": 240199,
	  "PontosSemana1": 5,
	  "PontosSemana2": 2,
	  "PontosSemana3": 2,
	  "PontosSemana4": 2,
	  "PontosSemana5": 3,
	  "PontosSemana6": 4,
	  "PontosSemana7": 3,
	  "PontosSemana8": 5,
	  "Media": 3.25
	},
	{
	  "Nome": "Vitor Almeida",
	  "RA": 240238,
	  "PontosSemana1": 3,
	  "PontosSemana2": 5,
	  "PontosSemana3": 5,
	  "PontosSemana4": 5,
	  "PontosSemana5": 5,
	  "PontosSemana6": 5,
	  "PontosSemana7": 5,
	  "PontosSemana8": 5,
	  "Media": 4.75
	},
	{
	  "Nome": "Ana Oliveira",
	  "RA": 248706,
	  "PontosSemana1": 2,
	  "PontosSemana2": 2,
	  "PontosSemana3": 3,
	  "PontosSemana4": 0,
	  "PontosSemana5": 2,
	  "PontosSemana6": 2,
	  "PontosSemana7": 1,
	  "PontosSemana8": 0,
	  "Media": 1.5
	},
	{
	  "Nome": "Philippe Batzli",
	  "RA": 240376,
	  "PontosSemana1": 3,
	  "PontosSemana2": 4,
	  "PontosSemana3": 5,
	  "PontosSemana4": 5,
	  "PontosSemana5": 5,
	  "PontosSemana6": 5,
	  "PontosSemana7": 5,
	  "PontosSemana8": 5,
	  "Media": 4.625
	},
	{
	  "Nome": "Joao Souza",
	  "RA": 240653,
	  "PontosSemana1": 5,
	  "PontosSemana2": 5,
	  "PontosSemana3": 2,
	  "PontosSemana4": 2,
	  "PontosSemana5": 1,
	  "PontosSemana6": 2,
	  "PontosSemana7": 2,
	  "PontosSemana8": 1,
	  "Media": 2.5
	},
	{
	  "Nome": "Fernanda Simoes",
	  "RA": 249218,
	  "PontosSemana1": 5,
	  "PontosSemana2": 4,
	  "PontosSemana3": 5,
	  "PontosSemana4": 4,
	  "PontosSemana5": 3,
	  "PontosSemana6": 4,
	  "PontosSemana7": 4,
	  "PontosSemana8": 3,
	  "Media": 4
	},
	{
	  "Nome": "Diego Dias",
	  "RA": 240322,
	  "PontosSemana1": 5,
	  "PontosSemana2": 5,
	  "PontosSemana3": 5,
	  "PontosSemana4": 5,
	  "PontosSemana5": 5,
	  "PontosSemana6": 4,
	  "PontosSemana7": 4,
	  "PontosSemana8": 5,
	  "Media": 4.75
	},
	{
	  "Nome": "Kaick Oliveira",
	  "RA": 240328,
	  "PontosSemana1": 5,
	  "PontosSemana2": 5,
	  "PontosSemana3": 5,
	  "PontosSemana4": 5,
	  "PontosSemana5": 1,
	  "PontosSemana6": 4,
	  "PontosSemana7": 2,
	  "PontosSemana8": 3,
	  "Media": 3.75
	}
  ]

@Component({
  selector: 'app-turma-table',
  templateUrl: './turma-table.component.html',
  styleUrl: './turma-table.component.scss'
})
export class TurmaTableComponent {
  alunos = ALUNOS;
}
