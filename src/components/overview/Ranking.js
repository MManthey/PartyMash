import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Platz' },
  { id: 'code', label: 'Team' },
  { id: 'points', label: 'Punkte' },
];

function Ranking({ ranking }) {
  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((rank, index) => (
              <TableRow >
                <TableCell align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="center" >
                  {rank.name}
                </TableCell>
                <TableCell align="center">
                  {rank.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Ranking;