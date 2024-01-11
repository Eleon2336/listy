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

export default function DataTable({ selectedPokemon }) {
  const formattedData = [];

  for (let key in selectedPokemon) {
    formattedData.push({
      label: key,
      value: selectedPokemon[key]
    });
  }

  return (
    <ContainsTable component={Paper}>
      <Table  aria-label="simple table">
        <TableBody>
          {formattedData.map((row, index) => (
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