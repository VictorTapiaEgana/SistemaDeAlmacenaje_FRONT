import {  Component } from '@angular/core';
import { SideMenuComponent } from "../../../components/sideMenu/sideMenu.component";
import{ RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  imports: [SideMenuComponent,RouterOutlet],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.css',  
})

export class DashboardComponent { }
