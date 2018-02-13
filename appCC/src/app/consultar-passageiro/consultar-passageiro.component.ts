import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../shared/passageiro.model'
import * as firebase from 'firebase'

@Component({
  selector: 'app-consultar-passageiro',
  templateUrl: './consultar-passageiro.component.html',
  styleUrls: ['./consultar-passageiro.component.css']
})
export class ConsultarPassageiroComponent implements OnInit {

   //Array para pegar todos os passageiros
   public passageiros: Passageiro[] = new Array()
   public passageirosFiltro: Passageiro[] = new Array()
   constructor() { }
 
   ngOnInit() {
     var passageiro: Passageiro
 
     //Pegando todos passageiros do banco de dados
     firebase.database().ref(`Passageiro`).once('value', (snapshot: any) => {
       snapshot.forEach((childSnapshot: any) => {
        passageiro = childSnapshot.val();
         var length = this.passageiros.push(passageiro);
       });
       this.passageirosFiltro = this.passageiros
     });
 
   }

   //realiza a busca atraves do texto digitado
  public buscaNome(stringBusca: Event): void{
    var textoBusca: string = (<HTMLInputElement>stringBusca.target).value
    this.passageirosFiltro= new Array()
    for(var i=0; i<this.passageiros.length; i++){
      //ignora case
      if(this.passageiros[i].nome.toLowerCase().indexOf(textoBusca.toLowerCase()) != -1) var length = this.passageirosFiltro.push(this.passageiros[i]);
    }
  }

}
