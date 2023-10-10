import { Component } from '@angular/core';
import {CellularAutomatonService} from "./cellular-automaton.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  size:number;
  rule:number;
  constructor(public automatonService: CellularAutomatonService) {}

  ngOnInit(): void {
  }
  initialize(size:number, rule:number):void{
    this.automatonService.history=[];
    this.automatonService.initialize(size,rule);
    this.automatonService.history.push([...this.automatonService.cells]);
  }
  evolve(): void {
    this.automatonService.nextGeneration();
  }

}
