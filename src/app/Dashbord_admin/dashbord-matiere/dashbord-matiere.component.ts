import { Component} from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css'],
})
export class DashbordMatiereComponent {
  // Declaration Variable
  public storeMatiere: any;
  public usersMatiere: any;

  public Matiere: any[] = [];

  MatiereRegister = {
    matiere: '',
  };

  ngOnInit(): void {
    this.storeMatiere = localStorage.getItem('Matiere');
    if (this.storeMatiere) {
      this.usersMatiere = JSON.parse(this.storeMatiere);
    } else {
      localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
    }
  }

  RegisterMatiere(event: Event) {
    event.preventDefault();
    if (this.MatiereRegister.matiere !== '') {
      let matiereE = this.MatiereRegister.matiere;
      this.usersMatiere.push({
        id: this.usersMatiere.length + 1,
        matiere: matiereE,
        etat: 0,
      });
      localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
    }
  }

  DeleteClasse(id: any) {
    alert(id);
    // @ts-ignore
    let MatiereFound = this.usersMatiere.find(
      // @ts-ignore
      (usersMatiere) => usersMatiere.id === id
    );
    if (MatiereFound) {
      // console.log(classeFound);
      MatiereFound.etat = 1;
      this.saveDataLocal();
    }
  }

  UpdateMatiere1: any;
  UpdateClasse(id: any) {
    // @ts-ignore
    this.UpdateMatiere1 = this.usersMatiere.find(
      // @ts-ignore
      (usersMatiere) => usersMatiere.id === id
    );
    if (this.UpdateMatiere1) {
      console.log(this.UpdateMatiere1);
      // this.saveDataLocal();
    }
  }

  public UpdateMatiere: any;
  UpdatefunctionMatiere(id: any) {
    this.UpdateMatiere = this.usersMatiere.find(
      // @ts-ignore
      (usersMatiere) => usersMatiere.id === id
    );
    if (this.UpdateMatiere) {
      this.UpdateMatiere.matiere = this.MatiereRegister.matiere;

      this.saveDataLocal();
    }
  }
  saveDataLocal() {
    localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
  }
}




