import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarClienteComponent } from './views/Clientes/criar-cliente/criar-cliente.component';
import { ListarClientesComponent } from './views/Clientes/listar-clientes/listar-clientes.component';
import { CriarSalaComponent } from './views/Salas/criar-sala/criar-sala.component';
import { ListarSalasComponent } from './views/Salas/listar-salas/listar-salas.component';


const routes: Routes = [
  { path: 'novoCliente', component: CriarClienteComponent },
  { path: 'listaClientes', component: ListarClientesComponent },
  { path: 'novaSala', component: CriarSalaComponent },
  { path: 'listaSalas', component: ListarSalasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
