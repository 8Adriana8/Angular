import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**Reactive Forms possui estruturas para apresentar o formulario dentro do typescript */

  /*FormControl representa um elemento do seu formulario.*/
  /*nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('') */

  /**FormGroup é uma estrutura do reactive forms que permite agruparmos forms controls dentro dela, para que o acesso aos valores sejam mais simples */

  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    this: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }
enviar(){
/**A propriedade 'value' do formControl possui o valor que foi digitado dentro do campo do formulario */
console.log(this.nome.value)
console.log(this.email.value)
console.log(this.senha.value)
}
}
