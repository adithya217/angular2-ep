
import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderModel } from '../../models/header.model';

@Component({
	selector : 'my-login-page',
	templateUrl : 'login-page.component.html',
	styleUrls : ['login-page.component.less']
})

export class LoginPageComponent implements OnInit, OnDestroy {
	
	headerModel: HeaderModel;
	
	constructor() {
		this.headerModel = new HeaderModel();
		this.headerModel.loginPageMode = true;
	}
	
	ngOnInit(): void {	
	}
	
	ngOnDestroy(): void {	
	}
}