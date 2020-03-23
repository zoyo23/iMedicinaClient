import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CriarClienteComponent } from './views/Clientes/criar-cliente/criar-cliente.component';
import { CriarSalaComponent } from './views/Salas/criar-sala/criar-sala.component';
import { ListarClientesComponent } from './views/Clientes/listar-clientes/listar-clientes.component';
import { ListarSalasComponent } from './views/Salas/listar-salas/listar-salas.component';
import { TeleconferenciaComponent } from './views/Salas/teleconferencia/teleconferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarClienteComponent,
    CriarSalaComponent,
    ListarClientesComponent,
    ListarSalasComponent,
    TeleconferenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
