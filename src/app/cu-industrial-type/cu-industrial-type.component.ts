import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-cu-industrial-type',
  templateUrl: './cu-industrial-type.component.html',
  styleUrls: ['./cu-industrial-type.component.scss']
})
export class CUIndustrialTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }

}
