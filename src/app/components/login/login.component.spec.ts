import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { NgxTranslateModule } from 'src/app/module/translate/translate.module';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { ICredentials } from 'src/app/shared/interfaces/i-credentials';
import { IUSER, SPEC_CONST } from 'src/app/shared/test/spec-helpers/constants.spec-helper';
import { SharedTestData } from 'src/app/shared/test/test-data/shared-test-data';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	let httpTestingController: HttpTestingController;
	let securityServiceSpy: jasmine.SpyObj<SecurityService>;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				NgxTranslateModule,
				RouterTestingModule.withRoutes([
					{ path: 'home', component: HomePageComponent }
				]),
			],
			declarations: [LoginComponent],
			providers: [
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['login'])
				}
			],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		router = TestBed.inject(Router);
		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;

		securityServiceSpy.login.and.returnValue(of(SPEC_CONST.getValue(IUSER)));

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('loginUser', () => {
		it('should call securityService.login and redirect', () => {
			const credentials = Object.assign({}, SharedTestData.CREDENTIALS);
			const routerSpy = spyOn(router, 'navigate');

			component.loginUser(credentials);

			expect(securityServiceSpy.login).toHaveBeenCalledOnceWith(credentials);
			expect(routerSpy).toHaveBeenCalledOnceWith([Redirects.REDIRECT_AFTER_LOGIN]);
			expect(component.authError).toBeFalsy();
		})

		it('should set authError in case of login error ', () => {
			const credentials = Object.assign({}, SharedTestData.CREDENTIALS);
			securityServiceSpy.login.and.returnValue(throwError(() => SharedTestData.ERROR_401));
			fixture.detectChanges();

			component.loginUser(credentials);

			expect(securityServiceSpy.login).toHaveBeenCalledOnceWith(credentials);
			expect(component.authError).toBeTruthy();
		})
	})

	describe('onSubmitForm', () => {
		it('should call loginUser with credentials from form', () => {
			const spy = spyOn(component, 'loginUser');
			const credentials: ICredentials = Object.assign({}, SharedTestData.CREDENTIALS);
			component.loginForm.get('username')?.setValue(credentials.username);
			component.loginForm.get('password')?.setValue(credentials.password);
			fixture.detectChanges();

			component.onSubmitForm();

			expect(spy).toHaveBeenCalledOnceWith(credentials);
		})
	})
});
