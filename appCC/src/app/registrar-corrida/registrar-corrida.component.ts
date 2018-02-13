import { Component, OnInit, ViewChild } from '@angular/core';
import { Motorista } from '../shared/motorista.model'
import { NgForm } from '@angular/forms'
import * as firebase from 'firebase'
import { Passageiro } from '../shared/passageiro.model'
import { Corrida } from '../shared/corrida.model'

@Component({
  selector: 'app-registrar-corrida',
  templateUrl: './registrar-corrida.component.html',
  styleUrls: ['./registrar-corrida.component.css']
})
export class RegistrarCorridaComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm
  public motoristas: Motorista[] = new Array()
  public passageiros: Passageiro[] = new Array()

  //Estado atual do formulário: Válido ou Inválido, para controle de exibição
  public formEstado: string = 'disabled'
  //Verificar se dados foram enviados, ou seja, se o cadastro foi salvo
  public dadosEnviados: number = 0
  //Verificar se o cpf é válido ou não
  //0 = inválido; 1 = válido
  public cpfValido: number = 0

  constructor() { }

  ngOnInit() {
    var motorista: Motorista
    //Pegando todos motoristas do banco de dados
    firebase.database().ref(`Motorista`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        motorista = childSnapshot.val();
        if (motorista.status == "Ativo") var length = this.motoristas.push(motorista);

      });
    });


    var passageiro: Passageiro
    //Pegando todos passageiros do banco de dados
    firebase.database().ref(`Passageiro`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        passageiro = childSnapshot.val();
        var length = this.passageiros.push(passageiro);
      });
    });
  }


  public confirmarInscricao(formulario: NgForm): void {

    var corrida: Corrida

    corrida = new Corrida(formulario.value.motorista,
      formulario.value.passageiro,
      formulario.value.valorCorrida
    )
    //salvando os dados no banco de dado, passando o cpf como chave primária em base 64
    firebase.database().ref(`Corrida/${btoa(corrida.cpf_motorista)}${btoa(corrida.cpf_passageiro)}${btoa(corrida.valor)}`).set(corrida).then(() => {
      this.dadosEnviados = 1
    })


  }

  //função chamada a cada vova entrada para analisar se o formulário está válido ou não
  public verificaFormulario(formulario: NgForm): void {

    this.formulario = formulario
    if (formulario.valid) {
      //habilita o botão
      this.formEstado = ''
    } else {
      //desabilita o botão
      this.formEstado = 'disabled'
    }
  }

}
