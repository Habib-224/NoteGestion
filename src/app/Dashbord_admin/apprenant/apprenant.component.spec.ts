import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantComponent } from './apprenant.component';
import { HeaderDasboardComponent } from '../header-dasboard/header-dasboard.component';

describe('ApprenantComponent', () => {
  let component: ApprenantComponent;
  let fixture: ComponentFixture<ApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprenantComponent, HeaderDasboardComponent], // Ajoutez AppHeaderDasboardComponent aux déclarations
    }).compileComponents();
  });

  it('should create the apprenant component', () => {
    const fixture = TestBed.createComponent(ApprenantComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
