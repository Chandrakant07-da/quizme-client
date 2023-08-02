// models/TableData.ts

// Interface for a single row in the table
interface TableRow {
    name: string;
    score: number;
  }
  
  // Interface for the entire table
  interface TableData {
    rows:TableRow[]
  }
  
  export default TableData;
  