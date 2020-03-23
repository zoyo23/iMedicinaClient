import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarClienteComponent } from './views/Clientes/criar-cliente/criar-cliente.component';


const routes: Routes = [
  { path: 'novoCliente', component: CriarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
