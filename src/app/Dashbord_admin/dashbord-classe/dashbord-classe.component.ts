import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashbord-classe',
  templateUrl: './dashbord-classe.component.html',
  styleUrls: ['./dashbord-classe.component.css']
})
export class DashbordClasseComponent {

  // Variable
  public usersClasse: any;
  public storeclasse: any;

  ClasseRegister = {
    niveau: '',
    effectif:''
  }

  ngOnInit(): void {
    this.storeclasse = localStorage.getItem('Classe');
    if (this.storeclasse) {
      this.usersClasse = JSON.parse(this.storeclasse);
      console.log(this.usersClasse)
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
    }
  }

  // Function qui nous permet d'inserer une classe
  Registerfunction(event: Event) {
    event.preventDefault();
    if (this.ClasseRegister.niveau !== '' && this.ClasseRegister.effectif !== "") {
      let niveauClasse = this.ClasseRegister.niveau;
      let effectifClasse = this.ClasseRegister.effectif;

      this.usersClasse.push({
        id: this.usersClasse.length + 1,
        niveau: niveauClasse,
        effectif: effectifClasse,
      });
      localStorage.setItem('Classe', JSON.stringify(this.usersClasse));
    }
  }
}
