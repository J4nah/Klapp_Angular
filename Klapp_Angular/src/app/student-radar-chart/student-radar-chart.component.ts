import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-student-radar-chart',
  templateUrl: './student-radar-chart.component.html',
  styleUrl: './student-radar-chart.component.scss'
})
export class StudentRadarChartComponent {

  chart: any = [];

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementById('radarCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Criando o gradiente de cor
    const gradient = ctx!.createLinearGradient(0, 0, 0, canvas.height * 1.5);
    gradient.addColorStop(0, 'rgba(0, 0, 139, 0.8)');  // Cor opaca no topo
    gradient.addColorStop(0.7, 'rgba(0, 0, 139, 0.2)');  // Quase transparente no meio
    gradient.addColorStop(1, 'rgba(0, 0, 139, 0)');  // Totalmente transparente no final

    this.chart = new Chart(ctx!, {
      type: 'radar',
      data: {
        labels: ['Intuitivo', 'Global', 'Verbal', 'Sequencial', 'Visual', 'Sensorial', 'Ativo', 'Reflexivo'],
        datasets: [
          {
            label: 'Desempenho do Aluno',
            data: [85, 100, 75, 95, 100, 80, 100, 90],
            borderWidth: 2,
            borderColor: 'darkblue',
            backgroundColor: gradient, // Aplicando o gradiente
            fill: true,
          },
          /* {
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            pointRadius: 0,
          }, */
        ],
      },
      options: {
        scales: {
          r: {  // Configurações do eixo radial
            ticks: {
              display: false,  // Esconde os números no centro
            },
            pointLabels: {
              color: 'white',  // Muda a cor das labels ao redor do gráfico
              font: {
                size: 14  // Tamanho da fonte das labels
              }
            },
            grid: {
              color: 'white',  // Cor das linhas do grid
            },
            angleLines: {
              color: 'white',  // Linhas entre os pontos
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',  // Cor da legenda
            },
          },
        },
      },
    });
  }

}
