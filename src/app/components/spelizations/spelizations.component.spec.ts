import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelizationsComponent } from './spelizations.component';

describe('SpelizationsComponent', () => {
  let component: SpelizationsComponent;
  let fixture: ComponentFixture<SpelizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpelizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
