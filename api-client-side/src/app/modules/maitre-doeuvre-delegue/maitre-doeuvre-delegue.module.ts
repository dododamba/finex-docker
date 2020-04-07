import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaitreDoeuvreDelegueComponent } from './maitre-doeuvre-delegue.component';
import { MaitreDoeuvreDelegueListComponent } from './maitre-doeuvre-delegue-list/maitre-doeuvre-delegue-list.component';
import { MaitreDoeuvreDelegueCreateComponent } from './maitre-doeuvre-delegue-create/maitre-doeuvre-delegue-create.component';
import { MaitreDoeuvreDelegueUpdateComponent } from './maitre-doeuvre-delegue-update/maitre-doeuvre-delegue-update.component';
import { MaitreDoeuvreDelegueEditComponent } from './maitre-doeuvre-delegue-edit/maitre-doeuvre-delegue-edit.component';
import { MaitreDoeuvreDelegueShowComponent } from './maitre-doeuvre-delegue-show/maitre-doeuvre-delegue-show.component';



@NgModule({
  declarations: [MaitreDoeuvreDelegueComponent, MaitreDoeuvreDelegueListComponent, MaitreDoeuvreDelegueCreateComponent, MaitreDoeuvreDelegueUpdateComponent, MaitreDoeuvreDelegueEditComponent, MaitreDoeuvreDelegueShowComponent],
  imports: [
    CommonModule
  ]
})
export class MaitreDoeuvreDelegueModule { }
