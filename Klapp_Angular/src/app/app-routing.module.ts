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
import { StudentQuizzes01Component } from './student-quizzes01/student-quizzes01.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TelaQuizComponent } from './tela-quiz/tela-quiz.component';
import { StudentForumComponent } from './student-forum/student-forum.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SelectTurmasComponent } from './select-turmas/select-turmas.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';
import { PerfilProfComponent } from './perfil-prof/perfil-prof.component';
import { QuizProfComponent } from './quiz-prof/quiz-prof.component';
import { ForumProfComponent } from './forum-prof/forum-prof.component';

const routes: Routes = [
  { path: '', component: LandingCompletaComponent }, // Rota inicial para o componente Principal
  { path: 'login', component: LoginComponent }, // Rota para o Login
  {path: 'cadastro', component: CadastroComponent}, //Rota de cadastro uou
  { path: 'tela-aluno', component: TelaAlunoComponent }, // Rota para a Tela do Aluno
  { path: 'quem-somos', component: QuemSomosComponent }, // Rota para "Quem Somos"
  { path: 'educacao-para-todos', component: EducacaoParaTodosComponent }, // Rota para "Educação para Todos"
  {path: 'studentQuizzes01', component: StudentQuizzes01Component}, // BIGEUS: rota de mesmo nome no figma
  {path: 'forum', component: StudentForumComponent},
  {path: 'progresso-turma', component: ProgressoTurmaComponent},
  {path :'tela-quiz', component: TelaQuizComponent},
  {path: 'student-progress', component: StudentProgressComponent}, // BIGEUS: rota de mesmo nome no figma tbm kkkkkk chega de ler aq ou
  { path: 'como-funciona', component: ComoFuncionaComponent }, // Rota para "Como Funciona"
  { path: 'destaques', component: DestaquesComponent }, // Rota para "Destaques"
  { path: 'visao', component: VisaoComponent }, // Rota para "Visão"
  { path: 'avaliacoes', component: AvaliacoesComponent }, // Rota para "Avaliações"
  { path: 'fale-conosco', component: FaleConoscoComponent }, // Rota para "Fale Conosco"
  // Adicione mais rotas conforme necessário
  {path: 'perfil', component: PerfilComponent},
  { path: 'select-turmas', component: SelectTurmasComponent },
  { path: 'perfil-prof', component: PerfilProfComponent}, 
  { path: 'quiz-prof', component: QuizProfComponent},
  { path: 'forum-prof', component: ForumProfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração de rotas para a aplicação
  exports: [RouterModule] // Exporta o RouterModule para uso em outros módulos
})
export class AppRoutingModule { }
