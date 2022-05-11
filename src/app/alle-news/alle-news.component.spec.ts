import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleNewsComponent } from './alle-news.component';

describe('AlleNewsComponent', () => {
  let component: AlleNewsComponent;
  let fixture: ComponentFixture<AlleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
