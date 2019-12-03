import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitsService {

  produit = {
    reference: '0',
    designation: '',
    codeFournisseur: '',
    prixUnitaire: 0,
    quantite: 0
  };

  produits: Array<any> = [
    {
      reference: 'AB12',
      designation: 'Cahier',
      codeFournisseur: 'CahierA12',
      prixUnitaire: 10,
      quantite: 100
    },
    {
      reference: 'AB13',
      designation: 'Stylo',
      codeFournisseur: 'StyloA13',
      prixUnitaire: 2,
      quantite: 500
    },
    {
      reference: 'Livre',
      designation: 'AB14',
      codeFournisseur: 'LivreAB14',
      prixUnitaire: 50,
      quantite: 160
    },
    {
      reference: 'Bloc Notes',
      designation: 'AB15',
      codeFournisseur: 'BlocAB15',
      prixUnitaire: 15,
      quantite: 280
    }
  ];

  constructor() { }

  supprimer() {
        this.produits.pop();

  }

  update(p: any) {

    for (this.produit of this.produits) {
        if (this.produit.reference === p.reference) {
          this.produit.reference = p.reference;
          this.produit.designation = p.designation;
          this.produit.codeFournisseur = p.codeFournisseur;
          this.produit.prixUnitaire = p.prixUnitaire;
          this.produit.quantite = p.quantite;
        }
    }
    this.produits.push(this.produit);

  }
}
