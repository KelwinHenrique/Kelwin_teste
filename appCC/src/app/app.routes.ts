import { Routes } from '@angular/router'

import { CadMototristaComponent } from './cad-mototrista/cad-mototrista.component'
import { CadPassageiroComponent } from './cad-passageiro/cad-passageiro.component'
import { ConsultarMototristaComponent } from './consultar-mototrista/consultar-mototrista.component'
import { ConsultarPassageiroComponent } from './consultar-passageiro/consultar-passageiro.component'
import { MenuComponent } from './menu/menu.component'
import { ConsultarCorridaComponent } from './consultar-corrida/consultar-corrida.component'
import { RegistrarCorridaComponent } from './registrar-corrida/registrar-corrida.component'

export const ROUTES: Routes = [
    {path: '', component: MenuComponent },
    {path: 'cadPassageiro', component: CadPassageiroComponent },
    {path: 'cadMotorista', component: CadMototristaComponent },
    {path: 'consultarPassageiros', component: ConsultarPassageiroComponent },
    {path: 'consultarMotoristas', component: ConsultarMototristaComponent },
    {path: 'registrarCorrida', component: RegistrarCorridaComponent },
    {path: 'consultarCorridas', component: ConsultarCorridaComponent },


]