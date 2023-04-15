import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeRoute(name:any){
    this.router.navigate(["/Paneli" + name])
  }
}
