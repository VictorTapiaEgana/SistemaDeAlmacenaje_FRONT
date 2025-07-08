import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },

    { path: 'dashboard', loadComponent: () => import('./pages/Dashboard/Dashboard.component')
                         .then(m => m.DashboardComponent) ,
        children: [
            { path: 'lista-productos', loadComponent: () => import('./pages/Productos/listadoDeproductos/listado/listado.component')
                                       .then(m => m.ListadoComponent) },
        ]
    },
];
