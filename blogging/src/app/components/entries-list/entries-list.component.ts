import { Component, input } from '@angular/core';
import { IEntry } from '../../interfaces/ientry.interface';

@Component({
  selector: 'app-entries-list',
  imports: [],
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.css'
})
export class EntriesListComponent {
 entries = input<IEntry[]>([]);


}
