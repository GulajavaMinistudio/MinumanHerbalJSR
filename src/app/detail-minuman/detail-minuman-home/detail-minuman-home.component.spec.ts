import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMinumanHomeComponent } from './detail-minuman-home.component';

describe('DetailMinumanHomeComponent', () => {
  let component: DetailMinumanHomeComponent;
  let fixture: ComponentFixture<DetailMinumanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMinumanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMinumanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
