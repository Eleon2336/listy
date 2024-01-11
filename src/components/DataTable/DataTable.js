import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Colors } from '../../theme/theme';

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
    <TableContainer component={Paper} sx={{ backgroundColor: Colors.lightGrey }}>
      <Table  aria-label="simple table">
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component={"th"} scope='row'>{row.label}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}