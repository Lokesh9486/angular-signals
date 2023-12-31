import { Injectable, WritableSignal, signal } from '@angular/core';

export interface notes{
    note:string,
    date:string|Date,
    color:string
}

@Injectable({providedIn:"root"})
export class ServiceService {
  notes:notes[]=[
    {
      note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date:"Thu Jan 01 1970 05:29:57 GMT+0530 (India Standard Time)",
      color:"dark-blue"
    },
    {
      note:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      date:"Thu Jan 02 1970 05:29:57 GMT+0530 (India Standard Time)",
      color:"note-green"
    },
    {
      note:"consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      date:"Thu Jan 03 1970 05:29:57 GMT+0530 (India Standard Time)",
      color:"note-blue"
    },
    {
      note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date:"Thu Jan 04 1970 05:29:57 GMT+0530 (India Standard Time)",
      color:"note-yellow"
    },
    {
      note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date:"Thu Jan 04 1970 05:29:57 GMT+0530 (India Standard Time)",
      color:"note-orange"
    },
  ]
  selectedNote:WritableSignal<number>=signal(0);
  collapseSideBar:WritableSignal<boolean>=signal(false);
  notesClicked(index: number) {
    this.selectedNote.update(()=>index);
  }
  countPerPage:WritableSignal<number>=signal(5);
  currentPage:WritableSignal<number>=signal(1);
  
}
