import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/interface/AddressList';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @Input() location!: Location;

  /* City: string;
  CityCode: number;
  LoadAddressIdentifier: number;
  Municipality: string;
  MunicipalityCode: number;
  OfficeZipC: number;
  State: string;
  StateCode: number;
  Township: string;
  TownshipIdentifier: number;
  TownshipType: string;
  TownshipTypeCode: number;
  TownshipZipD: number;
  Zip: number;
  ZoneType: string; */

  constructor() { }

}
