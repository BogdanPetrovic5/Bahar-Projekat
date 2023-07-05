import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-ev-blast-freezers-type',
  templateUrl: './ev-blast-freezers-type.component.html',
  styleUrls: ['./ev-blast-freezers-type.component.scss']
})
export class EVBlastFreezersTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }
}
