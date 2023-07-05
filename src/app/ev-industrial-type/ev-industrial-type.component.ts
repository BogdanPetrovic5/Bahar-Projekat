import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-ev-industrial-type',
  templateUrl: './ev-industrial-type.component.html',
  styleUrls: ['./ev-industrial-type.component.scss']
})
export class EVIndustrialTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
