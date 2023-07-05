import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-cu-split-type-hermatic-type',
  templateUrl: './cu-split-type-hermatic-type.component.html',
  styleUrls: ['./cu-split-type-hermatic-type.component.scss']
})
export class CUSplitTypeHermaticTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
