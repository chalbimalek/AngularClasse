import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { FormResidanceComponent } from './form-residance/form-residance.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';

const routes: Routes = [
    {path:"residance",component:ResidenceComponent},
    {path: "addresidance",component:FormResidanceComponent},
    {path:'appartement/:id',component:ApartmentsComponent},
    {path:'addappartement', component:FormAppartmentComponent},
    {path:'404',component:NotFoundComponent},
    //{path: '**', redirectTo :'404'},
    {path:'detailsApp/:id', component :DetailAppartmentComponent}
   
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
