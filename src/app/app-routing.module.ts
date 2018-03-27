import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModellCenterComponent } from './modell-center/modell-center.component';
import { StartComponent} from './start/start.component';
import { KriterienComponent} from './kriterien/kriterien.component';
import { ZustaendeComponent} from './zustaende/zustaende.component';
import { MassnahmenComponent} from './massnahmen/massnahmen.component';
import { ModellDesignComponent} from './modell-design/modell-design.component';
import { EvaluationComponent} from './evaluation/evaluation.component';


const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  {path: 'start', component: StartComponent},
  {path: 'kriteiren', component: KriterienComponent},
  {path: 'zustaende', component: ZustaendeComponent},
  {path: 'massnahman', component: MassnahmenComponent},
  {path: 'evaluation', component: EvaluationComponent},
  {path: 'modellDesign', component: ModellDesignComponent}, // child component of Zustände component
  {path: 'models', component: ModellCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
