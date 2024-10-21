import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { NgForm } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    // Mock do Router
    const routerMock = {
      navigate: jasmine.createSpy('navigate') // Espião para o método navigate
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importa FormsModule para usar ngModel
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: routerMock }] // Fornece o mock do Router
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Injetando o mock do Router
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to tela-aluno on successful login', () => {
    // Simulando valores válidos para o formulário
    const mockForm: NgForm = {
      valid: true, // Simulando um formulário válido
      resetForm: () => {}, // Mock do método resetForm
    } as NgForm;

    // Definindo o nome de usuário e senha
    component.username = 'test@example.com';
    component.password = 'password';

    // Chamar o método onSubmit
    component.onSubmit(mockForm);  

    // Verificar se o método navigate foi chamado corretamente
    expect(router.navigate).toHaveBeenCalledWith(['/tela-aluno']);
  });
});

