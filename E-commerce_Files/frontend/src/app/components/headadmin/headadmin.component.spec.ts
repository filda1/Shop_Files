import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadadminComponent } from './headadmin.component';

describe('HeadadminComponent', () => {
  let component: HeadadminComponent;
  let fixture: ComponentFixture<HeadadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
