import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Environment } from '../shared/interfaces/i-environment';

@Injectable({
	providedIn: 'root'
})
export class EnvironmentService {

	protected readonly environment: Environment = environment;

	constructor() { }

	public getEnvironment(): Environment {
		return this.environment;
	}

	public isApiEnabled(): boolean {
		return this.environment.apiEnabled;
	}

	public isProduction(): boolean {
		return this.environment.production;
	}

}
