import { NgModule } from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from '../../pages/about/about.component';
import {DuvidaComponent} from '../../pages/duvida/duvida.component';
import {UserProfileService} from '../../pages/user-profile/user-profile.service';
import {AppComponent} from '../../app.component';
import {CriancaComponent} from '../../pages/crianca/crianca.component';
import {CadastrarCriancaComponent} from '../../pages/crianca/cadastrar-crianca.component';
// import { ToastrModule } from 'ngx-toastr';

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
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AboutComponent,
    DuvidaComponent,
    CriancaComponent,
    CadastrarCriancaComponent
  ]
})

export class AdminLayoutModule {}
