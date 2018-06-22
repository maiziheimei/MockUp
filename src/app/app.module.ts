import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ModellCenterComponent } from './modell-center/modell-center.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';

import { StartComponent } from './start/start.component';
import { KriterienComponent } from './kriterien/kriterien.component';
import { ZustaendeComponent } from './zustaende/zustaende.component';
import { ModellDesignComponent } from './modell-design/modell-design.component';
import { MassnahmenComponent } from './massnahmen/massnahmen.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModellService } from './modell.service';
import { DataService } from './data.service';
import { UserService} from './user.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { SortArrPipe } from './sort-arr.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    ModellCenterComponent,
    ModelListComponent,
    ModelDetailComponent,
    KriterienComponent,
    StartComponent,
    ZustaendeComponent,
    MassnahmenComponent,
    ModellDesignComponent,
    EvaluationComponent,
    LoginComponent,
    HeaderComponent,
    SortArrPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatCheckboxModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSelectModule,
    MatInputModule, MatIconModule, MatTooltipModule
  ],
  providers: [HttpClientModule, ModellService, DataService, UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
