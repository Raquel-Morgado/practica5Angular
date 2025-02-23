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
  entriesList: IEntry[]=[];

  getEntry(event: IEntry){
    this.entriesList= [...this.entriesList, event]
  }

}
