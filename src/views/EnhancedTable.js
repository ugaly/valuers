import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import CircularProgress from '@mui/material/CircularProgress';
import { visuallyHidden } from '@mui/utils';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import AuthService from '../services/auth/auth_service';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(id, billid, pyrName, pyrCellNum, payCbtrNum, CreatedTime, BillAmt, BillDesc) {
  return { id, billid, pyrName, pyrCellNum, payCbtrNum, CreatedTime, BillAmt, BillDesc };
}

// Sample data
// const rows = [
//   createData(1, 'VRB-069392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(2, 'VRB-869392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
//   createData(3, 'VRB-5769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(4, 'VRB-3769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(5, 'VRB-9769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(6, 'VRB-469392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(7, 'VRB-269392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
//   createData(8, 'VRB-1769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(9, 'VRB-7769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(10, 'VRB-9769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(11, 'VRB-669392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(12, 'VRB-869392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
//   createData(13, 'VRB-1769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(14, 'VRB-3769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
//   createData(15, 'VRB-22769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// ];

const headCells = [
  { id: 'counter', label: '#' },
  { id: 'billid', label: 'BillId' },
  { id: 'pyrName', label: 'pyrName' },
  { id: 'pyrCellNum', label: 'pyrCellNum' },
  { id: 'payCntrNum', label: 'payCbtrNum' },
  { id: 'CreatedTime', label: 'CreatedTime' },
  { id: 'BillAmt', label: 'BillAmt' },
  { id: 'BillDesc', label: 'BillDesc' },
  { id: 'cancel', label: 'cancel' },
];

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('billId');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = useState([]);


  useEffect(() => {
    AuthService.getBilling().then((res) => {
      console.log(res.data.content);
      setRows(res.data.content);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    })
  }, [])


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const filteredRows = rows.filter(row =>
    row.billId.toLowerCase().includes(searchQuery.toLowerCase())
  );


  function formatDateTime(dateTimeString) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };

    const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
    return formattedDateTime;
  }

  function formatAmount(amount) {
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }


  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [selectedBill, setSelectedBill] = React.useState(null);
  
  const handleClickOpenConfirm = (e, bill) => {
    e.stopPropagation();

    setSelectedBill(bill);

    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };


  return (
    <Paper>
      <Toolbar className="d-flex justify-content-between mt-3 pb-2">
        <div style={{ width: '50%' }}>
          <TextField
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="d-flex align-items-center">
          <IconButton color="primary" size="large" className="mx-2">
            <RefreshIcon />
          </IconButton>
          {loading && <CircularProgress size={24} />}
          <Button variant="contained" className="mx-2 btn-primary" style={{ textTransform: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Create Bill
          </Button>
        </div>
      </Toolbar>

      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < filteredRows.length}
                  checked={filteredRows.length > 0 && selected.length === filteredRows.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {headCells.map((headCell) => (
                <TableCell
                  style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={{ ...visuallyHidden }}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >

                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell  >{index + 1}</TableCell>
                    <TableCell style={{ fontSize: '1rem', color: 'blue' }} component="th" id={labelId} scope="row" padding="none">
                      {row.billId}
                    </TableCell>
                    <TableCell  >{row.pyrName}</TableCell>
                    <TableCell style={{ fontSize: '1rem' }} >0{row.pyrCellNum}</TableCell>
                    <TableCell style={{ fontSize: '1rem', color: 'green' }} >{row.payCntrNum}</TableCell>
                    <TableCell style={{ fontSize: '1rem' }}>{formatDateTime(row.createdTime)}</TableCell>
                    <TableCell style={{ fontSize: '1rem' }}>{formatAmount(row.billAmt)}</TableCell>
                    <TableCell style={{ fontSize: '1rem' }}>{row.billDesc}</TableCell>
                    <TableCell style={{ fontSize: '1rem' }}><Button onClick={(e) => {handleClickOpenConfirm(e, row.billId)}} variant="contained" className="btn btn-danger bg-danger" 
                    // startIcon={<CancelIcon />} 
                    style={{ fontSize: '14px', backgroundColor: '#ff272e' }}>Cancel</Button></TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '10px' }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        open={openConfirm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseConfirm}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Hello ${sessionStorage.getItem('username')}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to cancel bill <span style={{ color: 'blue' }}>{selectedBill}</span>, press Agree to proceed or Disagree to cancel from removal of bill.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ fontSize: '1rem' }} onClick={handleCloseConfirm}>Disagree</Button>
          <Button style={{ fontSize: '1rem' }} onClick={handleCloseConfirm}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
