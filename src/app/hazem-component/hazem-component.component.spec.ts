import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazemComponentComponent } from './hazem-component.component';

describe('HazemComponentComponent', () => {
  let component: HazemComponentComponent;
  let fixture: ComponentFixture<HazemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HazemComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HazemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
