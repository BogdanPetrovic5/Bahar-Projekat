import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-condensing-units',
  templateUrl: './condensing-units.component.html',
  styleUrls: ['./condensing-units.component.scss']
})
export class CondensingUnitsComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  changeRoute(name:any){
    this.router.navigate(["/Kondenzacione jedinice" + name])
  }
}
