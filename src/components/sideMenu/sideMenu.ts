import { SideMenuItem } from "../../app/types/sidemenu.type";

const listado:SideMenuItem[] = [
                    {
                        "name": "Dashboard",
                        "path": "/dashboard",
                        "icon": "./iconos/dashboard.png",
                    },
                    {
                        "name": "Productos",
                        "path": "productos",
                        "icon": "./iconos/box.png",                        
                        "children": [{
                            "name": "Lista de Productos",
                            "path": "lista-productos",
                            "icon": "./iconos/list.png",                            
                        },
                        {
                            "name": "Crear Producto",
                            "path": "crear-producto",
                            "icon": "./iconos/add.png",
                            // "component": "CreateProductComponent"
                        },
                        {
                            "name": "Editar Producto",
                            "path": "editar-producto",
                            "icon": "./iconos/edit.png",
                            // "component": "EditProductComponent",
                        },
                        {
                            "name": "Eliminar Producto",
                            "path": "eliminar-producto",
                             "icon": "./iconos/trash.png",
                           // "component": "DeleteProductComponent",
                        }],    
                        
                    },
                    {
                        "name": "Usuarios",
                        "path": "usuarios",
                        "icon": "./iconos/people.png",
                        // "component": "SideMenuComponent",
                    }
                ]

export default listado;