import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-evaporators',
  templateUrl: './evaporators.component.html',
  styleUrls: ['./evaporators.component.scss']
})
export class EvaporatorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeRoute(name:any){
    this.router.navigate(["/Isparivači" + name])
  }
}
