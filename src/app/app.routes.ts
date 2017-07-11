
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'feed', component: FeedPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);