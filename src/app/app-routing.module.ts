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


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'exdemo', component: ExdemoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'search', component: SearchComponent },
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
