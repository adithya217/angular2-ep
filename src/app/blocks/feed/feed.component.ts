
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { HeaderService } from '../../services/header.service';
import { PostsService } from '../../services/posts.service';

import { MenuGroupModel } from '../../models/menu-group.model';
import { MenuGroupItemModel } from '../../models/menu-group-item.model';
import { ProfileInfoModel } from '../../models/profile-info.model';
import { PostModel } from '../../models/post.model';
import { RecommendationModel } from '../../models/recommendation.model';
import { RecentActivityModel } from '../../models/recent-activity.model';

@Component({
	selector : 'my-feed',
	templateUrl : 'feed.component.html',
	styleUrls : ['feed.component.less']
})

export class FeedComponent implements OnInit, OnDestroy {
	
	hsSubscription: Subscription;
	psSubscription: Subscription;
	
	newContactsCount: number;
	newMessagesCount: number;
	menuGroups: MenuGroupModel[];
	profileInfo: ProfileInfoModel;
	posts: PostModel[];
	recommendations: RecommendationModel[];
	recentActivities: RecentActivityModel[];
	
	showMobileMenu: boolean;
	loadMorePosts: boolean;
	showPostsLoadingIcon: boolean;
	
	constructor(
		private headerService: HeaderService,
		private postsService: PostsService
	) {
		this.newContactsCount = 14;
		this.newMessagesCount = 7;
		this.showMobileMenu = false;
		this.loadMorePosts = true;
		this.showPostsLoadingIcon = true;
		this.posts = new Array<PostModel>();
		
		this.createDummyData();
	}
	
	ngOnInit(): void {
		this.hsSubscription = this.headerService.getMenuBtnsToggleUpdate().subscribe(
			value => {
				this.toggleMenu();
			}
		);
		
		this.psSubscription = this.postsService.getPostsObservable().subscribe(
			value => {
				this.posts = this.posts.concat(value);
				this.showPostsLoadingIcon = false;
				this.loadMorePosts = true;
			}
		);
	}
	
	ngOnDestroy(): void {
		if(this.hsSubscription){
			this.hsSubscription.unsubscribe();
		}
		
		if(this.psSubscription){
			this.psSubscription.unsubscribe();
		}
	}
	
	toggleMenu(): void {
		document.body.classList.toggle('no-scroll');
		this.showMobileMenu = !this.showMobileMenu;
	}
	
	onLoadMorePosts(): void {
		this.showPostsLoadingIcon = true;
		this.loadMorePosts = false;
		this.postsService.requestMorePosts();
	}
	
	createDummyData(): void {
		this.menuGroups = this.createMenuGroups();
		this.profileInfo = this.createDummyProfileInfo();
		this.recommendations = this.createDummyRecommendations();
		this.recentActivities = this.createDummyRecentActivities();
	}
	
	createMenuGroups(): MenuGroupModel[] {
		let menuGroups = new Array<MenuGroupModel>();
		
		menuGroups.push(this.createFavouritesGroup());
		menuGroups.push(this.createGroupsGroup());
		menuGroups.push(this.createArticlesGroup());
		menuGroups.push(this.createTestsGroup());
		menuGroups.push(this.createPagesGroup());
		menuGroups.push(this.createEventsGroup());
		
		return menuGroups;
	}
	
	createFavouritesGroup(): MenuGroupModel {
		let favouriteMG = new MenuGroupModel('favourites', 'fa-heart', 'FAVOURITES', false, true);
		return favouriteMG;
	}
	
	createGroupsGroup(): MenuGroupModel {		
		let groupsMG = new MenuGroupModel('groups', 'fa-users', 'GROUPS', true, false);
		
		groupsMG.addItem(new MenuGroupItemModel('MY GROUPS', ''));
		groupsMG.addItem(new MenuGroupItemModel('CREATE A GROUP', ''));
		groupsMG.addItem(new MenuGroupItemModel('DISCOVER GROUPS', ''));
		
		return groupsMG;
	}
	
	createArticlesGroup(): MenuGroupModel {		
		let articlesMG = new MenuGroupModel('articles', 'fa-file-text', 'ARTICLES', true, false);
		
		articlesMG.addItem(new MenuGroupItemModel('MY ARTICLES', ''));
		articlesMG.addItem(new MenuGroupItemModel('POST AN ARTICLE', ''));
		articlesMG.addItem(new MenuGroupItemModel('DISCOVER ARTICLES', ''));
		
		return articlesMG;
	}
	
	createTestsGroup(): MenuGroupModel {		
		let testsMG = new MenuGroupModel('tests', 'fa-pencil-square', 'TESTS', true, false);
		
		testsMG.addItem(new MenuGroupItemModel('MY TESTS', ''));
		testsMG.addItem(new MenuGroupItemModel('CREATE A TEST', ''));
		testsMG.addItem(new MenuGroupItemModel('DISCOVER TESTS', ''));
		
		return testsMG;
	}
	
