import { Injectable,  inject } from '@angular/core';
import { Planta } from '../models/taxonomia.model';
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private db: Firestore=inject(Firestore);
  constructor() { }


  
    // metodo para obtener todos los documentos de la colección
    getPlantas(){
      const plantasCollection= collection(this.db, 'plantas');
      return collectionData((plantasCollection), {idField:"id"}).pipe(first());
    }
  
    // método para agregar documento a la colección
    agregarPlanta(planta:Planta){
      const plantasCollection=collection(this.db, 'plantas');
      const plantaData={
        nombre: planta.nombre, 
        reino: planta.reino,
        clase:planta.clase,
        orden:planta.orden,
        familia:planta.familia,
        genero:planta.genero,
        especie:planta.especie
      };
      addDoc(plantasCollection, plantaData);
    }
  
    // metodo para modificar un documento
    modificarPlanta(planta:Planta){
      const documentRef=doc(this.db, 'plantas', planta.id);
      updateDoc(documentRef,{
        nombre: planta.nombre, 
        reino: planta.reino,
        clase:planta.clase,
        orden:planta.orden,
        familia:planta.familia,
        genero:planta.genero,
        especie:planta.especie
      });
    }
  
    // metodo para borrar un documento
    eliminarPlanta(planta:Planta){
      const documentRef=doc(this.db, 'plantas', planta.id);
      deleteDoc(documentRef);
    }
    //limpiar campos
    limpiarPlanta(){
      
    }

}
