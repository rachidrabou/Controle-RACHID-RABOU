import { Component, OnInit } from '@angular/core';
import {AppModule} from '../app.module';
import {AppComponent} from '../app.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  private utilisateur: { nomUtilisateur: string; motDePasse: string;};
  constructor(private appModule: AppComponent) { }
  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.utilisateur = {
      nomUtilisateur: '',
      motDePasse: ''
    };
    this.utilisateur.nomUtilisateur = f.value.valueOf()['nomUtilisateur'];
    this.utilisateur.motDePasse = f.value.valueOf()['motDePasse'];
  }

  login() {
    if (this.utilisateur.nomUtilisateur === 'rachid' && this.utilisateur.motDePasse === 'rachid') {
      this.appModule.authenticated = true;
    } else {
      this.appModule.authenticated = false;
    }

  }
}
