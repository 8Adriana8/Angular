import { Component } from '@angular/core';
import { CartaoDeCredito } from './interfaces/CartaoDeCredito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export interface CartaoDeCredito {
    nome: string
    numero: string
    mes: string
    ano: string
    cvc: string
  }
