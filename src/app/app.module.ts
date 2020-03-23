import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarClienteComponent } from './Clientes/criar-cliente/criar-cliente.component';
import { CriarSalaComponent } from './Salas/criar-sala/criar-sala.component';
import { ListarClientesComponent } from './Clientes/listar-clientes/listar-clientes.component';
import { ListarSalasComponent } from './Salas/listar-salas/listar-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarClienteComponent,
    CriarSalaComponent,
    ListarClientesComponent,
    ListarSalasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
