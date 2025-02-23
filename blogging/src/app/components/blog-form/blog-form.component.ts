import { Component, EventEmitter, Output } from '@angular/core';
import { IEntry } from '../../interfaces/ientry.interface';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
 @Output() sendEntry: EventEmitter<IEntry>= new EventEmitter();
  date: string = new Date().toLocaleDateString('es-ES');

  sendForm(formulario : NgForm){
    if (formulario.valid) {
      let newEntry: IEntry = formulario.value;
      newEntry.publish_date=this.date;
      this.sendEntry.emit(newEntry);
      formulario.reset();
      
      Swal.fire({
        title: 'Correcto!',
        text: 'Entrada dada de alta correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Completa el formulario correctamente',
        icon: 'error',
        confirmButtonText: 'Completar'
      });
    }
}
}