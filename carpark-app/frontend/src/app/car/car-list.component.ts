import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
    selector: 'app-car-list',
    template: `
    <h2>Liste des voitures</h2>
    <ul>
      <li *ngFor="let car of cars">
        {{car.matricule}} - {{car.modele}} - {{car.annee}} - {{car.places}} places
      </li>
    </ul>
  `
})
export class CarListComponent implements OnInit {
    cars: any[] = [];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCars().subscribe(data => this.cars = data);
    }
}