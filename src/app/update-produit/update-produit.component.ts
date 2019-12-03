import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServiceProduitsService} from '../services/service-produits.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {
  produit = {
    reference: '0',
    designation: '',
    codeFournisseur: '',
    prixUnitaire: 0,
    quantite: 0
  };

  constructor(private produitService: ServiceProduitsService) { }

  ngOnInit() {
  }
  produit1 = {
    reference: 'AB12',
    designation: 'Cahier',
    codeFournisseur: 'CahierAB12',
    prixUnitaire: 10,
    quantite: 100
  };

  onUpdate(f: NgForm) {

    this.produit.reference = f.value.valueOf()['reference'];
    this.produit.designation = f.value.valueOf()['designation'];
    this.produit.codeFournisseur = f.value.valueOf()['codeFournisseur'];
    this.produit.prixUnitaire = f.value.valueOf()['prixUnitaire'];
    this.produit.quantite = f.value.valueOf()['quantite'];
    this.produitService.update(this.produit);
  }
}
