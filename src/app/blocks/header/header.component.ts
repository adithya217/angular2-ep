
import { Component, Input } from '@angular/core';

import { HeaderModel } from '../../models/header.model';
import { HeaderService } from '../../services/header.service';

@Component({
	selector : 'my-header',
	templateUrl : 'header.component.html',
	styleUrls : ['header.component.less']
})

export class HeaderComponent {
	@Input()
	headerModel: HeaderModel;
	
	showMobileSigninBtn = false;
	showMobileSignupBtn = true;
	
	showMenuBtn = true;
	showCloseBtn = false;
	
	constructor(private headerService: HeaderService) {}
	
	toggleAuthBtns(): void {
		this.showMobileSigninBtn = !this.showMobileSigninBtn;
		this.showMobileSignupBtn = !this.showMobileSignupBtn;
		
		this.headerService.updateAuthBtnsToggleState('');
	}
	
	toggleMenu(): void {
		this.showMenuBtn = !this.showMenuBtn;
		this.showCloseBtn = !this.showCloseBtn;
		
		this.headerService.updateMenuBtnsToggleState('')
	}
}