import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useLocation } from 'react-router-dom';
import { AdvisorData } from "../../Constant/AdvisorData";
import { Typography, Button } from '@mui/material';

const columns = [
  { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Registration_no', label: 'Registration_no', minWidth: 100 },
  {
    id: 'Email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'Telephone',
    label: 'Telephone',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'State',
    label: 'State',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'City',
    label: 'City',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'Address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'Book Slot',
    label: 'Book Slot',
    minWidth: 170,
    align: 'right',
  },
];
const link = "https://topmate.io/myfinscore/"
const AdvisorPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const location = useLocation();
  const data = location.state;

  function filterAdvisors(data, advisors) {
    return advisors.filter(advisor =>
      advisor.State.toUpperCase() === data.state.toUpperCase() &&
      advisor.City.toUpperCase() === data.city.toUpperCase() &&
      advisor.category.toUpperCase() === data.category.toUpperCase()
    );
  }

  const filteredAdvisors = filterAdvisors(data, AdvisorData);

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ m: 4 }}>
        Select Your Advisor
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ fontWeight: 'bold', color: 'black' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAdvisors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.label === 'Book Slot' ? (
                            <Button variant="contained" color="primary" onClick={() => { window.location.href = link }} >Book Slot</Button>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredAdvisors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default AdvisorPage;
