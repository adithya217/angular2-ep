
import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderModel } from '../../models/header.model';

@Component({
	selector : 'my-feed-page',
	templateUrl : 'feed-page.component.html',
	styleUrls: [ 'feed-page.component.less' ]
})

export class FeedPageComponent implements OnInit, OnDestroy {
	
	headerModel: HeaderModel;
	
	constructor() {
		this.headerModel = new HeaderModel();
		this.headerModel.feedPageMode = true;
	}
	
	ngOnInit(): void {	
	}
	
	ngOnDestroy(): void {	
	}
}