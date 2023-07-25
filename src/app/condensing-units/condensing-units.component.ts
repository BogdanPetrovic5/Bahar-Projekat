import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
declare let AOS: any
import 'aos/dist/aos.css';
@Component({
  selector: 'app-condensing-units',
  templateUrl: './condensing-units.component.html',
  styleUrls: ['./condensing-units.component.scss']
})
export class CondensingUnitsComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent, private router: Router) {

   }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
    AOS.init({
      once:true
     })
  }
  changeRoute(name:any){
    this.router.navigate(["/Kondenzacione jedinice" + name])
  }
}
