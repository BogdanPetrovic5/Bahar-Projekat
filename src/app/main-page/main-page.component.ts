import { Component, OnInit } from '@angular/core';
declare let AOS: any
import 'aos/dist/aos.css';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public show = false
  public image_array_1 = [
    {
      id:1, src:"/assets/images/condensingunit.jpg", show:true, title:"Kondezacione jedinice",p:"Lorem ipsum dolor sit amet consectetur.<br>Lorem ipsum dolor sit amet consectetur"
    },
    {
      id:2, src:"/assets/images/evaporators.jpg",show:false, title:"Isparivači",p:"Lorem ipsum dolor sit amet consectetur.<br>Lorem ipsum dolor sit amet consectetur"
    },
  
  ]
  public image_array_2 = [
    {
      id:1, src:"/assets/images/paneli2.jpg", show:true, title:"Vrata",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur"
    },
    {
      id:2, src:"/assets/images/vrata1.jpg",show:false, title:"Paneli",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur"
    },
  
  ]
  public image_array = [
    {
      id:1, src:"/assets/images/condensingunit.jpg", show:true, title:"Kondezacione jedinice",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur", link:"Kondenzacione jedinice",class:"fill"
    },
    {
      id:2, src:"/assets/images/evaporators.jpg",show:false, title:"Isparivači",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur", link:"Isparivači",class:"fill"
    },
    {
      id:3, src:"/assets/images/paneli2.jpg", show:false, title:"Paneli",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur", link:"Paneli", class:"fill"
    },
    {
      id:4, src:"/assets/images/vrata1.jpg",show:false, title:"Vrata",p:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur", link:"Hladionička vrata", class:"fill"
    }
  ]
  constructor() { 

  }
  public i = 0
  public j = 0;
  public clear:any
  ngOnInit(): void {
    this.clear = setInterval(() => {
      
        this.image_array[this.i % this.image_array.length].show = false
        this.image_array[(this.i + 1) % this.image_array.length].show = true
        this.i++
       
      
    }, 6000)
   AOS.init()
  }
  right(){
    this.image_array[this.i % this.image_array.length].show = false
    this.image_array[(this.i + 1) % this.image_array.length].show = true
    this.i++
    clearInterval(this.clear)
    this.clear = setInterval(() => {
  
      this.image_array[this.i % this.image_array.length].show = false
      this.image_array[(this.i + 1) % this.image_array.length].show = true
      this.i++
    
  }, 5000)
      
  }
  left(){
    this.image_array[this.i % this.image_array.length].show = false
    if(this.i == 0){
      this.i = (this.image_array.length)
    }
    
    this.image_array[(this.i - 1) % this.image_array.length].show = true
    this.i--
    
    clearInterval(this.clear)
    this.clear = setInterval(() => {
  
      this.image_array[this.i % this.image_array.length].show = false
      this.image_array[(this.i + 1) % this.image_array.length].show = true
      this.i++
    
    }, 5000)
  }
  show_title(){
    this.show = !this.show
  }
  changeURL(){
    window.location.href = "https://www.google.com/maps/place/BAHAR+Rashladni+Sistemi/@44.0283103,20.9471043,17z/data=!4m9!1m2!2m1!1s+Industrijska,+Kragujevac!3m5!1s0x47572731b2fab92d:0xd33371a689814efd!8m2!3d44.028526!4d20.9480916!16s%2Fg%2F11c5xmmhv9"
  }
}
