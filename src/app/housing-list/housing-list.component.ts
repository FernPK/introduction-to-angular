import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    // if (searchText.length === 0) {
    //   this.results = [];
    //   return;
    // }
    if (!searchText) return;
    let filtered = new Set<HousingLocation>();
    let filterCity: HousingLocation[] = this.locationList.filter((location) => {
      return location.city.toLowerCase().includes(searchText.toLowerCase());
    });
    let filterState: HousingLocation[] = this.locationList.filter((location) => {
      return location.state.toLowerCase().includes(searchText.toLowerCase());
    });
    let filterName: HousingLocation[] = this.locationList.filter((location) => {
      return location.name.toLowerCase().includes(searchText.toLowerCase());
    });
    filterCity.forEach((location) => {
      filtered.add(location);
    });
    filterState.forEach((location) => {
      filtered.add(location);
    });
    filterName.forEach((location) => {
      filtered.add(location);
    });
    this.results = Array.from(filtered);
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
