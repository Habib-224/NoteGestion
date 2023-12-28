import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashbord-classe',
  templateUrl: './dashbord-classe.component.html',
  styleUrls: ['./dashbord-classe.component.css'],
})
export class DashbordClasseComponent {
  // Variable
  public usersClasse: any;
  public storeclasse: any;

  ClasseRegister = {
    niveau: '',
    effectif: '',
  };

  ngOnInit(): void {
    this.storeclasse = localStorage.getItem('Classe');
    if (this.storeclasse) {
      this.usersClasse = JSON.parse(this.storeclasse);
      console.log(this.usersClasse);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
    }
  }

  // Function qui nous permet d'inserer une classe
  Registerfunction(event: Event) {
    event.preventDefault();
    if (
      this.ClasseRegister.niveau !== '' &&
      this.ClasseRegister.effectif !== ''
    ) {
      let niveauClasse = this.ClasseRegister.niveau;
      let effectifClasse = this.ClasseRegister.effectif;

      this.usersClasse.push({
        id: this.usersClasse.length + 1,
        niveau: niveauClasse,
        effectif: effectifClasse,
        etat: 0,
      });
      localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
    }
  }

  UpdateClasse1: any;
  UpdateClasse(id: any) {
    // @ts-ignore
     this.UpdateClasse1 = this.usersClasse.find(
      // @ts-ignore
      (usersClasse) => usersClasse.id === id
    );
    if (this.UpdateClasse1) {
      console.log(this.UpdateClasse1);
      // this.saveDataLocal();
    }
  }

  UpdatefunctionClasse(id:any) {
    // @ts-ignore
    this.UpdateClasse1 = this.usersClasse.find(
      // @ts-ignore
      (usersClasse) => usersClasse.id === id
    );
    if (this.UpdateClasse1) {
      this.UpdateClasse1.niveau = this.ClasseRegister.niveau;
      this.UpdateClasse1.effectif = this.ClasseRegister.effectif;
      console.log(this.UpdateClasse1);
      this.saveDataLocal();
    }
  }

  DeleteClasse(id: any) {
    alert(id);
    // @ts-ignore
    let classeFound = this.usersClasse.find(
      // @ts-ignore
      (usersClasse) => usersClasse.id === id
    );
    if (classeFound) {
      // console.log(classeFound);
      classeFound.etat = 1;
      this.saveDataLocal();
    }
  }

  saveDataLocal() {
    localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
  }
}
