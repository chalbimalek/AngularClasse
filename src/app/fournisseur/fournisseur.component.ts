import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {

  idFournisseur: Number;
  code: String;
  libelle: String;
  hide:boolean;
constructor(){
  this.idFournisseur = 105;
  this.code = 'A104B89';
  this.libelle = 'MyTeck';
  this.hide=false;
}

hiden():void{
  this.hide=!this.hide;
  console.log(this.hide);
  
}













}
