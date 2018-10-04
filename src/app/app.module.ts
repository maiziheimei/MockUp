import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {LOCALE_ID, NgModule} from '@angular/core';

import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

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
import { DialogOverviewExampleDialogComponent, EvaluationComponent} from './evaluation/evaluation.component';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MAT_DIALOG_DATA, MatDialogRef, MatListModule, MAT_DATE_LOCALE
} from '@angular/material';
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
import { ClrviewComponent } from './clrview/clrview.component';
import { MatTreeModule, MatDialogModule } from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule} from '@angular/cdk/table';
import { DownloadAlertComponent } from './download-alert/download-alert.component';
import { MatDividerModule} from '@angular/material/divider';
import {registerLocaleData} from "@angular/common";
import {MatRadioModule} from '@angular/material/radio';





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
    SortArrPipe,
    ClrviewComponent,
    DownloadAlertComponent,
    DialogOverviewExampleDialogComponent
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
    MatCheckboxModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSelectModule, MatRadioModule,
    MatInputModule, MatIconModule, MatTooltipModule,  MatTreeModule, CdkTreeModule, CdkTableModule, MatDialogModule, MatListModule, MatDividerModule
  ],
  providers: [HttpClientModule, ModellService, ModellDesignComponent, DataService, UserService, AuthService, AuthGuard, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: MAT_DIALOG_DATA, useValue: {}},  {provide: MatDialogRef, useValue: {}}],
  entryComponents: [ClrviewComponent, DownloadAlertComponent,DialogOverviewExampleDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
