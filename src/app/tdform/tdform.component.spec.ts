import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFormComponent } from './tdform.component';

describe('TDFormComponent', () => {
  let component: TDFormComponent;
  let fixture: ComponentFixture<TDFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