	createPagesGroup(): MenuGroupModel {		
		let pagesMG = new MenuGroupModel('pages', 'fa-book', 'PAGES', true, false);
		
		pagesMG.addItem(new MenuGroupItemModel('MY PAGES', ''));
		pagesMG.addItem(new MenuGroupItemModel('CREATE A PAGE', ''));
		pagesMG.addItem(new MenuGroupItemModel('DISCOVER PAGES', ''));
		
		return pagesMG;
	}
	
	createEventsGroup(): MenuGroupModel {		
		let eventsMG = new MenuGroupModel('events', 'fa-calendar', 'EVENTS', true, false);
		
		eventsMG.addItem(new MenuGroupItemModel('MY EVENTS', ''));
		eventsMG.addItem(new MenuGroupItemModel('CREATE AN EVENT', ''));
		eventsMG.addItem(new MenuGroupItemModel('DISCOVER EVENTS', ''));
		
		return eventsMG;
	}
	
	createDummyProfileInfo(): ProfileInfoModel {
		let dummyProfInfo = new ProfileInfoModel();
		
		dummyProfInfo.profileImageUrl = '';
		dummyProfInfo.name = 'Amin Aalipou';
		dummyProfInfo.profession = 'Asst. Professor';
		dummyProfInfo.education = 'Radiation Medicine(DRM), Radiological Physics(DRP)';
		dummyProfInfo.institution = 'Stanford University';
		dummyProfInfo.city = 'Stanford';
		dummyProfInfo.country = 'United States';
		dummyProfInfo.linkedInUrl = 'https://in.linkedin.com/in/kiranpunukollu';
		dummyProfInfo.connectionCount = '200+';
		
		return dummyProfInfo;
	}
	
	createDummyRecommendations(): RecommendationModel[] {
		let dummyRecommendations = new Array<RecommendationModel>();
		
		dummyRecommendations.push(this.createDummyRecommendation1());
		
		return dummyRecommendations;
	}
	
	createDummyRecommendation1(): RecommendationModel {
		let dummyRecommendation = new RecommendationModel();
		
		dummyRecommendation.title = 'NIIT Imperia Program Aptitude Test';
		dummyRecommendation.imageUrl = 'images/placeholder.png';
		dummyRecommendation.textContent = 'The NIIT Imperia Program Aptitude Test (PAT) is built upon NIIT\'s research and validated conduct of test administrations on several thousand students. The test has been specifically designed to facilitate NIIT Imperia and its academic partners in selecting applicants for various programs of study.';
	
		return dummyRecommendation;
	}
	
	createDummyRecentActivities(): RecentActivityModel[] {
		let dummyRecentActivities = new Array<RecentActivityModel>();
		
		dummyRecentActivities.push(this.createDummyRecentActivity1());
		dummyRecentActivities.push(this.createDummyRecentActivity2());
		dummyRecentActivities.push(this.createDummyRecentActivity3());
		dummyRecentActivities.push(this.createDummyRecentActivity4());
		
		return dummyRecentActivities;
	}
	
	createDummyRecentActivity1(): RecentActivityModel {
		let dummyRecentActivity = new RecentActivityModel();
		
		dummyRecentActivity.userImageUrl = 'images/logo.png';
		dummyRecentActivity.userName = 'Richard Nyman';
		dummyRecentActivity.userAction = 'followed your works';
		
		return dummyRecentActivity;
	}
	
	createDummyRecentActivity2(): RecentActivityModel {
		let dummyRecentActivity = new RecentActivityModel();
		
		dummyRecentActivity.userImageUrl = 'images/logo.png';
		dummyRecentActivity.userName = 'Isaiah Ayrton';
		dummyRecentActivity.userAction = 'liked your work';
		
		return dummyRecentActivity;
	}
	
	createDummyRecentActivity3(): RecentActivityModel {
		let dummyRecentActivity = new RecentActivityModel();
		
		dummyRecentActivity.userImageUrl = 'images/logo.png';
		dummyRecentActivity.userName = 'Destiny Higgins';
		dummyRecentActivity.userAction = 'saved your project to favorites';
		
		return dummyRecentActivity;
	}
	
	createDummyRecentActivity4(): RecentActivityModel {
		let dummyRecentActivity = new RecentActivityModel();
		
		dummyRecentActivity.userImageUrl = 'images/logo.png';
		dummyRecentActivity.userName = 'Ella Warren';
		dummyRecentActivity.userAction = 'saved your project to favorites';
		
		return dummyRecentActivity;
	}
}