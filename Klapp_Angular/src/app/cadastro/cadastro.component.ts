import { Component } from '@angular/core';
import { UserService } from '../user.service';

type UserType = 'aluno' | 'professor' | '';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  step: number = 1;
  userType: UserType = '';
  isFormSubmitted: boolean = false;
  isPasswordFormSubmitted: boolean = false;
  isSubmitting: boolean = false;  // Variável para controlar o estado de envio

  userData = {
    name: '',
    email: '',
    ra: '',
    curso: '',
    semestre: '',
    titulacao: '',
    departamento: '',
    senha: '',
    confirmSenha: ''
  };

  cursos = [
    { id: 1, nome: 'Engenharia de Software' },
    { id: 2, nome: 'Ciência da Computação' },
    { id: 3, nome: 'Sistemas de Informação' }
  ];

  semestres = ['2023S1', '2023S2', '2024S1', '2024S2'];

  titulacoes = ['Graduação', 'Especialização', 'Mestrado', 'Doutorado', 'Pós-Doutorado'];

  departamentos = ['Ciências da Computação', 'Engenharia', 'Matemática', 'Física'];

  constructor(private userService: UserService) {}

  printUserData() {
    console.log(this.userData);
  }

  selectUser(type: UserType): void {
    this.userType = type;
    this.step = 2;
    this.isFormSubmitted = false;
    this.isPasswordFormSubmitted = false; // Resetar também a validação de senha
  }

  goToStep(step: number): void {
    this.isFormSubmitted = true;
    if (this.validateCurrentStep()) {
      this.step = step;
      this.isFormSubmitted = false; // Resetar a validação ao mudar de etapa
      this.isPasswordFormSubmitted = false; // Resetar a validação de senha
    }
  }

  goBack(): void {
    if (this.step > 1) {
      this.step--;
      this.isFormSubmitted = false;
      this.isPasswordFormSubmitted = false;
    }
  }

  private validateCurrentStep(): boolean {
    let valid = true;

    switch (this.step) {
      case 2:
        if (!this.userData.name || !this.userData.email ||
          (this.userType === 'aluno' && !this.userData.ra) ||
          (this.userType === 'professor' && !this.userData.titulacao)) {
          valid = false;
        }
        break;
      case 3:
        if (this.isPasswordFormSubmitted && (!this.userData.senha || !this.userData.confirmSenha ||
          this.userData.senha !== this.userData.confirmSenha)) {
          valid = false;
        }
        break;
    }

    return valid;
  }

  async submitForm(): Promise<void> {
    this.isPasswordFormSubmitted = true; // Ativar validação apenas ao tentar finalizar
    if (this.validateCurrentStep()) {
      this.isSubmitting = true; // Iniciar o estado de submissão (botão desabilitado)
      
      try {
        // Envia os dados do usuário para a API
        await this.userService.createUser(
          this.userData.name,
          this.userData.email,
          this.userData.ra,
          this.userData.curso,
          this.userData.semestre,
          this.userData.senha,
        );
        console.log('Cadastro realizado:', this.userData);
        this.step = 4; // Passar para a etapa de sucesso
      } catch (error) {
        console.error('Erro ao criar o usuário:', error);
        alert('Erro ao cadastrar o usuário. Tente novamente!');
      } finally {
        this.isSubmitting = false; // Restaura o estado de submissão, caso o processo termine
      }
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  resetForm(): void {
    this.step = 1;
    this.userType = '';
    this.userData = {
      name: '',
      email: '',
      ra: '',
      curso: '',
      semestre: '',
      titulacao: '',
      departamento: '',
      senha: '',
      confirmSenha: ''
    };
    this.isFormSubmitted = false;
    this.isPasswordFormSubmitted = false;
  }

  getStepTitle(): string {
    switch (this.step) {
      case 1:
        return 'Bem-vindo ao Cadastro';
      case 2:
        return `Cadastro de ${this.userType.charAt(0).toUpperCase() + this.userType.slice(1)}`;
      case 3:
        return 'Criação de Senha';
      case 4:
        return 'Cadastro Realizado';
      default:
        return '';
    }
  }
}
