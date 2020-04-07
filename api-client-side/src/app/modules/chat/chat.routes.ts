import { AuthGuard } from 'src/app/core/auth-guard';
import { ChatComponent } from './chat.component';
import { Routes } from '@angular/router';

export const chatRoutes: Routes = [
    {
        path: '',
        component: ChatComponent,
        canActivate: [AuthGuard]
    },

];
