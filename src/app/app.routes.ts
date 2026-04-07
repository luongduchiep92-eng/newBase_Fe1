import { Routes } from '@angular/router';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { EditStory } from './pages/edit-story/edit-story';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'stories', component: Stories },
  { path: 'add-story', component: AddStory },
  { path: 'edit/:id', component: EditStory },
];