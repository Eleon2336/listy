import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Colors } from '../../theme/theme';

export default function DataTable() {

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: Colors.lightGrey }}>
      <Table  aria-label="simple table">
        <TableBody>
          <TableRow
            key={"Name"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                Name: 
            </TableCell>
            <TableCell align="right">Rattata</TableCell>
          </TableRow>
          <TableRow
            key={"DexNo"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                DexNo: 
            </TableCell>
            <TableCell align="right">19</TableCell>
          </TableRow>
          <TableRow
            key={"Type"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                Type: 
            </TableCell>
            <TableCell align="right">Normal</TableCell>
          </TableRow>
          <TableRow
            key={"Egg-Group"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                Egg-Group: 
            </TableCell>
            <TableCell align="right">Field</TableCell>
          </TableRow>
          <TableRow
            key={"Base-Stat"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                Base-Stat: 
            </TableCell>
            <TableCell align="right">253</TableCell>
          </TableRow>
          <TableRow
            key={"Abilities"}
          >
            <TableCell
                component={"th"}
                scope='row'
            >
                Abilities: 
            </TableCell>
            <TableCell align="right">Run Away, Guts</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}