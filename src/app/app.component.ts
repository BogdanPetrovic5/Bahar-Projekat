import { Component,OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare let AOS: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public current_width:any
  show_on_page = false
  products_dropDown_show = false
  hide = false
  public break_point = 572
  display = false
  constructor(private router: Router){

  }
  ngOnInit(): void {
    AOS.init()
  }
  ngDoCheck():void{
    
  }
  overlay(){
    if(this.display == false){
      this.display = true
    }else if(this.display == true){
      this.display = false
    }
    if(this.hide == false){
      this.hide = true
    }else if(this.hide == true){
      this.hide = false
    }
    console.log(this.hide)
  }
  changeRoute(){
    
    if(this.hide == false){
      this.hide = true
    }else if(this.hide == true){
      this.hide = false
    }
    if(this.display == false){
      this.display = true
    }else if(this.display == true){
      this.display = false
    }
    console.log(this.hide)
  }
  title = 'Bahar';
  changeURL(){
    window.location.href = "https://www.google.com/maps/place/BAHAR+Rashladni+Sistemi/@44.0283103,20.9471043,17z/data=!4m9!1m2!2m1!1s+Industrijska,+Kragujevac!3m5!1s0x47572731b2fab92d:0xd33371a689814efd!8m2!3d44.028526!4d20.9480916!16s%2Fg%2F11c5xmmhv9"
  }
}
