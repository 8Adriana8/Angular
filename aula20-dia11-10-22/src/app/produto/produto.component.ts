/**Todo componente do Angular é representado por uma classe. */


/**para exportar algo daqui para outro lugar*/
//decorator @Component
import { Component } from "@angular/core"; // ctrl + spaço
@Component({
    selector: 'card-produto', /* Para eu poder utilizar o produto dentro de outro arquivo html eu preciso criar uma tag card produto */ 
    templateUrl:'./produto.component.html', //pra referenciar um arquivo html(o caminho)
    styleUrls: ['./produto.component.css'] /* aqui tem q passar um array pq é permitido passar mais de um css. */
})
export class ProdutoComponent { /*nao pode ser apenas o nome da estrutura ex"produto". coloca também o que esa estrutura é */

}
