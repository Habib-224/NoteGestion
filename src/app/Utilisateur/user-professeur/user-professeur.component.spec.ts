import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfesseurComponent } from './user-professeur.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserProfesseurComponent', () => {
  let component: UserProfesseurComponent;
  let fixture: ComponentFixture<UserProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfesseurComponent],
      imports: [
        // Ajoutez RouterTestingModule pour résoudre les erreurs liées au router
        RouterTestingModule,
      ],
      providers: [
        // Fournissez un ActivatedRoute simulé
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => 'valeur-de-test', // Simulez les paramètres de route requis ici
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Ajoutez d'autres tests ici...
});
