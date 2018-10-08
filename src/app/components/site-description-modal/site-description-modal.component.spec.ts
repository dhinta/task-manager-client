import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDescriptionModalComponent } from './site-description-modal.component';

describe('SiteDescriptionModalComponent', () => {
  let component: SiteDescriptionModalComponent;
  let fixture: ComponentFixture<SiteDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
