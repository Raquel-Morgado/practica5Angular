import { Component, EventEmitter, Output } from '@angular/core';
import { IEntry } from '../../interfaces/ientry.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
 @Output() sendEntry: EventEmitter<IEntry>= new EventEmitter();
  entry: IEntry = {
  title: '',
  img: '',
  description: '',
  publish_date: '' 
  };
  date: string = new Date().toLocaleDateString('es-ES');

  ngOnInit(){
    this.entry.publish_date=this.date;
  }

  sendForm(){
    console.log(this.entry)
    this.sendEntry.emit(this.entry);
    this.entry = {
      title: '',
      img: '',
      description: '',
      publish_date: '' 
      };
  }
}
