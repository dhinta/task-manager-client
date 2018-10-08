import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDownComponent } from './site-down.component';

describe('SiteDownComponent', () => {
  let component: SiteDownComponent;
  let fixture: ComponentFixture<SiteDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
