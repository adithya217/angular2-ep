
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None, // to be able to style tags that are outside of this component
	selector: 'body',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.less' ]
})

export class AppComponent { }
