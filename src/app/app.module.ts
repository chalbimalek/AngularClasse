import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidanceComponent } from './form-residance/form-residance.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    FournisseurComponent,
    ListFournisseurComponentComponent,
    AddAppartementComponent,
    FormResidanceComponent,
    ApartmentsComponent,
    FormAppartmentComponent,
    NotFoundComponent,
    DetailAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
