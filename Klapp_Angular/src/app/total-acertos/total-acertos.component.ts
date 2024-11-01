import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-total-acertos',
  templateUrl: './total-acertos.component.html',
  styleUrls: ['./total-acertos.component.scss']
})
export class TotalAcertosComponent {
  @Input() score: number = 0; // Definindo score como um input
  @Input() totalQuestions: number = 0; // Definindo totalQuestions como um input
  chart: any = [];
  actions = [
    {
      name: 'Randomize',
      handler: (chart: any) => {
        chart.data.datasets.forEach((dataset: { data: number[]; }) => {
          dataset.data = this.generateRandomData(chart.data.labels.length);
        });
        chart.update();
      }
    },
    {
      name: 'Add Dataset',
      handler: (chart: any) => {
        const newDataset = {
          label: 'Dataset ' + (chart.data.datasets.length + 1),
          backgroundColor: this.getRandomColors(chart.data.labels.length),
          data: this.generateRandomData(chart.data.labels.length),
        };

        chart.data.datasets.push(newDataset);
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler: (chart: any) => {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels.push('data #' + (data.labels.length + 1));

          data.datasets.forEach((dataset: { data: number[]; }) => {
            dataset.data.push(this.getRandomNumber(0, 100));
          });

          chart.update();
        }
      }
    },
    {
      name: 'Remove Dataset',
      handler: (chart: any) => {
        chart.data.datasets.pop();
        chart.update();
      }
    },
    {
      name: 'Remove Data',
      handler: (chart: any) => {
        chart.data.labels.splice(-1, 1); // remove the last label

        chart.data.datasets.forEach((dataset: { data: void[]; }) => {
          dataset.data.pop();
        });

        chart.update();
      }
    }
  ];

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const data = {
      labels: ['Acertos', 'Erros'],
      datasets: [
        {
          label: 'Dataset 1',
          data: this.generateRandomData(5), // Inicializa com dados aleatórios
          backgroundColor: this.getRandomColors(5), // Cores aleatórias
        }
      ]
    };

    this.chart = new Chart(ctx!, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Total de Acertos'
          }
        }
      },
    });
  }

  generateRandomData(count: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  }

  getRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${Math.random() * 360}, 100%, 50%)`); // Cores HSL aleatórias
    }
    return colors;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
