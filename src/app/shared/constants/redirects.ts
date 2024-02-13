// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Redirects {
	public static REDIRECT_HOME: string = '/';
	public static REDIRECT_AFTER_LOGIN: string = '/user/dashboard';
	public static REDIRECT_LOGIN: string = '/login';
	public static REDIRECT_LOGOUT: string = '/logout';
	public static REDIRECT_NOT_FOUND: string = '/not-found';

	static REDIRECT_AFTER_LOGIN_FALSE: string = '/login';
	static DASHBOARD: string = '/user/dashboard';
}
