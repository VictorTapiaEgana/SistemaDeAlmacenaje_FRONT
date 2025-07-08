import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { RouterLink  } from '@angular/router'

import listado from './sideMenu'

@Component({
  selector: 'app-side-menu',
  imports: [NzMenuModule, NzBadgeModule, RouterLink],
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.css',  
})

export class SideMenuComponent {

  listado = listado;
  
 }
