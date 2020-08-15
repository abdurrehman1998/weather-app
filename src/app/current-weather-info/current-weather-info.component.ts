import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-current-weather-info',
  templateUrl: './current-weather-info.component.html',
  styleUrls: ['./current-weather-info.component.css'],
})
export class CurrentWeatherInfoComponent implements OnInit {
  @Input() country: string;
  @Input() locationName: string;
  @Input() summary: string;
  @Input() description: string;
  @Input() icon: string;
  @Input() temperature: number;
  @Input() pressure: number;
  @Input() humidity: number;
  @Input() wind: number;
  constructor() {}

  ngOnInit(): void {

  }
}
