import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
declare let AOS: any
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.parent.navbarDisplay = false
    }, 0);
    function reveal() {
      var reveals = document.querySelectorAll(".aboutUsContentText");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
  }

}
