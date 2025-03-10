import { Injectable, inject } from '@angular/core';
import { Libro } from '../models/libro.model';
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, updateDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db: Firestore=inject(Firestore);


  constructor() { }

  // metodo para obtener todos los documentos de la colección
  getLibros(){
    const librosCollection= collection(this.db, 'libros');
    return collectionData((librosCollection), {idField:"id"}).pipe(first());
  }

  // método para agregar documento a la colección
  agregarLibro(libro:Libro){
    const librosCollection=collection(this.db, 'libros');
    const libroData={
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }

  // metodo para modificar un documento
  modificarLibro(libro:Libro){
    const documentRef=doc(this.db, 'libros', libro.id);
    updateDoc(documentRef,{
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  // metodo para borrar un documento
  eliminarLibro(libro:Libro){
    const documentRef=doc(this.db, 'libros', libro.id);
    deleteDoc(documentRef);
  }
  //limpiar campos
  limpiarLibro(){
    
  }
}
