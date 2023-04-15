import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-wall',
  templateUrl: './p-wall.component.html',
  styleUrls: ['./p-wall.component.scss']
})

export class PWallComponent implements OnInit {
  public show_1 = true
  public show_2 = false
  public show_3 = false
  constructor() { }

  ngOnInit(): void {
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
