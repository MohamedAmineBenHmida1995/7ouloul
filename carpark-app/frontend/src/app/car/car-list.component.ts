import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
    selector: 'app-car-list',
    template: `
        <div style="padding: 20px;">
            <h2>Liste des voitures</h2>
            <div *ngIf="loading">Loading cars...</div>
            <div *ngIf="error" style="color: red; margin: 10px 0;">
                Error loading cars: {{error}}
            </div>
            <div *ngIf="cars.length > 0" style="display: grid; gap: 15px; margin-top: 20px;">
                <div
                        *ngFor="let car of cars"
                        style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f8f9fa;"
                >
                    <div style="font-weight: bold; color: #007bff;">{{car.matricule}}</div>
                    <div>{{car.modele}} ({{car.annee}})</div>
                    <div>{{car.places}} places</div>
                </div>
            </div>
            <div *ngIf="!loading && cars.length === 0 && !error">
                No cars found.
            </div>
        </div>
    `
})
export class CarListComponent implements OnInit {
    cars: any[] = [];
    loading = false;
    error = '';

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.loadCars();
    }

    loadCars() {
        this.loading = true;
        this.error = '';

        this.carService.getCars().subscribe({
            next: (data) => {
                this.cars = data;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading cars:', error);
                this.error = 'Failed to load cars';
                this.loading = false;
            }
        });
    }
}
