import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AboutComponent} from '../../pages/about/about.component';
import {DuvidaComponent} from '../../pages/duvida/duvida.component';
import {CriancaComponent} from '../../pages/crianca/crianca.component';
import {CadastrarCriancaComponent} from '../../pages/crianca/cadastrar-crianca.component';
import {DoencaComponent} from '../../pages/doenca/doenca.component';
import {QuestionarioComponent} from '../../pages/questionario/questionario.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'tables',               component: TablesComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'about',                component: AboutComponent},
    { path: 'duvida',               component: DuvidaComponent},
    { path: 'crianca',              component: CriancaComponent},
    { path: 'doenca',               component: DoencaComponent},
    { path: 'doenca/questionario',  component: QuestionarioComponent},
    { path: 'cadastro-crianca',     component: CadastrarCriancaComponent}
];
