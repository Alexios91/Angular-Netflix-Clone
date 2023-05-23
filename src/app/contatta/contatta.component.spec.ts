import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattaComponent } from './contatta.component';

describe('ContattaComponent', () => {
  let component: ContattaComponent;
  let fixture: ComponentFixture<ContattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
