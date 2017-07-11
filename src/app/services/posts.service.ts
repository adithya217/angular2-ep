
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { PostModel } from '../models/post.model';

@Injectable()
export class PostsService {
	
	private postsSubject = new Subject<Array<PostModel>>();
	
	getPostsObservable(): Observable<PostModel[]> {
		return this.postsSubject.asObservable();
	}
	
	requestMorePosts(): void {
		setTimeout(() => this.sendDummyPosts(), 3000);
	}
	
	private sendDummyPosts():void {
		let dummyPosts = this.createDummyPosts();
		this.postsSubject.next(dummyPosts);
	}
	
	createDummyPosts(): PostModel[] {
		let dummyPosts = new Array<PostModel>();
		
		dummyPosts.push(this.createDummyPost1());
		dummyPosts.push(this.createDummyPost2());
		dummyPosts.push(this.createDummyPost3());
		dummyPosts.push(this.createDummyPost4());
		
		return dummyPosts;
	}
	
	createDummyPost1(): PostModel {
		let dummyPost = new PostModel();
		
		dummyPost.publisherName = 'Amin Aalipou';
		dummyPost.publicationType = PostModel.postPublication;
		dummyPost.publicationTime = Date.now();
		
		dummyPost.postTitle = 'Can a new wave of chat bots from Facebook and Microsoft upend apps as we know them, or is it just wishful thinking?';
		
		let postContent = new Array<string>();
		postContent.push('The rise of conversational "chatbots" begins with a claim you might initially dismiss as preposterous. "Bots are the new apps", Microsoft CEO Satya Nadella delcared during the company\'s Build developers conference last month.');
		
		dummyPost.postContent = postContent;
		dummyPost.isFollowable = false;
		dummyPost.showMore = true;
		
		return dummyPost;
	}
	
	createDummyPost2(): PostModel {
		let dummyPost = new PostModel();
		
		dummyPost.publisherName = 'Alistair Aaronson, MD';
		dummyPost.publicationType = PostModel.sharePublication;
		dummyPost.publicationTime = Date.now();
		
		dummyPost.originalPublisherName = 'Aravind Chembeti';
		
		dummyPost.postTitle = '"Hospitals apparently mark up higher in the departments with more complex services, because it is more difficult for patients to compare prices in these departments"';
		
		let postContent = new Array<string>();
		postContent.push('Imagine getting the bill for and ordinary dinner and noticing, in tiny print, that the restaurant charged you $40 for coffee. Surely you\'d be upset. It turns out that hospitals inflate specific prices all the time in ways that aren\'t transparent to the patient, according to a study that appeared today(Sept. 7) in the ...');
		
		dummyPost.postContent = postContent;
		dummyPost.isFollowable = false;
		dummyPost.showMore = true;
		
		return dummyPost;
	}
	
	createDummyPost3(): PostModel {
		let dummyPost = new PostModel();
		
		dummyPost.publisherName = 'THE TIMES OF INDIA';
		dummyPost.publicationType = PostModel.postPublication;
		dummyPost.publicationTime = Date.now();
		
		dummyPost.postTitle = 'Indian Institute of Technology, Roorkee (IITR), launched its ADVAITA IIT Roorkee';
		
		let postContent = new Array<string>();
		postContent.push('EPR Project Go-Live, to ease its operations and co-ordinate the tasks of various departments. The digitisation project will connect all three of its campuses -- Saharanpur, Greater Noida, and Roorkee, its main campus.');
		
		dummyPost.postContent = postContent;
		dummyPost.isFollowable = true;
		dummyPost.isFollowed = true;
		dummyPost.showMore = true;
		
		return dummyPost;
	}
	
	createDummyPost4(): PostModel {
		let dummyPost = new PostModel();
		
		dummyPost.publisherName = 'Udemy';
		dummyPost.publicationType = PostModel.sponsoredPublication;
		dummyPost.publicationTime = Date.now();
		
		dummyPost.postTitle = 'From humble beginnings to a promising career path';
		
		let postContent = new Array<string>();
		postContent.push('Yuto Morita\'s life was very different just a few years ago, and he wasn\'t feeling good about his future.');
		postContent.push('He struggled with traditional education and didn\'t go to college. "I\'m not the type of person who can study", Yuto explains. After graduating high school, he worked blue-collar jobs in Tokyo on a building site and as a glass garbage collector. "Back then I had my dreams but wandered off course for various reasons. I was in a situation where I didn\'t know what I wanted to do in the future, but I...');
		
		dummyPost.postContent = postContent;
		dummyPost.isFollowable = true;
		dummyPost.isFollowed = true;
		dummyPost.showMore = true;
		
		return dummyPost;
	}
}