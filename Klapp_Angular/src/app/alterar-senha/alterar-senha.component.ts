import { Component } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrl: './alterar-senha.component.scss'
})
export class AlterarSenhaComponent {
  novaSenha: string = '';
  repetirSenha: string = '';
  senhaDiferente: boolean = false;

  onSubmit() {
    if (this.novaSenha !== this.repetirSenha) {
      this.senhaDiferente = true;
    } else {
      this.senhaDiferente = false;
      // Aqui, adicione a lógica para salvar a nova senha, se necessário
      console.log("Senha alterada com sucesso");
      // Limpa os campos de senha após o sucesso
      this.novaSenha = '';
      this.repetirSenha = '';
    }
  }
}
