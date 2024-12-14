import { Component, ViewChild, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';  // Importando para verificar se está no navegador

Chart.register(...registerables);

interface Aluno {
  Nome: string;
  RA: number;
  Media: number;
  [key: string]: number | string;  // Allow dynamic properties
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
		"Media": 4.25
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
  selector: 'app-grafico-media-alunos',
  templateUrl: './grafico-media-alunos.component.html',
  styleUrls: ['./grafico-media-alunos.component.scss']
})
export class GraficoMediaAlunosComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement> | undefined;
  chart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifique se estamos no navegador antes de manipular o canvas
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.canvasRef?.nativeElement;
      const ctx = canvas?.getContext('2d');

      if (ctx) {
        // Criar o gradiente para o gráfico
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas!.height * 1.5);
        gradient.addColorStop(0, 'rgba(0, 0, 139, 0.8)');
        gradient.addColorStop(0.7, 'rgba(0, 0, 139, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 139, 0)');

        // Calcular as médias semanais
        const weeklyAverages = this.calculateWeeklyAverages(ALUNOS);

        // Criar o gráfico
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8'],
            datasets: [
              {
                label: 'Média Semanal',
                data: weeklyAverages,
                borderWidth: 2,
                borderColor: 'darkblue',
                backgroundColor: gradient,
                fill: true
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: 'white'
                },
                grid: {
                  color: 'white'
                }
              },
              x: {
                ticks: {
                  color: 'white'
                },
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: 'white'
                }
              }
            }
          }
        });
      }
    }
  }

  calculateWeeklyAverages(alunos: Aluno[]): number[] {
    const weeklyAverages = [];

    for (let i = 0; i < 8; i++) {
      const weekPoints = alunos.map(aluno => Number(aluno[`PontosSemana${i + 1}`]));
      const weekAverage = weekPoints.reduce((sum, points) => sum + points, 0) / alunos.length;
      weeklyAverages.push(weekAverage);
    }

    return weeklyAverages;
  }
}
