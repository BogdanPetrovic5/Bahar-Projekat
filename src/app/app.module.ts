import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { CondensingUnitsComponent } from './condensing-units/condensing-units.component';
import { EvaporatorsComponent } from './evaporators/evaporators.component';
import { PanelsComponent } from './panels/panels.component';
import { DoorsComponent } from './doors/doors.component';
import { CUIndustrialTypeComponent } from './cu-industrial-type/cu-industrial-type.component';
import { CUSplitTypeHermaticTypeComponent } from './cu-split-type-hermatic-type/cu-split-type-hermatic-type.component';
import { CUSplitTypeSemiHermacticTypeComponent } from './cu-split-type-semi-hermactic-type/cu-split-type-semi-hermactic-type.component';
import { CUSplitTypeScrollTypeComponent } from './cu-split-type-scroll-type/cu-split-type-scroll-type.component';
import { EVIndustrialTypeComponent } from './ev-industrial-type/ev-industrial-type.component';
import { EVCeilingTypeComponent } from './ev-ceiling-type/ev-ceiling-type.component';
import { EVBlastFreezersTypeComponent } from './ev-blast-freezers-type/ev-blast-freezers-type.component';
import { EVStandardTypeComponent } from './ev-standard-type/ev-standard-type.component';
import { PWallComponent } from './p-wall/p-wall.component';
import { PRoofComponent } from './p-roof/p-roof.component';
import { PFacadeComponent } from './p-facade/p-facade.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProizvodiComponent,
    CondensingUnitsComponent,
    EvaporatorsComponent,
    PanelsComponent,
    DoorsComponent,
    CUIndustrialTypeComponent,
    CUSplitTypeHermaticTypeComponent,
    CUSplitTypeSemiHermacticTypeComponent,
    CUSplitTypeScrollTypeComponent,
    EVIndustrialTypeComponent,
    EVCeilingTypeComponent,
    EVBlastFreezersTypeComponent,
    EVStandardTypeComponent,
    PWallComponent,
    PRoofComponent,
    PFacadeComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
