import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TitleBoldComponent } from '../../components/title-bold/title-bold.component';
import { ServiceService, notes } from '../../services/service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderBannerComponent } from '../../components/header-banner/header-banner.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgClass, TitleBoldComponent, DatePipe,FormsModule,HeaderBannerComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  service = inject(ServiceService);
  notes: notes[];
  selectedNote: number;
  specificNote: string="";
  sideBarCollapsedTrue:boolean=false;
  constructor() {
    this.notes = this.service.notes;
    this.selectedNote = this.service.selectedNote();
    console.log(this.selectedNote)
    this.specificNote=this.service.notes[this.selectedNote].note;
  }

  textarea(event:Event){
    this.service.notes[this.selectedNote].note=(event.target as HTMLTextAreaElement).value
    console.log((event.target as HTMLTextAreaElement).value)
  }
  notesClicked(index: number) {
    this.service.selectedNote.set(index);
    this.selectedNote=index;
    this.specificNote=this.service.notes[index].note;
  }

  deleteNote(event: any, index: number) {
    this.service.notes.splice(index,1)
    
      if(index-1>=this.service.notes.length){
        this.specificNote=this.service.notes[0].note;
      }
      else if(this.service.notes.length){
        this.specificNote=this.service.notes[index].note;
      }
      else if(!this.service.notes.length){
        this.specificNote=""
      }
    this.notes=this.service.notes
    event.stopPropagation();
  }
  colorChange(color:string){
    this.service.notes[this.selectedNote].color=color;
  }

  addNote(){
    this.service.notes.unshift({
      note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date:new Date(),
      color:"dark-blue"
    })
    this.selectedNote=0;
    this.specificNote=this.service.notes[0].note
  }
  searchInput(event:Event){
    const inputData=(event.target as HTMLInputElement).value;
    this.notes=this.service.notes.filter(({note})=> note.toLowerCase().includes(inputData.toLowerCase()));
  }
  sidebarCollapse(){
    this.sideBarCollapsedTrue=!this.sideBarCollapsedTrue;
  }
}

