import { NgModule } from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from '../../pages/about/about.component';
import {DuvidaComponent} from '../../pages/duvida/duvida.component';
import {CriancaComponent} from '../../pages/crianca/crianca.component';
import {CadastrarCriancaComponent} from '../../pages/crianca/cadastrar-crianca.component';
import {DoencaComponent} from '../../pages/doenca/doenca.component';
import {QuestionarioComponent} from '../../pages/questionario/questionario.component';
import {DiagnosticoComponent} from '../../pages/diagnostico/diagnostico.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AboutComponent,
    DuvidaComponent,
    CriancaComponent,
    CadastrarCriancaComponent,
    DoencaComponent,
    QuestionarioComponent,
    DiagnosticoComponent
  ]
})

export class AdminLayoutModule {}
