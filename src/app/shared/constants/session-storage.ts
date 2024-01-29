// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorage {

	public static SESSION_STORAGE_USER: string = 'user_v02';
	public static SESSION_STORAGE_TOKEN: string = 'token_v02';
	public static SESSION_STORAGE_ORGANISATION: string = 'organisation_v02';

}
