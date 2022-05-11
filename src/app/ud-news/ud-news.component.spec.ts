import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdNewsComponent } from './ud-news.component';

describe('UdNewsComponent', () => {
  let component: UdNewsComponent;
  let fixture: ComponentFixture<UdNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
