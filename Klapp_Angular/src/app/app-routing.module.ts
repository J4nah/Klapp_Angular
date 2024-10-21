import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importar o componente de Login
import { TelaAlunoComponent } from './tela-aluno/tela-aluno.component'; // Importar o componente da Tela do Aluno
import { PrincipalComponent } from './principal/principal.component'; // Importar o componente principal
import { QuemSomosComponent } from './quem-somos/quem-somos.component'; // Importar o componente "Quem Somos"
import { EducacaoParaTodosComponent } from './educacao-para-todos/educacao-para-todos.component'; // Importar o componente "Educação para Todos"
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component'; // Importar o componente "Como Funciona"
import { DestaquesComponent } from './destaques/destaques.component'; // Importar o componente "Destaques"
import { VisaoComponent } from './visao/visao.component'; // Importar o componente "Visão"
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component'; // Importar o componente "Avaliações"
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component'; // Importar o componente "Fale Conosco"
import { LandingCompletaComponent } from './landing-completa/landing-completa.component';

const routes: Routes = [
  { path: '', component: LandingCompletaComponent }, // Rota inicial para o componente Principal
  { path: 'login', component: LoginComponent }, // Rota para o Login
  { path: 'tela-aluno', component: TelaAlunoComponent }, // Rota para a Tela do Aluno
  { path: 'quem-somos', component: QuemSomosComponent }, // Rota para "Quem Somos"
  { path: 'educacao-para-todos', component: EducacaoParaTodosComponent }, // Rota para "Educação para Todos"
  { path: 'como-funciona', component: ComoFuncionaComponent }, // Rota para "Como Funciona"
  { path: 'destaques', component: DestaquesComponent }, // Rota para "Destaques"
  { path: 'visao', component: VisaoComponent }, // Rota para "Visão"
  { path: 'avaliacoes', component: AvaliacoesComponent }, // Rota para "Avaliações"
  { path: 'fale-conosco', component: FaleConoscoComponent }, // Rota para "Fale Conosco"
  // Adicione mais rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração de rotas para a aplicação
  exports: [RouterModule] // Exporta o RouterModule para uso em outros módulos
})
export class AppRoutingModule { }
