import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NoteDetailComponent } from './note-detail.component';
import { NoteDetailComponentRoutingModule } from './note-detail.routing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NoteDetailComponentRoutingModule,
  ],
  declarations: [NoteDetailComponent]
})
export class NoteDetailModule { }
