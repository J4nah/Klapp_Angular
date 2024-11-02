// make-publication.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-make-publication',
  templateUrl: './make-publication.component.html',
  styleUrls: ['./make-publication.component.scss']
})
export class MakePublicationComponent {
  classes = [
    'Algoritmos',
    'Programação Orientada a Objetos',
    'Banco de Dados',
    'Análise de Sistemas',
    'Redes de Computadores'
  ];

  publication = {
    subject: '',
    class: '',
    message: ''
  };

  onSubmit() {
    // Handle submission logic here
    console.log('Publication submitted:', this.publication);
  }
}