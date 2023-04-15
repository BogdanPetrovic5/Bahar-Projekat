import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeURL(){
    window.location.href = "https://www.google.com/maps/place/BAHAR+Rashladni+Sistemi/@44.0283103,20.9471043,17z/data=!4m9!1m2!2m1!1s+Industrijska,+Kragujevac!3m5!1s0x47572731b2fab92d:0xd33371a689814efd!8m2!3d44.028526!4d20.9480916!16s%2Fg%2F11c5xmmhv9"
  }
}
