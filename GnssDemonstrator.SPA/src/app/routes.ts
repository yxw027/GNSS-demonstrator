import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { KnowledgeTestComponent } from './knowledge-test/knowledge-test.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'ranking', component: UsersListComponent, canActivate: [AuthGuard] },
  {
    path: 'knowledgeTest',
    component: KnowledgeTestComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
