import { Component, OnInit, ViewChild } from '@angular/core';
import { Motorista } from '../shared/motorista.model'
import { NgForm } from '@angular/forms'
import * as firebase from 'firebase'

@Component({
  selector: 'app-cad-mototrista',
  templateUrl: './cad-mototrista.component.html',
  styleUrls: ['./cad-mototrista.component.css']
})
export class CadMototristaComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  //Estado atual do formulário: Válido ou Inválido, para controle de exibição
  public formEstado: string = 'disabled'
  //Verificar se dados foram enviados, ou seja, se o cadastro foi salvo
  public dadosEnviados: number = 0
  //Verificar se o cpf é válido ou não
  //0 = inválido; 1 = válido
  public cpfValido: number = 0


  constructor() { }

  ngOnInit() {
  }


  public confirmarInscricao(formulario: NgForm): void {

    var motorista: Motorista
    
    motorista = new Motorista(formulario.value.nomeCompleto,
      formulario.value.cpf,
      formulario.value.dataNascimento,
      formulario.value.modeloCarro,
      formulario.value.sexo,
      formulario.value.status,
    )
    //salvando os dados no banco de dado, passando o cpf como chave primária em base 64
    firebase.database().ref(`Motorista/${btoa(motorista.cpf)}`).set(motorista).then(() => {
      this.dadosEnviados = 1
    })

    
  }

  //função chamada a cada vova entrada para analisar se o formulário está válido ou não
  public verificaFormulario(formulario: NgForm): void {
    
    this.formulario = formulario
    if (formulario.valid && this.cpfValido) {
      //habilita o botão
      this.formEstado = ''
    } else {
      //desabilita o botão
      this.formEstado = 'disabled'
    }
  }
  //função para verificar se um cpf é válido ou não
  public testaCPF(formulario: NgForm): void {
    
    var strCPF: string = formulario.value.cpf
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") this.cpfValido = 0;
    else {
      var i: number;
      for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) this.cpfValido = 0;
      else {

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) this.cpfValido = 0;
        else this.cpfValido = 1;
      }
    }
    this.verificaFormulario(formulario)
  }



}
