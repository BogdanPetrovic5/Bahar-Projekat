import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-cu-split-type-semi-hermactic-type',
  templateUrl: './cu-split-type-semi-hermactic-type.component.html',
  styleUrls: ['./cu-split-type-semi-hermactic-type.component.scss']
})
export class CUSplitTypeSemiHermacticTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
