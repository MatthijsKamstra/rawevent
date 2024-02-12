// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants/constants';


@Injectable({
	providedIn: 'root'
})
export class Api {

	/**
	 * get the correct values based upon environment data
	 *
	 * @returns
	 */
	static getUrl(): IConstants {
		if (environment.apiEnabled) {
			return {
				env: `PRD`,
				configApi: `${environment.apiUrl}${Constants.configApi}`,

				helpApi: `${environment.apiUrl}${Constants.helpApi}`,
				settingsApi: `${environment.apiUrl}${Constants.settingsApi}`,

				loginApi: `${environment.apiUrl}${Constants.loginURL}`,
				logoutApi: `${environment.apiUrl}${Constants.logoutURL}`,

				users(): string {
					return `${environment.apiUrl}${Constants.apiUsers}`;
				},

				userById(id: string): string {
					return `${environment.apiUrl}${Constants.apiUserById.replace(':id', `${id}`)}`;
				},
			}
		} else {
			return {
				env: `TEST`,
				configApi: `assets/dummy/json/application.json`,

				helpApi: `assets/dummy/json/help.json`,
				settingsApi: `assets/dummy/json/settings.json`,

				// loginApi: `assets/dummy/json/login.json`,

				loginApi: `assets/dummy/json/fake_login.json`,
				logoutApi: `assets/dummy/json/logout.json`,

				users(): string {
					return `assets/dummy/json/fake_database.json`;
				},

				userById(id: string): string {
					// src/assets/dummy/json/fake_database.json
					return `assets/dummy/json/fake_database.json?id=${id}`;
				},

			}
		}
	}
}


export interface IConstants {
	loginApi: string;
	logoutApi: any;
	env: string;

	configApi: string;
	helpApi: string;
	settingsApi: string;

	// user
	users: () => string;
	userById: (id: string) => string;
}
