import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss'
})
export class ProfileContainerComponent {
  formulario: FormGroup;
  ra: string = '123456'; // Número de RA fixo

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ra: [{ value: this.ra, disabled: true }] // Campo RA desabilitado
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }
}
