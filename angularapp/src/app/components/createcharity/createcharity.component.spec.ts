import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecharityComponent } from './createcharity.component';

describe('CreatecharityComponent', () => {
  let component: CreatecharityComponent;
  let fixture: ComponentFixture<CreatecharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecharityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
