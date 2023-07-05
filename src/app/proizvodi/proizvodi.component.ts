import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.scss']
})
export class ProizvodiComponent implements OnInit {
  parentElement:any
  constructor(@Inject(AppComponent) private parent: AppComponent, ) { 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }
  download(url:any){
    window.open(url, "_blank");
  }
}
