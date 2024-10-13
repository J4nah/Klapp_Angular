import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss']
})
export class FaleConoscoComponent {
  onSubmit(form: NgForm) {
    console.log('Formulário enviado!', form.value);
    // Lógica de envio do formulário pode ser adicionada aqui
  }
}
