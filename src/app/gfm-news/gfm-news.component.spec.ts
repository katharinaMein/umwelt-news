import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFMNewsComponent } from './gfm-news.component';

describe('GFMNewsComponent', () => {
  let component: GFMNewsComponent;
  let fixture: ComponentFixture<GFMNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GFMNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GFMNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
