import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { App1Component } from './aboutus/app1/app1.component';
import { ExdemoComponent } from './exdemo/exdemo.component';
import { ErrorComponent } from './error/error.component';
import { ErrorserviceService } from './errorservice.service';
import { SearchComponent } from './search/search.component';
import { PipesComponent } from './pipes/pipes.component';
import { RetryComponent } from './retry/retry.component';
import { RapidComponent } from './rapid/rapid.component';
import { CoronaComponent } from './corona/corona.component';
import { MovieComponent } from './movie/movie.component';
import { SalaryPipe } from './salary.pipe';
import { DayAgoPipe } from './day-ago.pipe';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { InputchildComponent } from './inputdemo/inputchild/inputchild.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DetailComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    AboutusComponent,
    App1Component,
    ExdemoComponent,
    ErrorComponent,
    SearchComponent,
    PipesComponent,
    RetryComponent,
    RapidComponent,
    CoronaComponent,
    MovieComponent,
    SalaryPipe,
    DayAgoPipe,
    AddstudentComponent,
    InputdemoComponent,
    InputchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
/*     {
      provide: ErrorHandler,
      useClass: ErrorserviceService
    }
 */  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
