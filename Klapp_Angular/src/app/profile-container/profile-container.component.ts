import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {
  nome: string = '';
  email: string = '';
  fixedNumber: number = 0;
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

  constructor(private userService: UserService) {}

  @ViewChild('fileInput') fileInput!: ElementRef;

  ngOnInit() {
    this.populateProfile();
  }

  populateProfile(): void {
    const user = this.userService.getUser();
    if (user) {
      this.nome = user.nome;
      this.email = user.email;
      this.fixedNumber = parseInt(user.ra, 10); // Assumindo que o RA é um número
    }
  }

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

  onSubmit(): void {
    const user = this.userService.getUser();
    if (user) {
      // Chamando o método de atualização
      this.userService.updateUser(user.id, this.nome, this.email);
    }
  }
}
