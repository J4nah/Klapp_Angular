import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss'
})
export class ProfileContainerComponent {
  nome: string = '';
  email: string = '';
  fixedNumber: number = 12345; // Número fixo que não pode ser alterado
  imageSrc: string = '/assets/images/Profile-imageG.svg';

  // Notas para os três anos
  nota1: number | null = null; // Primeiro ano
  nota2: number | null = null;
  nota3: number | null = null;
  nota4: number | null = null;

  nota1_2: number | null = null; // Segundo ano
  nota2_2: number | null = null;
  nota3_2: number | null = null;
  nota4_2: number | null = null;

  nota1_3: number | null = null; // Terceiro ano
  nota2_3: number | null = null;
  nota3_3: number | null = null;
  nota4_3: number | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  onUploadClick(): void {
    // Aciona o clique no input de arquivo oculto
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result; // Atualiza o src da imagem com o arquivo selecionado
      };

      reader.readAsDataURL(file); // Lê o arquivo e gera uma URL de dados
    }
  }

  onSubmit() {
    const formData = {
      nome: this.nome,
      email: this.email,
      numeroFixo: this.fixedNumber,
      notas: {
        primeiroAno: {
          nota1: this.nota1,
          nota2: this.nota2,
          nota3: this.nota3,
          nota4: this.nota4
        },
        segundoAno: {
          nota1: this.nota1_2,
          nota2: this.nota2_2,
          nota3: this.nota3_2,
          nota4: this.nota4_2
        },
        terceiroAno: {
          nota1: this.nota1_3,
          nota2: this.nota2_3,
          nota3: this.nota3_3,
          nota4: this.nota4_3
        }
      }
    };
    console.log(formData);
  }
}
