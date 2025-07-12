import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicespage } from './servicespage';

describe('Servicespage', () => {
  let component: Servicespage;
  let fixture: ComponentFixture<Servicespage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Servicespage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicespage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
