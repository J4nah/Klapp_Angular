import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class AvaliacoesComponent {
  constructor(config: NgbRatingConfig) {
   
    config.max = 5;
    config.readonly = true;
  }
 
}
