import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondensingUnitsComponent } from './condensing-units/condensing-units.component';
import { CUIndustrialTypeComponent } from './cu-industrial-type/cu-industrial-type.component';
import { CUSplitTypeHermaticTypeComponent } from './cu-split-type-hermatic-type/cu-split-type-hermatic-type.component';
import { CUSplitTypeScrollTypeComponent } from './cu-split-type-scroll-type/cu-split-type-scroll-type.component';
import { CUSplitTypeSemiHermacticTypeComponent } from './cu-split-type-semi-hermactic-type/cu-split-type-semi-hermactic-type.component';
import { DoorsComponent } from './doors/doors.component';
import { EVBlastFreezersTypeComponent } from './ev-blast-freezers-type/ev-blast-freezers-type.component';
import { EVCeilingTypeComponent } from './ev-ceiling-type/ev-ceiling-type.component';
import { EVIndustrialTypeComponent } from './ev-industrial-type/ev-industrial-type.component';
import { EVStandardTypeComponent } from './ev-standard-type/ev-standard-type.component';
import { EvaporatorsComponent } from './evaporators/evaporators.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PWallComponent } from './p-wall/p-wall.component';
import { PanelsComponent } from './panels/panels.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { PRoofComponent } from './p-roof/p-roof.component';
import { PFacadeComponent } from './p-facade/p-facade.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:"", redirectTo:"Početna strana", pathMatch:"full"},
  {path: "Početna strana", component:MainPageComponent},
  {path:"Proizvodi", component:ProizvodiComponent},
  {path:"Kondenzacione jedinice", component:CondensingUnitsComponent},
  {path:"Isparivači", component:EvaporatorsComponent},
  {path:"Paneli", component:PanelsComponent},
  {path:"Hladionička vrata", component:DoorsComponent},
  {path:"Kondenzacione jedinice/Industrijski tip", component:CUIndustrialTypeComponent},
  {path:"Kondenzacione jedinice/Split Type Hermatic type", component:CUSplitTypeHermaticTypeComponent},
  {path:"Kondenzacione jedinice/Split Type Semi Hermatic type",component:CUSplitTypeSemiHermacticTypeComponent},
  {path:"Kondenzacione jedinice/Split Type Scroll type", component:CUSplitTypeScrollTypeComponent},
  {path:"Isparivači/Industrijski tip", component:EVIndustrialTypeComponent},
  {path:"Isparivači/Ceiling type", component:EVCeilingTypeComponent},
  {path:"Isparivači/Blast Freezers type", component:EVBlastFreezersTypeComponent},
  {path:"Isparivači/Standard type", component:EVStandardTypeComponent},
  {path:"Paneli/Zidni", component:PWallComponent},
  {path:"Paneli/Krovni", component:PRoofComponent},
  {path:"Paneli/Fasadni", component:PFacadeComponent},
  {path:"Kontakt", component:ContactComponent},
  {path:"O firmi", component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
