import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compeimento'
})
export class CompeimentoPipe implements PipeTransform {

  /**Pegar um array qualquer e retornar a quantidade de elementos dentro dele
   * Value : parametro responsavel por pegar o valor que sera transformado.
  args:  
  o parâmetro 'value' no metodo transforme é obrigatorio.
  Mas caso queira passae outros parametros, isso é possivel. 
  */
  transform(value: any[]): number {
    return value.length;
  }

}
