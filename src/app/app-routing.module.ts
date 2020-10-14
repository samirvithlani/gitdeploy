import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { App1Component } from './aboutus/app1/app1.component';
import { ExdemoComponent } from './exdemo/exdemo.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { PipesComponent } from './pipes/pipes.component';
import { RetryComponent } from './retry/retry.component';
import { RapidComponent } from './rapid/rapid.component';
import { CoronaComponent } from './corona/corona.component';
import { MovieComponent } from './movie/movie.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { InputchildComponent } from './inputdemo/inputchild/inputchild.component';
import { DebounceComponent } from './debounce/debounce.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FileComponent } from './file/file.component';
import { UploadComponent } from './upload/upload.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { File2Component } from './file2/file2.component';
import { FileformComponent } from './fileform/fileform.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'exdemo', component: ExdemoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'corona', component: CoronaComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'file', component: FileComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'rapid', component: RapidComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'fileupload2', component: File2Component },
  { path: 'fileform', component: FileformComponent },
  {
    path: 'inputdemo', component: InputdemoComponent, children: [
      {
        path: 'inputchild', component: InputchildComponent
      }
    ]
  },
  { path: 'retry', component: RetryComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] },
  {
    path: 'parent', component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
  {
    path: 'aboutus', component: AboutusComponent, children: [
      { path: 'app1', component: App1Component }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
