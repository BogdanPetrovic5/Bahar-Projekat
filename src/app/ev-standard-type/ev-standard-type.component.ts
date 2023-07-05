import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-ev-standard-type',
  templateUrl: './ev-standard-type.component.html',
  styleUrls: ['./ev-standard-type.component.scss']
})
export class EVStandardTypeComponent implements OnInit {

  constructor( @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
