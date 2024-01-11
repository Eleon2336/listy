import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { 
  ContainsTable, 
  LabelText, 
  DataText 
} from './styles-datatables';

const data = [
  {label: "Name:", value: "Rattata"},
  {label: "DexNo:", value: 19},
  {label: "Type:", value: "Normal"},
  {label: "Egg-Group:", value: "Field"},
  {label: "Base-Stat:", value: 253},
  {label: "Abilities:", value: "Run Away, Guts"}
];

export default function DataTable() {

  return (
    <ContainsTable component={Paper}>
      <Table  aria-label="simple table">
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell 
                component={"th"} 
                scope='row'
              >
                <LabelText>{row.label}</LabelText>
              </TableCell>
              <TableCell align="right">
                <DataText>{row.value}</DataText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ContainsTable>
  );
}