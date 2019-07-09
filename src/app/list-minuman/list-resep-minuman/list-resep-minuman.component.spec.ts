import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResepMinumanComponent } from './list-resep-minuman.component';

describe('ListResepMinumanComponent', () => {
  let component: ListResepMinumanComponent;
  let fixture: ComponentFixture<ListResepMinumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResepMinumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResepMinumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
