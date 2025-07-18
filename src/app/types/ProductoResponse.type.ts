
export type ProductoResponse = {
  id: number;
  nombre: string;
  descripcion: string;
  codigo_barra: string;
  sku: string;
  codigo_interno: string;
  ean13: string;
  qr_code: string;
  marca: string;
  modelo: string;
  unidad_medida: string;
  unidad_por_empaque: number;
  cantidad_total: number;
  stock_minimo: number;
  stock_maximo: number;
  estado_stock: string;
  nivel_rotacion: string;
  peso: string;
  largo: string;
  ancho: string;
  alto: string;
  es_ensamblado: boolean;
  precio_compra: string;
  costo_promedio: string;
  precio_venta: string;
  precio_mayorista: string;
  precio_descuento: string;
  iva_incluido: boolean;
  moneda: string;
  origen: string;
  fecha_fabricacion: string; 
  fecha_ingreso: string;     
  fecha_vencimiento: string; 
  dias_alerta_vencimiento: number;
  es_perecible: boolean;
  requiere_refrigeracion: boolean;
  control_calidad: string;
  fecha_control_calidad: string;
  inspeccionado_por: string;
  activo: boolean;
  observaciones: string;
  deletedAt: string | null;
  categoria: {
    id: number;
    nombre: string;
    deletedAt: string | null;
  };
};
