
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { environment } from '../../../../../environments/environment';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { ProductoResponse } from '../../../../types/ProductoResponse.type';


@Component({
  selector: 'app-listado',
  imports: [ NzDividerModule, NzTableModule, NzButtonModule, NzDropDownModule, 
             NzIconModule, NzInputModule,FormsModule,NzTagModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})

export class ListadoComponent implements OnInit, OnDestroy  {    
  
  constructor(private http: HttpClient){}

  listOfData = signal<ProductoResponse[]>([])
  suscripcion: any;

  estados = [{nombre:"Alta", valor: "success"},
              {nombre:"Media", valor: "warning"},
              {nombre:"Baja", valor: "error"}];

 getColorFromNombre(nombre: string): string {

   return this.estados.find(e => e.nombre === nombre)?.valor ?? 'default'; 

 }


  searchValue = '';
  visible = false;
  listOfDisplayData: ProductoResponse[] = [];
  filterName = signal<{ text: string; value: string }[]>([]);

  nameFilterFn = (searchValues: string[], item: ProductoResponse): boolean => 
                  searchValues.some(value => item.categoria.nombre.indexOf(value) !== -1);

  obtenerProductos() {

    this.suscripcion = this.http.get<ProductoResponse[]>(`${environment.SERVERNAME}/productos`)

      .subscribe({
          
        next: (productos: ProductoResponse[]) => {

              this.listOfData.set(productos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
              this.listOfDisplayData  = [...this.listOfData()];
              
              // this.filterName.set(this.listOfData().map((producto: ProductoResponse) => ({
              //                                                                            text: producto.categoria.nombre,
              //                                                                            value: producto.categoria.nombre
              //                                                                           }))
              //                                       );
              const categoriasUnicas = new Map<string, { text: string; value: string }>();

              this.listOfData().forEach((producto: ProductoResponse) => {
                const nombre = producto.categoria.nombre;
                if (!categoriasUnicas.has(nombre)) {
                  categoriasUnicas.set(nombre, { text: nombre, value: nombre });
                }
              });

              this.filterName.set(Array.from(categoriasUnicas.values()));
        },

        error: (err:any) => console.error('Error al obtener productos', err)

      });

  }

   reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    const filtro = this.searchValue.trim().toLowerCase();

    this.listOfDisplayData = this.listOfData().filter((item: ProductoResponse) =>
      item.nombre.toLowerCase().includes(filtro)
    ).sort((a, b) =>
      a.nombre.localeCompare(b.nombre)) ;
  }

  currentPage = signal<number>(1)

  onPageChange(pageIndex: number): void {
    
    this.currentPage.set(pageIndex);
    
}


  ngOnInit() {
    this.obtenerProductos();
  }

  ngOnDestroy() {
    if(this.suscripcion) {
       this.suscripcion.unsubscribe();
    }
  }

 }
