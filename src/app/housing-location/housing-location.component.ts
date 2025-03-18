import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Housinglocation} from '../housinglocation';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;
 
}
