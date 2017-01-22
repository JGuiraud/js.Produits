var Produit = function(nom, prix) {
    this.nom = nom;
    this.prix = prix;
};

var TVA = 5.5
var coutTVA = (1+TVA/100)

var Panier = function() {
    this.totalHT = 0;
    this.totalTTC = 0
    this.ajoute = function(objet) {
        this.totalHT = Math.round((this.totalHT + objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * coutTVA) * 100) / 100;
    };
    this.retire = function(objet) {
        this.totalHT = Math.round((this.totalHT - objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * coutTVA) * 100) / 100;
    };
};

var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log("Prix total de la baguette et du croissant -->")

console.log(panier.totalHT+"€ HT");
console.log(panier.totalTTC+"€ TTC");

console.log("Ajout de la chocolatine | Nouveau Total-->")

var chocolatine = new Produit('chocolatine', 0.90);
panier.ajoute(chocolatine);

console.log(panier.totalHT+"€ HT");
console.log(panier.totalTTC+"€ TTC");

console.log("Retrait de la chocolatine | Nouveau Total-->")

panier.retire(chocolatine);
console.log(panier.totalHT+"€ HT");
console.log(panier.totalTTC+"€ TTC");

var Viennoiserie = Object.create(Produit);
Viennoiserie.frais = true;

if (Viennoiserie.frais) {
  console.log("Nos viennoiseries sont fraîches !")
} else {
  console.log("Rabais sur le prix des viennoiseries !")
};



