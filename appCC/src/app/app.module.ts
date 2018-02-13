import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

//importando meu mapa de rotas
import { ROUTES } from './app.routes'

//importando o FormsModule, para maior facilidade ao criar os formulários
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CadMototristaComponent } from './cad-mototrista/cad-mototrista.component';
import { ConsultarMototristaComponent } from './consultar-mototrista/consultar-mototrista.component';
import { ConsultarPassageiroComponent } from './consultar-passageiro/consultar-passageiro.component';
import { CadPassageiroComponent } from './cad-passageiro/cad-passageiro.component';
import { RegistrarCorridaComponent } from './registrar-corrida/registrar-corrida.component';
import { ConsultarCorridaComponent } from './consultar-corrida/consultar-corrida.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CadMototristaComponent,
    ConsultarMototristaComponent,
    ConsultarPassageiroComponent,
    CadPassageiroComponent,
    RegistrarCorridaComponent,
    ConsultarCorridaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
