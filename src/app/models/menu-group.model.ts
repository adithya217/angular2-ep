
import { MenuGroupItemModel } from './menu-group-item.model';

export class MenuGroupModel {
	groupName: string;
	
	headerIconClassName: string;
	headerName: string;
	
	isExpanded: boolean;
	isCollapsed: boolean;
	
	items: MenuGroupItemModel[];
	
	constructor(
		groupName: string,
		headerIconClassName: string,
		headerName: string,
		isExpanded: boolean,
		isCollapsed: boolean
	) {
		this.groupName = groupName;
		this.headerIconClassName = headerIconClassName;
		this.headerName = headerName;
		this.isExpanded = isExpanded;
		this.isCollapsed = isCollapsed;
		this.items = new Array<MenuGroupItemModel>();
	}
	
	addItem(item: MenuGroupItemModel) {
		this.items.push(item);
	}
}