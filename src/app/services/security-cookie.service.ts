import { Injectable } from '@angular/core';
import { Constants } from '../shared/constants/constants';
import { IUser } from '../shared/interfaces/i-user';
import { SessionService } from './session.service';

@Injectable({
	providedIn: 'root'
})
export class SecurityCookieService {

	currentUser!: IUser | null;

	constructor(
		private sessionService: SessionService,
	) { }

	storeUser(user: IUser): void {
		this.currentUser = user;
		this.setSessionStorageUser(JSON.stringify(user));
		if (user.token)
			this.setCurrentToken(user.token);
	};

	removeUser() {
		this.currentUser = null;
		this.sessionService.removeItem(Constants.SESSION_STORAGE_USER);
		this.sessionService.removeItem(Constants.SESSION_STORAGE_TOKEN);
		this.sessionService.removeItem(Constants.SESSION_STORAGE_ORGANISATION);
	};

	getUser(): IUser | null {
		if (!this.currentUser) {
			const user = this.sessionService.getItem(Constants.SESSION_STORAGE_USER);
			this.currentUser = user ? JSON.parse(user) : null;
		}
		return this.currentUser;
	};

	setSessionStorageUser(user: string): void {
		this.sessionService.setItem(Constants.SESSION_STORAGE_USER, user);
	}

	updateToken(token: string): void {
		let user = this.getUser();
		if (user !== null) {
			user.token = token;
			this.storeUser(user);
		}
	};

	getCurrentToken(): string {
		return this.sessionService.getItem(Constants.SESSION_STORAGE_TOKEN);
	}

	setCurrentToken(token: string) {
		this.sessionService.setItem(Constants.SESSION_STORAGE_TOKEN, token);
	}

	getCurrentOrganisation(): string {
		return this.sessionService.getItem(Constants.SESSION_STORAGE_ORGANISATION);
	}

}
