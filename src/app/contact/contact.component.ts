import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map,NavigationControl, Marker  } from 'maplibre-gl';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy  {
  map: Map | undefined;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
  ngAfterViewInit(): void {
    const initialState = { lng: 20.94800577200743, lat: 44.02857979463333, zoom: 12 };
    
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=R47Eq8Hrir6mrLqcAm9x`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    
    new Marker({color: "#FF0000"})
      .setLngLat([20.94800577200743,44.02857979463333])
      .addTo(this.map);
  }
  changeURL(){
    window.location.href = "https://www.google.com/maps/place/BAHAR+Rashladni+Sistemi/@44.0283103,20.9471043,17z/data=!4m9!1m2!2m1!1s+Industrijska,+Kragujevac!3m5!1s0x47572731b2fab92d:0xd33371a689814efd!8m2!3d44.028526!4d20.9480916!16s%2Fg%2F11c5xmmhv9"
  }
}

