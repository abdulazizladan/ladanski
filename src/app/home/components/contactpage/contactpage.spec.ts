import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactpage } from './contactpage';

describe('Contactpage', () => {
  let component: Contactpage;
  let fixture: ComponentFixture<Contactpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contactpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
