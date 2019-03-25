import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DaskboardPageComponent } from './pages/daskboard-page/daskboard-page.component';

const routes: Routes = [{

    path:"login",
    component:LoginPageComponent
  },
  {
  path:"dashboard",
    component:DaskboardPageComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
