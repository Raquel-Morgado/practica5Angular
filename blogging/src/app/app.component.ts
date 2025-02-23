import { Component, Input } from '@angular/core';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { EntriesListComponent } from "./components/entries-list/entries-list.component";
import { IEntry } from './interfaces/ientry.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [BlogFormComponent, EntriesListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  entriesList: IEntry[]= [
    {
      title: 'Introducción a Angular 15: Nuevas características y mejoras',
      img: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description: 'Angular 15 ha llegado con nuevas características que facilitan el desarrollo de aplicaciones web. En este artículo, exploramos las mejoras en la nueva versión de Angular, incluyendo cambios en el rendimiento, el manejo de formularios, y el sistema de inyección de dependencias.',
      publish_date: '22/02/2025'
    },
    {
      title: 'Mejores prácticas para desarrollar una SPA con React',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      description: 'En este artículo, discutimos las mejores prácticas para crear aplicaciones de una sola página (SPA) con React. Cubrimos temas como la gestión del estado, el enrutamiento, el manejo de la seguridad y la optimización de la experiencia del usuario.',
      publish_date: '19/02/2025'
    }
  ];
  ;

  getEntry(event: IEntry){
    this.entriesList= [...this.entriesList, event]
  }

}
