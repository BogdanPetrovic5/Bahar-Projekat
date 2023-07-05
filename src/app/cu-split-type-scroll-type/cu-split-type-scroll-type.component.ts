import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-cu-split-type-scroll-type',
  templateUrl: './cu-split-type-scroll-type.component.html',
  styleUrls: ['./cu-split-type-scroll-type.component.scss']
})
export class CUSplitTypeScrollTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
