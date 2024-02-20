import { Component, OnInit } from '@angular/core';
import { Apartment } from '../core/models/Apartment';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit {
  myForm !: FormGroup;
  appartment : Apartment = new Apartment();
  constructor( private _router:Router){}

  ngOnInit(){
    this.myForm=new FormGroup({
      sousgroupe:new FormGroup({
      apartNum:new FormControl('valeur par défaut', [Validators.required]), 
      surface:new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]*")]),
      floorNum:new FormControl()}),
      surfaceTerrace: new FormControl()
  
    })
    console.log(this.myForm);
  }
  

  get surfaceTerrace(){
    return this.myForm.get('surfaceTerrace');
  }
  get sousgroupe(){
    return this.myForm.get('sousgroupe');
  }
  }