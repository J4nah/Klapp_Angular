import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-container-prof',
  templateUrl: './profile-container-prof.component.html',
  styleUrls: ['./profile-container-prof.component.scss']
})
export class ProfileContainerProfComponent {
  nome: string = '';
  email: string = '';
  fixedNumber: number = 123456;  // Exemplo de RA fixo
  imageSrc: string | ArrayBuffer | null = '';  // A imagem do perfil

  // Lógica para o upload da imagem
  onUploadClick(): void {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput?.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;  // Define a imagem do perfil
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log('Form Submitted', this.nome, this.email, this.fixedNumber, this.imageSrc);
  }
}
