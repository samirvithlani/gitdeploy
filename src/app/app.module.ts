import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { DebounceComponent } from './debounce/debounce.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoaderserviceService } from './loaderservice.service';
import { LoaderInterceptor } from './loader.interceptor';
import { FileComponent } from './file/file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { UploadComponent } from './upload/upload.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { File2Component } from './file2/file2.component';
import { FileformComponent } from './fileform/fileform.component';

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
    InputchildComponent,
    DebounceComponent,
    UserloginComponent,
    LoaderComponent,
    FileComponent,
    UploadComponent,
    FileuploadComponent,
    File2Component,
    FileformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
     MatToolbarModule,  
    MatIconModule,  
    MatButtonModule,  
    MatCardModule,  
    MatProgressBarModule  
  ],
  providers: [
    /* LoaderserviceService, {
      provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    } */
/*     {
      provide: ErrorHandler,
      useClass: ErrorserviceService
    }
 */  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
