import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepAutoimunComponent } from './resep-autoimun.component';

describe('ResepAutoimunComponent', () => {
  let component: ResepAutoimunComponent;
  let fixture: ComponentFixture<ResepAutoimunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepAutoimunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepAutoimunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
