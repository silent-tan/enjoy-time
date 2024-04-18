import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

import Home from './Home';



export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/todo',
    component: lazy(() => import('./todo-list')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors')),
  },
];