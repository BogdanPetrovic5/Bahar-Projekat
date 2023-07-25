import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { interval } from 'rxjs';
@Component({
  selector: 'app-cu-split-type-semi-hermactic-type',
  templateUrl: './cu-split-type-semi-hermactic-type.component.html',
  styleUrls: ['./cu-split-type-semi-hermactic-type.component.scss']
})
export class CUSplitTypeSemiHermacticTypeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }
  public slideShowImage = [
    {
      "num":0,"id":true, "src":"/assets/images/SplitTypeSemiHermatic-slika1.png"
    },
    {
      "num":1,"id":false, "src":"/assets/images/SplitTypeSemiHermatic-slika2.png"
    },
    {
      "num":2,"id":false, "src":"/assets/images/SplitTypeSemiHermatic-slika3.png"
    }
  ]
  public i:any
  public clear:any
  public object:any;
  public previouseObject:any;
  public previouse:any
  public id:any
  public idNext:any;
  public len:any
  ngOnInit(): void {
        this.i = 0;
        this.len = this.slideShowImage.length;

        setTimeout(() => {
          this.parent.navbarDisplay = false
        }, 0);
        let intervalSecond = 300
        let interval = 300
        let count = 1;
        this.clear = setInterval(() => {
          
          this.id = this.i % this.len;
          this.idNext = (this.i + 1) % this.len;
            
          this.previouse = document.getElementById(this.id);
          this.previouse.classList.add("animationOut")
          setTimeout(()=>{
            
            this.slideShowImage[this.id].id = false
            this.previouse.classList.remove("animationOut")
          },interval)
          
          
          setTimeout(()=>{
            this.slideShowImage[this.idNext].id = true
            this.object = document.getElementById(this.idNext);
            this.object.classList.add("animationIn")
          },intervalSecond)
          this.i++
          
          this.object.classList.remove("animationIn")
          if(this.i >= ((this.len-1) * count)){
            intervalSecond += 1;
            interval += 1
            count += 1;
          }
        
      }, 3000)
      
  }
  changeImg(imgNum:any){
    
      for(let i = 0; i < this.slideShowImage.length;i++){
        if(this.slideShowImage[i].id == true){
          this.previouse = i;
          break;
        }
      }
      for(let i = 0; i < this.slideShowImage.length;i++){

        if(imgNum == this.slideShowImage[i].num){
          this.slideShowImage[i].id = true
        
        }else this.slideShowImage[i].id = false
      }
      clearInterval(this.clear)
      this.i = imgNum;
      this.clear = setInterval(() => {
        this.slideShowImage[this.i % this.slideShowImage.length].id = false
        this.slideShowImage[(this.i + 1) % this.slideShowImage.length].id = true
        this.i++
    }, 3000)
  }
}
