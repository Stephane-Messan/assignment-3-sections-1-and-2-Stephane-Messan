import { Component, inject } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {Housinglocation} from '../housinglocation';
import {HousingService} from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

    // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    housingLocationList: Housinglocation[] = [];
    // Injecting HousingService into the Component
    housingService: HousingService = inject(HousingService);
    constructor(){
    //setting housingLocationlist to the data array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
    }
    }
