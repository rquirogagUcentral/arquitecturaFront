import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspuestaComponent } from './rspuesta.component';

describe('RspuestaComponent', () => {
  let component: RspuestaComponent;
  let fixture: ComponentFixture<RspuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RspuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RspuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
