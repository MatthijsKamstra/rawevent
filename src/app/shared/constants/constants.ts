// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Constants {

	public readonly API_ENDPOINT: string = 'domain/api';
	public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';

	public static configApi: string = '/settings/application';
	public static settingsApi: string = '/settings';
	public static helpApi: string = '/help';
	public static apiUsers: string = '/user/:id/';
	public static loginURL: string = '/login';
	public static logoutURL: string = '/logout';
}
