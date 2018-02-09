import { Component } from '@angular/core';
import {Car} from './car';
import { SelectItem } from 'primeng/primeng';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  isOrange = false;
  isPurple = false;
  imageSrc: string;
  cars: Car[];
  cities: SelectItem[];
  selectedCity: string;

  constructor() {
    this.cars = [];
    this.cars.push({
      vin: 'aasdasdad',
      year: 2017,
      brand: 'Innova',
      color: 'silver'
    });
    this.cars.push({
      vin: 'aasdaaeeee',
      year: 2008,
      brand: 'Safari',
      color: 'black'
    });
    this.cars.push({
      vin: 'qweqweq',
      year: 2008,
      brand: 'Alto',
      color: 'gold-silver'
    });


    this.cities = [
    {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
    {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
    {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
  ];
}
  setOrange() {
    this.isPurple = false;
    this.isOrange = true;
    this.imageSrc = '/assets/icici.jpg';
  }

  setPurple() {
    this.isOrange = false;
    this.isPurple = true;
    this.imageSrc = '/assets/KBL.jpg';
  }

  showSwalBox1() {
    const customClass = this.isOrange ? 'orange' : this.isPurple ? 'purple' : '';
 swal({
      title: 'SWAL 1',
      text: 'swal 1 example',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'ESC',
      customClass: customClass
    });
  }
}
