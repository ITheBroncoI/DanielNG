import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RadioButtonModule, FormsModule, ButtonDirective, Ripple, InputTextModule, RadioButtonModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Daniel';

  // MONITOREO
  // Exportacion registros
  registroAExportarSeleccionado: string = 'Glucosa';
  registros: any[] = [
    {nombre: 'Glucosa'},
    {nombre: 'Presión arterial'}
  ];

  formatoAExportarSeleccionado: string = 'PDF';
  formatos: any[] = [
    {nombre: 'PDF'},
    {nombre: 'Excel'},
  ]

  periodoAExportarSeleccionado: number = 0;
  periodos: any[] = [
    {nombre: '4 semanas', valor: 4},
    {nombre: '8 semanas', valor: 8},
    {nombre: '12 semanas', valor: 12},
  ]

  ngOnInit(): void {
    // Exportacion de registros
    this.registroAExportarSeleccionado = this.registros[0];
    this.formatoAExportarSeleccionado = this.formatos[0];
    this.periodoAExportarSeleccionado = this.periodos[0];
  }

  exportar() {
    // Agrega la logica aqui
  }
}
