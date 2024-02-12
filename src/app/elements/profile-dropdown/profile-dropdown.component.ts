
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { IUser } from 'src/app/shared/interfaces/i-user';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-profile-dropdown',
	templateUrl: './profile-dropdown.component.html',
	styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

	protected TITLE: string = 'Profile';
	title: string = this.TITLE;
	userName: string = '...';

	isEnvApiEnabled: boolean = this.environmentService.isApiEnabled();
	isHiddenIsProduction: boolean = this.environmentService.isProduction();

	@Output() change = new EventEmitter();

	constructor(
		private securityService: SecurityService,
		private environmentService: EnvironmentService,
	) { }

	ngOnInit(): void {
		this.getUser();
	}

	getUser() {
		const user: IUser | null = this.securityService.getUser();
		if (user) {
			this.userName = user.userName;
		}
	}

	// ____________________________________ toggle ____________________________________

	onForceToggle() {
		this.isEnvApiEnabled = !this.isEnvApiEnabled;
		environment.apiEnabled = this.isEnvApiEnabled;
	}

	onToggleText(): string {
		if (this.isEnvApiEnabled) {
			return 'Api';
		} else {
			return 'Local';
		}
	}

	// ____________________________________ onclick ____________________________________

	onClickHandler() {
		this.securityService.clearLocalSession();
		this.change.emit();
	}

}
