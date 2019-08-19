import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepInfusedwaterComponent } from './resep-infusedwater.component';

describe('ResepInfusedwaterComponent', () => {
  let component: ResepInfusedwaterComponent;
  let fixture: ComponentFixture<ResepInfusedwaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepInfusedwaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepInfusedwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
