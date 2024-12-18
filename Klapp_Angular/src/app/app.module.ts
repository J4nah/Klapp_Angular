import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { EducacaoParaTodosComponent } from './educacao-para-todos/educacao-para-todos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { VisaoComponent } from './visao/visao.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { FooterCinzaComponent } from './footer-cinza/footer-cinza.component';
import { FooterBrancoComponent } from './footer-branco/footer-branco.component';
import { TelaAlunoComponent } from './tela-aluno/tela-aluno.component';
import { LandingCompletaComponent } from './landing-completa/landing-completa.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BannerTopComponent } from './banner-top/banner-top.component';
import { LogoutImageComponent } from './logout-image/logout-image.component';
import { RankingComponent } from './ranking/ranking.component';
import { SideRightComponent } from './side-right/side-right.component';
import { StudentQuizzes01Component } from './student-quizzes01/student-quizzes01.component';
import { ColocacaoComponent } from './colocacao/colocacao.component';
import { RankingMessageComponent } from './ranking-message/ranking-message.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { StudentProgressLineChartComponent } from './student-progress-line-chart/student-progress-line-chart.component';
import { StudentRadarChartComponent } from './student-radar-chart/student-radar-chart.component';
import { RightSideEstilosAprendizagemComponent } from './right-side-estilos-aprendizagem/right-side-estilos-aprendizagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { BannerPontuacoesComponent } from './banner-pontuacoes/banner-pontuacoes.component';
import { TelaQuizComponent } from './tela-quiz/tela-quiz.component';
import { TotalAcertosComponent } from './total-acertos/total-acertos.component';
import { StudentForumComponent } from './student-forum/student-forum.component';
import { ForumComponent } from './forum/forum.component';
import { MessagesScrollComponent } from './messages-scroll/messages-scroll.component';
import { MakePublicationComponent } from './make-publication/make-publication.component';
import { FiltrosDisciplinasComponent } from './filtros-disciplinas/filtros-disciplinas.component';
import { SupportChatComponent } from './support-chat/support-chat.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SelectTurmasComponent } from './select-turmas/select-turmas.component';
import { TurmaTableComponent } from './turma-table/turma-table.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';
import { SideMenuProfComponent } from './side-menu-prof/side-menu-prof.component';
import { PerfilProfComponent } from './perfil-prof/perfil-prof.component';
import { ProfileContainerProfComponent } from './profile-container-prof/profile-container-prof.component';
import { QuizProfComponent } from './quiz-prof/quiz-prof.component';
import { ForumProfComponent } from './forum-prof/forum-prof.component';
import { GraficoMediaAlunosComponent } from './grafico-media-alunos/grafico-media-alunos.component';
import { TeacherQuizzesComponent } from './teacher-quizzes/teacher-quizzes.component';
import { SideRightQuizComponent } from './side-right-quiz/side-right-quiz.component';
@NgModule({ declarations: [
        AppComponent,
        PrincipalComponent,
        LoginComponent,
        QuemSomosComponent,
        EducacaoParaTodosComponent,
        ComoFuncionaComponent,
        DestaquesComponent,
        VisaoComponent,
        AvaliacoesComponent,
        FaleConoscoComponent,
        FooterCinzaComponent,
        FooterBrancoComponent,
        TelaAlunoComponent,
        LandingCompletaComponent,
        SideMenuComponent,
        BannerTopComponent,
        LogoutImageComponent,
        RankingComponent,
        SideRightComponent,
        StudentQuizzes01Component,
        ColocacaoComponent,
        RankingMessageComponent,
        StudentProgressComponent,
        ProgressoComponent,
        StudentProgressLineChartComponent,
        StudentRadarChartComponent,
        RightSideEstilosAprendizagemComponent,
        PerfilComponent,
        ProfileContainerComponent,
        AlterarSenhaComponent,
        BannerPontuacoesComponent,
        TelaQuizComponent,
        TotalAcertosComponent,
        StudentForumComponent,
        ForumComponent,
        MessagesScrollComponent,
        MakePublicationComponent,
        FiltrosDisciplinasComponent,
        SupportChatComponent,
        CadastroComponent,
        SelectTurmasComponent,
        TurmaTableComponent,
        ProgressoTurmaComponent,
        SideMenuProfComponent,
        PerfilProfComponent,
        ProfileContainerProfComponent,
        QuizProfComponent,
        ForumProfComponent,
        GraficoMediaAlunosComponent,
        TeacherQuizzesComponent,
        SideRightQuizComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        NgbCarouselModule,
        ReactiveFormsModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
