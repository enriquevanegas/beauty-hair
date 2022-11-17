import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TableComponent } from './components/table/table.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { LocationComponent } from './components/location/location.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    BannerComponent,
    HeaderComponent,
    FormComponent,
    TabsComponent,
    TableComponent,
    DatepickerComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
