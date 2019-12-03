import { Component, OnInit } from '@angular/core';
import {ServiceProduitsService} from '../services/service-produits.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  private produits: Array<any>;
  produit = {
    reference: '0',
    designation: '',
    codeFournisseur: '',
    prixUnitaire: 0,
    quantite: 0
  };

  produit1 = {
    reference: 'AB12',
    designation: 'Cahier',
    codeFournisseur: 'CahierAB12',
    prixUnitaire: 10,
    quantite: 100
  };
  affiche: any;
  afficheUpdate: any;




    constructor(private produitService: ServiceProduitsService) { }

  ngOnInit() {
      this.produits = this.produitService.produits;
  }



  showHide() {
    if (this.affiche === true) {
      this.affiche = false;
    } else {
      this.affiche = true;
    }
  }


  shoHideUpdate() {
    if (this.afficheUpdate === true) {
      this.afficheUpdate = false;
    } else {
      this.afficheUpdate = true;
    }

  }
}
