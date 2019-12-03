import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServiceProduitsService} from '../services/service-produits.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  private produits: Array<any>;
  produit = {
    reference: '0',
    designation: '',
    codeFournisseur: '',
    prixUnitaire: 0,
    quantite: 0
  };
  affiche: any;


  constructor(private produitService: ServiceProduitsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.produit = {
      reference: '0',
      designation: '',
      codeFournisseur: '',
      prixUnitaire: 0,
      quantite: 0
    };

    this.produit.reference = f.value.valueOf()['reference'];
    this.produit.designation = f.value.valueOf()['designation'];
    this.produit.codeFournisseur = f.value.valueOf()['codeFournisseur'];
    this.produit.prixUnitaire = f.value.valueOf()['prixUnitaire'];
    this.produit.quantite = f.value.valueOf()['quantite'];

    if (f.value.valueOf()['reference'] !== '' &&
      f.value.valueOf()['designation'] !== '') {
      this.produitService.produits.push(this.produit);
    }
  }

}
