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
	public static apiUsers: string = '/users/:id/';
	static loginURL: any;
	static logoutURL: any;

	// Sessions storage
	public static SESSION_STORAGE_USER: string = 'user_v02';
	public static SESSION_STORAGE_TOKEN: string = 'token_v02';
	public static SESSION_STORAGE_ORGANISATION: string = 'organisation_v02';

}


