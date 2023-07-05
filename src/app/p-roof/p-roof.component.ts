import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-p-roof',
  templateUrl: './p-roof.component.html',
  styleUrls: ['./p-roof.component.scss']
})
export class PRoofComponent implements OnInit {
  public show_1 = true
  public show_2 = false
  public show_3 = false
  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
  }
  show_table_1(){
    if(this.show_1 == false){
      this.show_1 = true
    }
    this.show_2 = false
    this.show_3 = false
  }
  show_table_2(){
    if(this.show_2 == false){
      this.show_2 = true
    }
    this.show_1 = false
    this.show_3 = false
  }
  show_table_3(){
    if(this.show_3 == false){
      this.show_3 = true
    }
    this.show_2 = false
    this.show_1 = false
  }
}
