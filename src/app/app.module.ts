import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { NameAZComponent } from './name-a-z/name-a-z.component';
import { NameaZComponent } from './namea-z/namea-z.component';
import { UpRankComponent } from './up-rank/up-rank.component';
import { DownRankComponent } from './down-rank/down-rank.component';
import { UserdataService} from './userdata.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    NameAZComponent,
    NameaZComponent,
    UpRankComponent,
    DownRankComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        {path:'NameA-Z' ,component: NameAZComponent},
        {path:'Namea-z' ,component:NameaZComponent},
        {path:'UpRank', component:UpRankComponent},
        {path:'DownRank', component: DownRankComponent}
      ])
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
