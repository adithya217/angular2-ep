
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';

@Component({
	selector: 'my-recommendations',
	templateUrl: 'recommendations.component.html',
	styleUrls: [ 'recommendations.component.less' ]
})

export class RecommendationsComponent implements OnInit, OnDestroy {
	
	@Input()
	recommendations: RecommendationModel[];
	
	showMore: boolean;
	
	constructor() {
		this.showMore = true;
	}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
}