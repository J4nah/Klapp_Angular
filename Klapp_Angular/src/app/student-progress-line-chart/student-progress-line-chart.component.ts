import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-student-progress-line-chart',
  templateUrl: './student-progress-line-chart.component.html',
  styleUrl: './student-progress-line-chart.component.scss'
})
export class StudentProgressLineChartComponent {

  titke = 'grafico de linha UOOOOOU'
  chart: any = []

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Criando um gradiente de cor
    const gradient = ctx!.createLinearGradient(0, 0, 0, canvas.height * 1.5); // Estendendo o gradiente 1.5x a altura do canvas
    gradient.addColorStop(0, 'rgba(0, 0, 139, 0.8)'); // Parte superior do gráfico (opaco)
    gradient.addColorStop(0.7, 'rgba(0, 0, 139, 0.3)'); // Mais próximo da base, quase transparente
    gradient.addColorStop(1, 'rgba(0, 0, 139, 0)'); // Totalmente transparente no final do eixo X

    this.chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Médias de notas',
            data: [3, 5, 7, 10, 15, 20],
            borderWidth: 2,
            borderColor: 'darkblue',
            backgroundColor: gradient, // Aplicando o gradiente como fundo
            fill: true, // Preencher área sob a linha
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            },
            grid: {
              color: 'white',
            },
          },
          x: {
            ticks: {
              color: 'white',
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
          },
        },
      },
    });
  }
}
