import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

import { ImpressumComponent } from './impressum/impressum.component';
import { ModellCenterComponent } from './modell-center/modell-center.component';
import { StartComponent} from './start/start.component';
import { KriterienComponent} from './kriterien/kriterien.component';
import { ZustaendeComponent} from './zustaende/zustaende.component';
import { MassnahmenComponent} from './massnahmen/massnahmen.component';
import { ModellDesignComponent} from './modell-design/modell-design.component';
import { EvaluationComponent} from './evaluation/evaluation.component';


const routes: Routes = [
 // { path: '', component: StartComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: ''},
  { path: '', redirectTo: '/start', canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'start', component: StartComponent, canActivate: [AuthGuard]},
  {path: 'kriteiren', component: KriterienComponent, canActivate: [AuthGuard]},
  {path: 'zustaende', component: ZustaendeComponent, canActivate: [AuthGuard]},
  {path: 'massnahman', component: MassnahmenComponent, canActivate: [AuthGuard]},
  {path: 'evaluation', component: EvaluationComponent, canActivate: [AuthGuard]},
  {path: 'modellDesign', component: ModellDesignComponent, canActivate: [AuthGuard]}, // child component of Zustände component
  {path: 'models', component: ModellCenterComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
