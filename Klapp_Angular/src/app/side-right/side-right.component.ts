import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrl: './side-right.component.scss'
})
export class SideRightComponent {
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
  }
}