import { CurrentWeather } from './current-weather';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherIcon, WeatherSoundEffect } from './enums';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentWeather: CurrentWeather;
  serachField: FormGroup;
  constructor(
    private weatherHTTPClient: WeatherService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
    this.serachField = this.fb.group({
      search: ['', Validators.required],
    });
    this.getWeatherUpdates('Rawalpindi');

  }
  getWeatherUpdates(city: string) {
    this.weatherHTTPClient
      .getCurrentWeather(city)
      .subscribe((res: CurrentWeather) => {
        console.log('res', res);
        this.currentWeather = res;
        switch (true) {
          case this.currentWeather.weather[0].id > 700 &&
            this.currentWeather.weather[0].id < 800:
            this.currentWeather.weather[0].icon = WeatherIcon.ATMOSPHERE;
            break;
          case this.currentWeather.weather[0].id == 800:
            this.currentWeather.weather[0].icon = WeatherIcon.CLEAR;
            break;
          case this.currentWeather.weather[0].id > 800 &&
            this.currentWeather.weather[0].id < 900:
            this.currentWeather.weather[0].icon = WeatherIcon.CLOUDS;
            break;
          case this.currentWeather.weather[0].id >= 300 &&
            this.currentWeather.weather[0].id < 400:
            this.currentWeather.weather[0].icon = WeatherIcon.DRIZZLE;
            this.playSoundEffect(WeatherSoundEffect.DRIZZLE);
            break;
          case this.currentWeather.weather[0].id >= 500 &&
            this.currentWeather.weather[0].id < 600:
            this.currentWeather.weather[0].icon = WeatherIcon.RAIN;
            this.playSoundEffect(WeatherSoundEffect.RAIN);
            break;
          case this.currentWeather.weather[0].id >= 600 &&
            this.currentWeather.weather[0].id < 700:
            this.currentWeather.weather[0].icon = WeatherIcon.SNOW;
            break;
          case this.currentWeather.weather[0].id >= 200 &&
            this.currentWeather.weather[0].id < 300:
            this.currentWeather.weather[0].icon = WeatherIcon.THUNDER_STORM;
            this.playSoundEffect(WeatherSoundEffect.THUNDER_STORM);
            break;
          default:
            this.currentWeather.weather[0].icon = WeatherIcon['01n'];
        }
      });
  }
  playSoundEffect(src){
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
    audio.loop=true;
  }
  submit() {
    const { search } = this.serachField.value;
    this.getWeatherUpdates(search);
  }
}
