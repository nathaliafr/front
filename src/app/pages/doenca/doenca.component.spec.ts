import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencaComponent } from './doenca.component';

describe('DoencaComponent', () => {
  let component: DoencaComponent;
  let fixture: ComponentFixture<DoencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
