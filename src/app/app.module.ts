import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DuvidaComponent } from './pages/duvida/duvida.component';
import {UserProfileService} from './pages/user-profile/user-profile.service';
import {RegisterService} from './pages/register/register.service';
import { CriancaComponent } from './pages/crianca/crianca.component';
import { ServiceComponent } from './service/service.component';
import { CadastrarCriancaComponent } from './pages/crianca/cadastrar-crianca.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ServiceComponent,
  ],
  providers: [UserProfileService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
