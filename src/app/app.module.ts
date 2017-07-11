
import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { routing } from './app.routes';
import { AppComponent }   from './app.component';

import { HeaderComponent } from './blocks/header/header.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { LoginComponent } from './blocks/login/login.component';
import { TopGroupComponent } from './blocks/top-group/top-group.component';
import { MenuGroupComponent } from './blocks/menu-group/menu-group.component';
import { ProfileComponent } from './blocks/profile/profile.component';
import { PostComponent } from './blocks/post/post.component';
import { FeedComponent } from './blocks/feed/feed.component';
import { RecommendationsComponent } from './blocks/recommendations/recommendations.component';
import { RecentActivitiesComponent } from './blocks/recent-activities/recent-activities.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';

import { HeaderService } from './services/header.service';
import { PostsService } from './services/posts.service';

@NgModule({
  imports :      [ 
	BrowserModule,
	routing,
	InfiniteScrollModule
  ],
  declarations : [
	AppComponent,
	HeaderComponent,
	FooterComponent,
	LoginComponent,
	TopGroupComponent,
	MenuGroupComponent,
	ProfileComponent,
	PostComponent,
	FeedComponent,
	RecommendationsComponent,
	RecentActivitiesComponent,
	LoginPageComponent,
	FeedPageComponent
  ],
  providers : 	 [ HeaderService, PostsService ],
  bootstrap :    [ AppComponent ]
})

export class AppModule { }
