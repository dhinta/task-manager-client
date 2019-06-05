import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrivateBaseComponent } from './private-base.component';
import { LoggerTestingModule } from 'ngx-logger';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SessionService } from 'src/app/modules/shared/services/storage/session.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

describe('PrivateBaseComponent', () => {
  let component: PrivateBaseComponent;
  let fixture: ComponentFixture<PrivateBaseComponent>;
  let httpTestingController: HttpTestingController;
  let sessionService: SessionService;
  let userService: UserService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateBaseComponent],
      imports: [
        RouterTestingModule,
        LoggerTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        SessionService,
        UserService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    sessionService = TestBed.get(SessionService);
    userService = TestBed.get(UserService);
    sessionService = TestBed.get(SessionService);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(PrivateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
