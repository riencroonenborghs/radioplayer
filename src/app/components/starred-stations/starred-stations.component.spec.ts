import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredStationsComponent } from './starred-stations.component';

describe('StarredStationsComponent', () => {
  let component: StarredStationsComponent;
  let fixture: ComponentFixture<StarredStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
