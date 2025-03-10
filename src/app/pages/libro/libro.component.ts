import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import {FormControl, FormGroup, FormGroupDirective, FormsModule, Validators} from '@angular/forms'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  imports: [ FormsModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  //propiedades
  libros:any;
  libro = new Libro();

  // //propiedades para validar
  
    // libroName='';
    // libroAutor='';
    // libroEditorial='';
    // anio=0;
  
  
  // enviado=false;

  // formGroup
  // formContacto=new FormGroup({
  //   libroName: new FormControl('',[
  //     Validators.required, // required es que es de awebo
  //     Validators.minLength(10) //el minimo de caracteres
  //   ]),

  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   mensaje: new FormControl('',[Validators.required,Validators.maxLength(500)]),
  //   status: new FormControl('',[Validators.required]),
  //   municipio: new FormControl('', [Validators.required]),
  //   autorizacion: new FormControl(false),

  // })



  //constructor
  constructor (private libroService:LibroService){
    this.getLibros();
  }

//metodo que hace la peticion al service para obtener libros
async getLibros():Promise<void>{
  this.libros=await firstValueFrom(this.libroService.getLibros());
}
//método para insertar un libro desde el formulario
insertarLibro(){
  this.libroService.agregarLibro(this.libro);
  this.getLibros();
  this.libro=new Libro();
}
//método para seleccionar libro de la tabla
selectLibro(libroSeleccionado:Libro){
  this.libro=libroSeleccionado;
}
//Método para modificar libro
updateLibro(){
  this.libroService.modificarLibro(this.libro);
  this.libro=new Libro();
  this.getLibros();
}

// método para eliminar
deleteLibro(){
  this.libroService.eliminarLibro(this.libro);
  this.libro=new Libro();
  this.getLibros();
}
clearLibro(){
  this.libro.titulo="";
  this.libro.autor="";
  this.libro.editorial="";
  this.libro.anioPublicacion=0;
  this.getLibros();
}

}
