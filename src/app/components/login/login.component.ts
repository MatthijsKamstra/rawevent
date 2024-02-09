
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { ICredentials } from 'src/app/shared/interfaces/i-credentials';

import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	// set loading on when getting data from server
	isLoading: boolean = false; // check icons

	// not sure this is really a good idea???
	authError!: string;

	@Output() change = new EventEmitter();

	// form
	loginForm = new FormGroup({
		username: new FormControl<string>('', [Validators.required, Validators.minLength(4), Validators.maxLength(320)]),
		password: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
	});

	constructor(
		public router: Router,
		private securityService: SecurityService,
	) { }

	// ____________________________________ login ____________________________________

	/**
	 * Attempt to authenticate the user specified in the form's model
	 *
	 * @param credentials
	 */
	loginUser(credentials: ICredentials) {
		this.securityService.login(credentials)
			.subscribe({
				next: (user: IUser) => {
					this.change.emit();
					this.router.navigate([Redirects.REDIRECT_AFTER_LOGIN]);
				},
				error: (error: HttpErrorResponse) => {
					this.isLoading = false;
					// If we get here then there was a problem with the login request to
					// the server
					this.handleLoginError(error);
				}
			});
	};

	private handleLoginError(error: HttpErrorResponse) {
		if (error.status == 401) {
			let _authErrorString = 'login.error.invalidLogin';
			this.authError = _authErrorString;
		} else {
			this.authError = 'login.error.serverError', { message: error.statusText };
		}
	}

	// ____________________________________ onHandlers ____________________________________

	onDebug1Handler() {
		this.loginForm.setValue({ password: '1234', username: 'admin' });
	}

	onSubmitForm() {
		this.isLoading = true;
		const credentials: ICredentials = {
			username: this.loginForm.value.username as string,
			password: this.loginForm.value.password as string
		}
		this.loginUser(credentials);
	}

	// ____________________________________ icon swapper ____________________________________

	getCorrectIcon() {
		let iconClass;
		if (this.isLoading) {
			iconClass = 'fa fa-spinner fa-pulse'; // loading: `fa fa-spinner fa-pulse`
		} else {
			if (this.loginForm.valid) {
				iconClass = 'fa-unlock';
			} else {
				iconClass = 'fa-lock';
			}
		}
		return iconClass;
	}

}

