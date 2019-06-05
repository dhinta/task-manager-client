import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicBaseComponent } from './public-base.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('PublicBaseComponent', () => {
  let component: PublicBaseComponent;
  let fixture: ComponentFixture<PublicBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicBaseComponent ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
