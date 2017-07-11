
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderService {
	
	private authBtnToggleSubject = new Subject<string>();
	private menuBtnsToggleSubject = new Subject<string>();
	
	updateAuthBtnsToggleState(value: string) {
		this.authBtnToggleSubject.next(value);
	}
	
	getAuthBtnsToggleUpdate(): Observable<string> {
		return this.authBtnToggleSubject.asObservable();
	}
	
	updateMenuBtnsToggleState(value: string) {
		this.menuBtnsToggleSubject.next(value);
	}
	
	getMenuBtnsToggleUpdate(): Observable<string> {
		return this.menuBtnsToggleSubject.asObservable();
	}
}