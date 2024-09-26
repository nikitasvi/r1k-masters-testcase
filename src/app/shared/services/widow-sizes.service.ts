import { BreakpointObserver } from "@angular/cdk/layout";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { WindowSize } from "../enums/window-size.enum";

@Injectable({
	providedIn: "root"
})
export class WindowSizeService {
	private bpo = inject(BreakpointObserver);

	private screenSizeSubject = new BehaviorSubject<number>(window.innerWidth);
	public screenSize$ = this.screenSizeSubject.asObservable();

	constructor() {
		this.observeScreenSize();
	}

	public observeScreenSize() {
		this.bpo.observe([
			"only screen and (max-width: 320px)",
			"only screen and (max-width: 480px)",
			"only screen and (max-width: 768px)",
			"only screen and (max-width: 1024px)",
			"only screen and (max-width: 1440px)"
		])
		.subscribe(result => {
			if (result.breakpoints["only screen and (max-width: 320px)"]) {
				this.screenSizeSubject.next(WindowSize.MOBILE);
			} else if (result.breakpoints["only screen and (max-width: 480px)"]) {
				this.screenSizeSubject.next(WindowSize.MOBILE_LANDSCAPE);
			} else if (result.breakpoints["only screen and (max-width: 768px)"]) {
				this.screenSizeSubject.next(WindowSize.TABLET);
			} else if (result.breakpoints["only screen and (max-width: 1024px)"]) {
				this.screenSizeSubject.next(WindowSize.LAPTOP);
			} else if (result.breakpoints["only screen and (max-width: 1440px)"]) {
				this.screenSizeSubject.next(WindowSize.DESKTOP);
			}
		});
	}

	public isLaptopOrSmaller(): Observable<boolean> {
		return this.screenSize$.pipe(
			map(size => size === WindowSize.LAPTOP || 
				size === WindowSize.TABLET || 
				size === WindowSize.MOBILE || 
				size === WindowSize.MOBILE_LANDSCAPE)
		);
	}

	public isTabletOrSmaller(): Observable<boolean> {
		return this.screenSize$.pipe(
			map(size => size === WindowSize.TABLET || 
				size === WindowSize.MOBILE || 
				size === WindowSize.MOBILE_LANDSCAPE)
		);
	}
	
	public isMobileOrSmaller(): Observable<boolean> {
		return this.screenSize$.pipe(
			map(size => size === WindowSize.MOBILE || 
				size === WindowSize.MOBILE_LANDSCAPE)
		);
	}
	
	public isDesktopOrLarger(): Observable<boolean> {
		return this.screenSize$.pipe(
			map(size => size === WindowSize.DESKTOP)
		);
	}
}