import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [
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
    TelaAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
