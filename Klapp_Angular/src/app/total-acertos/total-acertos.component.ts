import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-total-acertos',
  templateUrl: './total-acertos.component.html',
  styleUrls: ['./total-acertos.component.scss']
})
export class TotalAcertosComponent implements OnInit {
  @Input() score: number = 0;
  @Input() totalQuestions: number = 0;
  chart: any = [];

  ngOnInit() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const correctPercentage = (this.score / this.totalQuestions) * 100;

    // Define o texto de porcentagem no elemento h1
    const scorePercentageElement = document.getElementById('score-percentage')!;
    scorePercentageElement.textContent = `${correctPercentage.toFixed(2)}%`;

    const incorrectPercentage = 100 - correctPercentage;

    const data = {
      labels: ['Acertos', 'Erros'],
      datasets: [
        {
          label: 'Pontuação do Quiz',
          data: [correctPercentage, incorrectPercentage],
          backgroundColor: ['#474A89', 'rgba(255, 255, 255, 0.3)'],
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
          }
        }
      },
    });
  }
}
