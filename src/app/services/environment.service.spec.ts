/*
Copyright 2014-2024 Smart Society Services B.V.
*/

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Environment } from '../shared/interfaces/i-environment';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService (Generated)', () => {

	let service: EnvironmentService;

	let httpTestingController: HttpTestingController;

	const environmentCopy: Environment = Object.assign({}, environment);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [EnvironmentService,]
		});
		service = TestBed.inject(EnvironmentService);

		httpTestingController = TestBed.inject(HttpTestingController);

		environment.apiEnabled = true;
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	afterAll(() => {
		environment.apiEnabled = environmentCopy.apiEnabled;
		environment.production = environmentCopy.production;
	})

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// EnvironmentService

	// 1. Generated test for "getEnvironment"
	describe('getEnvironment', () => {

		// test with return type `Environment`
		it('#getEnvironment should return Environment', () => {
			// Arrange
			const _returnEnvironment: Environment = service.getEnvironment();
			const _spy = spyOn(service, 'getEnvironment').and.returnValue(_returnEnvironment);
			// Act
			service.getEnvironment();
			// Assert
			expect(service.getEnvironment).toBeDefined();
			expect(service.getEnvironment()).toBe(_returnEnvironment);
			expect(_spy).toHaveBeenCalled();
		});
	});

	// 2. Generated test for "isApiEnabled"
	describe('isApiEnabled', () => {

		// test with return type `boolean`
		it('#should return boolean true', () => {
			// Arrange
			const _returnBoolean: boolean = true;
			const _spy = spyOn(service, 'isApiEnabled').and.returnValue(_returnBoolean);
			// Act
			service.isApiEnabled();
			// Assert
			expect(service.isApiEnabled).toBeDefined();
			expect(service.isApiEnabled()).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return boolean false', () => {
			// Arrange
			const _returnBoolean: boolean = false;
			const _spy = spyOn(service, 'isApiEnabled').and.returnValue(_returnBoolean);
			// Act
			service.isApiEnabled();
			// Assert
			expect(service.isApiEnabled).toBeDefined();
			expect(service.isApiEnabled()).toBeFalse();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should check default return value "isApiEnabled"', () => {
			// Arrange
			// Act
			// Assert
			expect(service.isApiEnabled()).toBeTrue();
		});

	});

	// 3. Generated test for "isProduction"
	describe('isProduction', () => {

		// test with return type `boolean`
		it('#should return boolean true', () => {
			// Arrange
			const _returnBoolean: boolean = true;
			const _spy = spyOn(service, 'isProduction').and.returnValue(_returnBoolean);
			// Act
			service.isProduction();
			// Assert
			expect(service.isProduction).toBeDefined();
			expect(service.isProduction()).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return boolean false', () => {
			// Arrange
			const _returnBoolean: boolean = false;
			const _spy = spyOn(service, 'isProduction').and.returnValue(_returnBoolean);
			// Act
			service.isProduction();
			// Assert
			expect(service.isProduction).toBeDefined();
			expect(service.isProduction()).toBeFalse();
			expect(_spy).toHaveBeenCalled();
		});
	});

});
