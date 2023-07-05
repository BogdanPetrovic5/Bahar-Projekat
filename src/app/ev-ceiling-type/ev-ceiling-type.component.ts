import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-ev-ceiling-type',
  templateUrl: './ev-ceiling-type.component.html',
  styleUrls: ['./ev-ceiling-type.component.scss']
})
export class EVCeilingTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
