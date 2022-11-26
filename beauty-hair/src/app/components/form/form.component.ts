import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from 'src/app/interface/AddressList';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dataForm: FormGroup;
  locations: Location[] | undefined;
  locationsCopy: Location[] | undefined;
  zipcode: string;
  validEmail: any = /"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"/;
  validTel: any = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  constructor(private http: HttpClient) {
    this.getData(this.zipcode);
    this.dataForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  getData(zipcode: string) {

    this.http.get(`${environment.apiUrl}/${zipcode}`).subscribe((res) => {
      const addressList = res['AddressList'];
      this.locations = addressList.map(({
        City,
        CityCode,
        LoadAddressIdentifier,
        Municipality,
        MunicipalityCode,
        OfficeZipC,
        State,
        StateCode,
        Township,
        TownshipIdentifier,
        TownshipType,
        TownshipTypeCode,
        TownshipZipD,
        Zip,
        ZoneType }: Location) => {
        return {
          City,
          CityCode,
          LoadAddressIdentifier,
          Municipality,
          MunicipalityCode,
          OfficeZipC,
          State,
          StateCode,
          Township,
          TownshipIdentifier,
          TownshipType,
          TownshipTypeCode,
          TownshipZipD,
          Zip,
          ZoneType
        }
      });
    });
  }

  getZipcode(): void {
    const zipcode = <HTMLInputElement>document.getElementById('setZipcode');

    if (zipcode.value.length !== 5) return;

    this.zipcode = zipcode.value;

    this.getData(this.zipcode);

    return;
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.validEmail)]),
      tel: new FormControl('', [Validators.required, Validators.pattern(this.validTel)]),
      date: new FormControl(Validators.required)
    })
  }

  onSendData() {
    this.dataForm.valid ? console.log('Datos Validos') : console.log('Datos No Validos');
  }


}
