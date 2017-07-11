
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { PostModel } from '../../models/post.model';

@Component({
	selector: 'my-post',
	templateUrl: 'post.component.html',
	styleUrls: [ 'post.component.less' ]
})

export class PostComponent implements OnInit, OnDestroy {
	
	@Input()
	post: PostModel;

	constructor() {}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
}