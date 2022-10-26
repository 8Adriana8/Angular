import { Component } from '@angular/core';

/**
 * 'templateUrl' serve para informar ao componente qual arquivo HTML rlr drvr modtrsr quando o msm ser utilizado
 *
 * 'stylesUrls' serve para informar os caminhos dos arquivos CSS que o componente utilizará */
/**'selector' serve para informar como aquele componente podera ser chamado dentro do projeto Angular dentro de outros arquivos HTML de outros componentes */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula20-dia11-10-22';
}
