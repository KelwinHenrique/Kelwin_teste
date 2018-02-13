import { Component, OnInit, ViewChild } from '@angular/core';
import { Motorista } from '../shared/motorista.model'
import { NgForm } from '@angular/forms'
import * as firebase from 'firebase'

@Component({
  selector: 'app-consultar-mototrista',
  templateUrl: './consultar-mototrista.component.html',
  styleUrls: ['./consultar-mototrista.component.css']
})
export class ConsultarMototristaComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  //Array para pegar todos os motoristas
  public motoristas: Motorista[] = new Array()
  public motoristasFiltro: Motorista[] = new Array()
  constructor() { }

  ngOnInit() {
    var motorista: Motorista

    //Pegando todos motoristas do banco de dados
    firebase.database().ref(`Motorista`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        motorista = childSnapshot.val();
        var length = this.motoristas.push(motorista);
      });
      this.motoristasFiltro = this.motoristas
    });

  }

  //Função para atualizar o status do motorista(Ativo/Inativo)
  public atualizarStatus(motorista: Motorista): void {

    //atualizando o motorista
    var motoristaAtualizado: Motorista
    var novoStatus: string
    if(motorista.status== 'Ativo') novoStatus = 'Inativo'
    else novoStatus = 'Ativo'
    motoristaAtualizado = new Motorista(motorista.nome,
      motorista.cpf,
      motorista.dataNascimento,
      motorista.modeloCarro,
      motorista.sexo,
      novoStatus
    )
    //salvando os dados no banco de dado, passando o cpf como chave primária em base 64
    firebase.database().ref(`Motorista/${btoa(motoristaAtualizado.cpf)}`).set(motoristaAtualizado).then(() => {
      console.log("Dados atualizados")
    })

    this.motoristas= new Array()
    this.motoristasFiltro= new Array()
    //Pegando todos motoristas do banco de dados
    firebase.database().ref(`Motorista`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        motorista = childSnapshot.val();
        var length = this.motoristas.push(motorista);
      });
      this.motoristasFiltro = this.motoristas
      
    });
  }

  //realiza a busca atraves do texto digitado
  public buscaNome(stringBusca: Event): void{
    var textoBusca: string = (<HTMLInputElement>stringBusca.target).value
    this.motoristasFiltro= new Array()
    for(var i=0; i<this.motoristas.length; i++){
      //ignora case
      if(this.motoristas[i].nome.toLowerCase().indexOf(textoBusca.toLowerCase()) != -1) var length = this.motoristasFiltro.push(this.motoristas[i]);
    }
  }

}
