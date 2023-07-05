import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-evaporators',
  templateUrl: './evaporators.component.html',
  styleUrls: ['./evaporators.component.scss']
})
export class EvaporatorsComponent implements OnInit {

  constructor(private router: Router, @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }
  changeRoute(name:any){
    this.router.navigate(["/Isparivači" + name])
  }
}
