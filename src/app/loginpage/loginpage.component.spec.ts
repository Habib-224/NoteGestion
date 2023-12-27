import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginpageComponent } from './loginpage.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => 'valeur-de-test',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to administration statistique for user role 1 and etat 1', () => {
    spyOn(router, 'navigate');
    component.formData.email = 'habib@gmail.com';
    component.formData.pass = 'habib';
    component.submitFunction(new Event('submit'));
    expect(router.navigate).toHaveBeenCalledWith([
      '/administration/statistique',
      1,
    ]); // Assuming ID 1 for the test user
  });

  it('should navigate to EspaceProf for user role 2 and etat 1', () => {
    spyOn(router, 'navigate');
    // Mocking a different user for this test
    component.formData.email = 'anotheruser@gmail.com';
    component.formData.pass = 'anotherpass';
    component.submitFunction(new Event('submit'));
    expect(router.navigate).toHaveBeenCalledWith(['/EspaceProf/', 1]); // Assuming ID 0 for the test user
  });

  // Add more test cases for other scenarios...
});
