import { Component } from '@angular/core';
import { Planta } from '../../models/taxonomia.model';
import { PlantaService } from '../../services/planta.service';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, Validators} from '@angular/forms'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-taxonomia',
  imports: [FormsModule],
  templateUrl: './taxonomia.component.html',
  styleUrl: './taxonomia.component.css'
})
export class TaxonomiaComponent {

    plantas:any;
    planta = new Planta();

    constructor (private plantaService:PlantaService){
        this.getPlantas();
      }

      //metodos para las plantas 

      
      //metodo que hace la peticion al service para obtener libros
      async getPlantas():Promise<void>{
        this.plantas=await firstValueFrom(this.plantaService.getPlantas());
      }
      //método para insertar un libro desde el formulario
      insertarPlanta(){
        this.plantaService.agregarPlanta(this.planta);
        this.getPlantas();
        this.planta=new Planta();
      }
      //método para seleccionar libro de la tabla
      selectPlanta(plantaSeleccionada:Planta){
        this.planta=plantaSeleccionada;
      }
      //Método para modificar libro
      updatePlanta(){
        this.plantaService.modificarPlanta(this.planta);
        this.planta=new Planta();
        this.getPlantas();
      }
      
      // método para eliminar
      deletePlanta(){
        this.plantaService.eliminarPlanta(this.planta);
        this.planta=new Planta();
        this.getPlantas();
      }
      clearPlanta(){
        this.planta.nombre="";
        this.planta.reino="";
        this.planta.clase="";
        this.planta.orden="";
        this.planta.familia="";
        this.planta.genero="";
        this.planta.especie="";
        
        this.getPlantas();
      }

}
