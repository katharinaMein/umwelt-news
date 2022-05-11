import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmuvNewsComponent } from './bmuv-news.component';

describe('BmuvNewsComponent', () => {
  let component: BmuvNewsComponent;
  let fixture: ComponentFixture<BmuvNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmuvNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmuvNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
