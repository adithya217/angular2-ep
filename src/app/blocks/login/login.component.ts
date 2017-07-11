
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { HeaderService } from '../../services/header.service';

@Component({
	selector : 'my-login',
	templateUrl : 'login.component.html',
	styleUrls : ['login.component.less']
})

export class LoginComponent implements OnInit, OnDestroy {
	
	hsSubscription: Subscription;
	
	showSUContainer = false;
	showSIContainer = true;
	
	constructor(
		private headerService: HeaderService,
		private router: Router
	) {}
	
	ngOnInit(): void {
		this.hsSubscription = this.headerService.getAuthBtnsToggleUpdate().subscribe(
			value => {
				this.toggleAuthBoxes();
			}
		);
	}
	
	ngOnDestroy(): void {
		if(this.hsSubscription){
			this.hsSubscription.unsubscribe();
		}
	}
	
	toggleAuthBoxes(): void {
		this.showSUContainer = !this.showSUContainer;
		this.showSIContainer = !this.showSIContainer;
	}
	
	createAccount(): void {
		this.router.navigate(['/feed']);
	}
	
	login(): void {
		this.router.navigate(['/feed']);
	}
}