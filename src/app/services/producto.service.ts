import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto.model'; 
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, updateDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private db: Firestore=inject(Firestore);

  constructor() { }

  // metodo para obtener todos los documentos de la colección
  getProductos(){
    const productosCollection= collection(this.db, 'productos');
    return collectionData((productosCollection), {idField:"id"}).pipe(first());
  }

  // método para agregar documento a la colección
  agregarProducto(producto:Producto){
    const productosCollection=collection(this.db, 'productos');
    const productoData={
      descripcion: producto.descripcion,
      precio: producto.precio
    };
    addDoc(productosCollection, productoData);
  }

  // metodo para modificar un documento
  modificarProducto(producto:Producto){
    const documentRef=doc(this.db, 'productos', producto.id);
    updateDoc(documentRef,{
      descripcion: producto.descripcion,
      precio: producto.precio
    });
  }

  // metodo para borrar un documento
  eliminarProducto(producto:Producto){
    const documentRef=doc(this.db, 'productos', producto.id);
    deleteDoc(documentRef);
  }
  
  //limpiar campos
  limpiarProducto(){
    
  }
}
