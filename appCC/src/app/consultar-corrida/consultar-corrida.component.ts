import { Component, OnInit } from '@angular/core';
import { Corrida } from '../shared/corrida.model'
import * as firebase from 'firebase'

@Component({
  selector: 'app-consultar-corrida',
  templateUrl: './consultar-corrida.component.html',
  styleUrls: ['./consultar-corrida.component.css']
})
export class ConsultarCorridaComponent implements OnInit {

  c//Array para pegar todos os corridas
  public corridas: Corrida[] = new Array()
  public corridasFiltro: Corrida[] = new Array()
  constructor() { }

  ngOnInit() {
    var corrida: Corrida

    //Pegando todos corridas do banco de dados
    firebase.database().ref(`Corrida`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        corrida = childSnapshot.val();
        var length = this.corridas.push(corrida);
      });
      this.corridasFiltro = this.corridas
    });

  }

  //realiza a busca atraves do texto digitado
  public buscaCPF(stringBusca: Event): void {
    var textoBusca: string = (<HTMLInputElement>stringBusca.target).value
    this.corridasFiltro = new Array()
    for (var i = 0; i < this.corridas.length; i++) {
      //ignora case
      if (this.corridas[i].cpf_motorista.toLowerCase().indexOf(textoBusca.toLowerCase()) != -1) var length = this.corridasFiltro.push(this.corridas[i]);
    }
  }
}
