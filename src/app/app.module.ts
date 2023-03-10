import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WeatherComponent} from './weather/weather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WeatherinputComponent} from './weather-input/weatherinput.component';
import {WeatherResultComponent} from './weather-result/weather-result.component';
import {FooterComponent} from './footer/footer.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'weather', component: WeatherComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WeatherComponent,
    WeatherinputComponent,
    WeatherResultComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
