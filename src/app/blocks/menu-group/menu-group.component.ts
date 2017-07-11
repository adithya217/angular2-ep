
import { Component, Input, OnInit, OnDestroy} from '@angular/core';

import { MenuGroupModel } from '../../models/menu-group.model';

@Component({
	selector: 'my-menu-group',
	templateUrl: 'menu-group.component.html',
	styleUrls: [ 'menu-group.component.less' ]
})

export class MenuGroupComponent implements OnInit, OnDestroy {
	
	@Input()
	groupInfo: MenuGroupModel;
	
	constructor() {}
	
	ngOnInit(): void {}
	
	ngOnDestroy(): void {}
	
	toggleExpand(): void {
		this.groupInfo.isExpanded = !this.groupInfo.isExpanded;
		this.groupInfo.isCollapsed = !this.groupInfo.isCollapsed;
	}
}