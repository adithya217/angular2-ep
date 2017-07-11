
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RecentActivityModel } from '../../models/recent-activity.model';

@Component({
	selector: 'my-recent-activities',
	templateUrl: 'recent-activities.component.html',
	styleUrls: [ 'recent-activities.component.less' ]
})

export class RecentActivitiesComponent implements OnInit, OnDestroy {
	
	@Input()
	recentActivities: RecentActivityModel[];
	
	showMore: boolean;
	
	constructor() {
		this.showMore = true;
	}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
}