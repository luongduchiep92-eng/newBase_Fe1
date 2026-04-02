import { Routes } from '@angular/router';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { EditStory } from './pages/edit-story/edit-story';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
export const routes: Routes = [
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
  },

  {
    path: 'edit/:id',
    component: EditStory,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
];
