// reference: http://jsfiddle.net/ondras/hYfN3/

const SS = "spreadsheet";
const ROWS = 20;
const COLS = 20;
export class Spreadsheet {
  rows = [];
  data = {};
  constructor() {
    var stored = JSON.parse(localStorage[SS] || "[]");

    if(stored.length == 0) {
      for(let i = 0; i < ROWS; i++){
        this.rows.push(new Row(i, COLS));
      }
    } else {
      for(let r in stored) {
        let cells = stored[r].cells;
        let row = new Row(r, cells.length);
        for (let c in cells) {
          let thisCell = cells[c];
          let cell = new Cell(thisCell.colId, thisCell.rowId, thisCell.formula, thisCell.computed);
          row.cells[c] = cell;
        }
        this.rows.push(row);
      }
    }
  }

  compute(c, evt) {
    c.formula = evt.target.value;
    for(row of this.rows) {
      for (cell of row.cells) {
        if(cell.isHeader) continue;
        cell.compute(this.data);
        this.data[cell.cellId] = cell.computed;
      }
    }
    localStorage[SS] = JSON.stringify(this.rows);
  }
}

class Row {
  cells = [];
  constructor(id, numCells) {
    this.id = id;
    for(let i = 0; i < numCells; i++){
      this.cells.push(new Cell(i, id));
    }
  }
}

class Cell {
  formula = "";
  constructor(colId, rowId, formula = "", computed="") {
    this.colId = colId;
    this.rowId = rowId;
    this.cellId = this.letter + this.rowId;
    this.formula = formula;
    this.computed = computed;
  }

  get isHeader() {
    return this.rowId == 0 || this.colId == 0;
  }

  get letter() {
    return String.fromCharCode("A".charCodeAt(0) + this.colId - 1);
  }
  get header() {
    if(this.rowId == 0) {
      return this.letter;
    }
    if(this.colId == 0) {
      return this.rowId;
    }
    return "";
  }

  get isFormula() {
    return typeof(this.formula) == "string" && this.formula.startsWith('=');
  }
  showFormula(){
    this.computed = this.formula;
  }

  compute(ssdata) {
    if(this.isFormula) {
        try {with (ssdata) this.computed = eval(this.formula.substring(1))}catch(e){};
    } else {
      this.computed = isNaN(parseFloat(this.formula)) ? this.formula : parseFloat(this.formula);
    }
  }
}
