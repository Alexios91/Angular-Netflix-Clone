import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertinaComponent } from './copertina.component';

describe('CopertinaComponent', () => {
  let component: CopertinaComponent;
  let fixture: ComponentFixture<CopertinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
