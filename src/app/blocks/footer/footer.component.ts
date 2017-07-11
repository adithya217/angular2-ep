
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None, // to be able to style tags that are outside of this component
	selector : 'my-footer',
	templateUrl : 'footer.component.html',
	styleUrls : ['footer.component.less']
})

export class FooterComponent implements OnInit, OnDestroy {
	
	constructor() {}
	
	ngOnInit(): void {
	}
	
	ngOnDestroy(): void {
	}
}