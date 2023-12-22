import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-professeur',
  templateUrl: './user-professeur.component.html',
  styleUrls: ['./user-professeur.component.css'],
})
export class UserProfesseurComponent {
  public Evaluation: any[] = [
    {
      id: '',
      semestre: '',
      date: '',
      type: '',
      etat: '',
      matiere: '',
      professeur: '',
      niveau: '',
    },
  ];

  EvaluationRegister = {
    id: '',
    semestre: '',
    date: '',
    type: '',
    etat: '',
    matiere: '',
    professeur: '',
    niveau: '',
  };

  /**tous les  varibles  */
  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;
  // public addEvaluation: any;

  public storeNotes: any;
  public usersNotes: any;

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;

  public EvaluationFound: any;

  //valeur du filter qui correspond a celui du champs recherche
  filterValue = '';
  //les element trouver
  filteredElement: any;
  iduser: any;
  userident: any;

  addProf: any = {};

  dataEvaluation: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userident = this.iduser = +params['id'];
    });

    this.storedUsers = localStorage.getItem('Schooluser');
    if (this.storedUsers) {
      this.usersdata = JSON.parse(this.storedUsers);
       console.log(this.usersdata);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
    }

    this.dataEvaluation = localStorage.getItem('Evaluation');
    if (this.dataEvaluation) {
      this.userEvaluation = JSON.parse(this.dataEvaluation);
      console.log(this.userEvaluation);
    } else {
      localStorage.setItem('Evaluation', JSON.stringify(this.Evaluation));
    }
  }

  Registerfunction(event: Event) {
    event.preventDefault();
    if (
      this.EvaluationRegister.semestre !== '' &&
      this.EvaluationRegister.date !== '' &&
      this.EvaluationRegister.type !== '' &&
      this.EvaluationRegister.matiere !== '' &&
      this.EvaluationRegister.niveau != ''
    ) {
      // alert("hello")
      // this.userid = this.userEvaluation.length;
      let semestreEva = this.EvaluationRegister.semestre;
      let dateEva = this.EvaluationRegister.date;
      let typeEva = this.EvaluationRegister.type;
      let MatiereEva = this.EvaluationRegister.matiere;
      let matiereProf = this.userident;
      let niveauEva = this.EvaluationRegister.niveau;

      this.userEvaluation.push({
        id: this.userEvaluation.length + 1,
        semestre: semestreEva,
        date: dateEva,
        type: typeEva,
        matiere: MatiereEva,
        professeur: matiereProf,
        niveau: niveauEva,
      });
      localStorage.setItem('Evaluation', JSON.stringify(this.userEvaluation));
    }
  }

  Attribution(id:any) {
    // @ts-ignore
    let EvaluationFoundid = this.userEvaluation.find((userEvaluation) => userEvaluation.id === id);
    if (EvaluationFoundid) {
      this.EvaluationFound = EvaluationFoundid
      console.log(this.EvaluationFound);
    } else {
      console.log('user not found');
    }
  }
}







