import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-statistique',
  templateUrl: './dashbord-statistique.component.html',
  styleUrls: ['./dashbord-statistique.component.css'],
})
export class DashbordStatistiqueComponent implements OnInit {
  public storedUsers: any;
  public usersdata: any;
  public tailleenseignant: any;
  public tailleApprenant: any;
  public tailleMatiere: any;
  public tailleClasse: any;
  public storeclasse: any;
  public usersClasse: any;
  public storeMatiere: any;
  public usersMatiere:any;

  ngOnInit(): void {
    this.storedUsers = localStorage.getItem('Schooluser');
    if (this.storedUsers) {
      this.usersdata = JSON.parse(this.storedUsers);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
    }
    // console.log(this.usersdata[0].role);
    this.tailleenseignant = this.enseignantLength();
    this.tailleApprenant = this.ApprenantLength();
    this.tailleMatiere = this.MatiereLength();
    this.tailleClasse = this.MatiereLength();

    this.storeclasse = localStorage.getItem('Classe');
    if (this.storeclasse) {
      this.usersClasse = JSON.parse(this.storeclasse);
      console.log(this.usersClasse);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
    }

    this.storeMatiere = localStorage.getItem('Matiere');
    if (this.storeMatiere) {
      this.usersMatiere = JSON.parse(this.storeMatiere);
    } else {
      localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
    }
  }

  enseignantLength() {
    let enseignanttaille = 0;
    for (let i = 0; i < this.usersdata.length; i++) {
      if (this.usersdata[i].role == 2) {
        enseignanttaille++;
      }
    }
    return enseignanttaille;
  }

  ApprenantLength() {
    let Apprenanttaille = 0;
    for (let i = 0; i < this.usersdata.length; i++) {
      if (this.usersdata[i].role == 3) {
        Apprenanttaille++;
      }
    }
    return Apprenanttaille;
  }

  MatiereLength() {
    let MatiereTaille = 0;
    for (let i = 0; i < this.usersdata.length; i++) {
      if (this.usersdata[i].role == 3) {
        MatiereTaille++;
      }
    }
    return MatiereTaille;
  }

  ClasseLength() {
    let Classetaille = 0;
    for (let i = 0; i < this.usersdata.length; i++) {
      if (this.usersdata[i].role == 3) {
        Classetaille++;
      }
    }
    return Classetaille;
  }

  DesarchiveFunction(id: any) {
    // @ts-ignore
    let classeFound = this.usersClasse.find(
      // @ts-ignore
      (usersClasse) => usersClasse.id === id
    );
    if (classeFound) {
      // console.log(classeFound);
      classeFound.etat = 0;
      this.saveDataLocal();
    }
  }

  saveDataLocal() {
    localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
  }
}
