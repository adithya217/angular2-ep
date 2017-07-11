
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ProfileInfoModel } from '../../models/profile-info.model';

@Component({
	selector: 'my-profile',
	templateUrl: 'profile.component.html',
	styleUrls: [ 'profile.component.less' ]
})

export class ProfileComponent implements OnInit, OnDestroy {
	
	@Input()
	profileInfo: ProfileInfoModel;
	
	constructor() {}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
}