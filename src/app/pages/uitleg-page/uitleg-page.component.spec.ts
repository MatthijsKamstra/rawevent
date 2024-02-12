import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitlegPageComponent } from './uitleg-page.component';

describe('UitlegPageComponent', () => {
  let component: UitlegPageComponent;
  let fixture: ComponentFixture<UitlegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitlegPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UitlegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
