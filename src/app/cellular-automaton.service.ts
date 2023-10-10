import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CellularAutomatonService {
  cells: number[] = [];
  ruleNumber: number;
  history: number[][] = [];
  constructor() { }

  initialize(size: number, ruleNumber: number): void {
    const middle = Math.floor(size / 2);
    const initialState = Array(size).fill(0);
    initialState[middle] = 1;
    this.cells = initialState;
    this.ruleNumber = ruleNumber;
  }

  getBinaryRule(): string {
    return this.ruleNumber.toString(2).padStart(8, '0');
  }

  nextGeneration(): void {
    this.history.push([...this.cells]);
    const newCells = [...this.cells];
    const binaryRule = this.getBinaryRule();

    for (let i = 1; i < this.cells.length - 1; i++) {
      const left = this.cells[i - 1];
      const center = this.cells[i];
      const right = this.cells[i + 1];
      const pattern = `${left}${center}${right}`;

      const ruleIndex = parseInt(pattern, 2);
      newCells[i] = parseInt(binaryRule[7 - ruleIndex], 10);
    }
    this.cells = newCells;
  }
}
