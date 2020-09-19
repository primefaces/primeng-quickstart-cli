import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

type Column = { field: string, header: string };

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService]
})
export class AppComponent implements OnInit {

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: Column[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall()
            .then(cars => {
                this.cols = this.discoverColumns(cars);
                this.cars = cars;
            });
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    private discoverColumns(data: any[]) {
        // asumption: data is a homogeneous array
        const first = data ? data[0] : null;

        return Object.keys(first).map<Column>(p => ({ field: p, header: this.createHeader(p) }))
    }

    private createHeader(camelCased: string) {
        if (!camelCased) return null;
        return camelCased[0].toUpperCase() + camelCased.substring(1);
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = {...event.data};
        this.displayDialog = true;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}
