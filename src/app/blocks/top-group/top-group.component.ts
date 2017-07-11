
import { Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
	selector: 'my-top-group',
	templateUrl: 'top-group.component.html',
	styleUrls: [ 'top-group.component.less' ]
})

export class TopGroupComponent implements OnInit, OnDestroy {
	
	@Input()
	newContactsCount: number;
	
	@Input()
	newMessagesCount: number;
	
	constructor() {}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
}