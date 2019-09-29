import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AboutComponent} from '../../pages/about/about.component';
import {DuvidaComponent} from '../../pages/duvida/duvida.component';
import {CriancaComponent} from '../../pages/crianca/crianca.component';
import {CadastrarCriancaComponent} from '../../pages/crianca/cadastrar-crianca.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'tables',           component: TablesComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'about',            component: AboutComponent},
    { path: 'duvida',           component: DuvidaComponent},
    { path: 'maps',             component: MapsComponent },
    { path: 'crianca',          component: CriancaComponent},
    { path: 'cadastro-crianca', component: CadastrarCriancaComponent}
];
