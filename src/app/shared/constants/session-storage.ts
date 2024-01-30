// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorage {
	public static SESSION_STORAGE_USER: string = 'rawevent_2024_user';
	public static SESSION_STORAGE_TOKEN: string = 'rawevent_2024_token';
	public static SESSION_STORAGE_ORGANISATION: string = 'rawevent_2024_organisation';
}
