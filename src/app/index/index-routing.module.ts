import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page'; // Ajusta según la ruta correcta
import { LoginPage } from '../login/login.page'; // Ajusta según la ruta correcta

const routes: Routes = [
  {
    path: 'index',
    component: IndexPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule {}
