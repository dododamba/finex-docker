import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { chatRoutes } from './chat.routes';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';



@NgModule({
  declarations: [ChatComponent, ChatListComponent, ChatDetailComponent],
  imports: [
    CommonModule, RouterModule.forChild(chatRoutes)
  ]
})
export class ChatModule { }
