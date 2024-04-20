import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagitionComponent } from './navagition.component';

describe('NavagitionComponent', () => {
  let component: NavagitionComponent;
  let fixture: ComponentFixture<NavagitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavagitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavagitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
