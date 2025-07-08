import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  imports: [],
  template: `<p>LISTADO PRODUCTOS!</p>`,
  styleUrl: './listado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponent { }
