import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service'; 
import { Producto } from '../../models/producto.model';
import { firstValueFrom } from 'rxjs';
import {FormControl, FormGroup, FormGroupDirective, FormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-producto',
  imports: [ FormsModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  productos:any;
  producto = new Producto();
 
   constructor (private productoService:ProductoService){
      this.getProductos();
    }

  //metodo que hace la peticion al service para obtener producto
async getProductos():Promise<void>{
  this.productos=await firstValueFrom(this.productoService.getProductos());
}

//método para insertar un producto desde el formulario
insertarProducto(){
  this.productoService.agregarProducto(this.producto);
  this.getProductos();
  this.producto=new Producto();
}

//método para seleccionar Producto de la tabla
selectProducto(productoSeleccionado:Producto){
  this.producto=productoSeleccionado;
}

//Método para modificar producto
updateProducto(){
  this.productoService.modificarProducto(this.producto);
  this.producto=new Producto();
  this.getProductos();
}

// método para eliminar
deleteProducto(){
  this.productoService.eliminarProducto(this.producto);
  this.producto=new Producto();
  this.getProductos();
}
clearproducto(){
  this.producto.descripcion="";
  this.producto.precio=0;
  this.getProductos();
}

}
