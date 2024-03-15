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
import { Alert, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
  { id: 'billid', label: 'Bill_Id' },
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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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




  const [open1, setOpen1] = React.useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };






  const [formData, setFormData] = useState({
    particularName: '',
    payerName: '',
    payerPhoneNumber: '',
    payerEmail: '',
    controlNumber: 0,
    billAmount: 0.0,
    expireDate: '',
    description: '',
    reason: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.particularName || !formData.payerName || !formData.payerPhoneNumber) {
      setError('Please fill in all required fields.');
      return;
    }


    const data = {
      particularId: 1,
      payerName: formData.payerName,
      payerPhone: formData.payerPhoneNumber,
      payerEmail: formData.payerEmail
    }

    setLoading(true);

    AuthService.setBilling(data).then((res) => {
      console.log(res);
      if (res.data.message === 'data received') {

        AuthService.getBilling().then((res) => {
          console.log(res.data.content);
          setRows(res.data.content);
          setTimeout(() => {
            setLoading(false);
            setOpen1(false);
            setFormData({
              particularName: '',
              payerName: '',
              payerPhoneNumber: '',
              payerEmail: '',
              controlNumber: 0,
              billAmount: 0.0,
              expireDate: '',
              description: ''
            });
            window.location.reload();
          }, 500);
        })

      }
    })

  };



  const handleMouseEnter = (e) => {
    e.currentTarget.style.textDecoration = 'underline';
    e.currentTarget.style.color = 'blue';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.textDecoration = 'none';

    e.currentTarget.style.color = 'blue';
  };

  const [billValue, setBillValue] = useState({});
  const handleBill = (e, clicked_bill) => {
    e.preventDefault();
    setOpenBill(true);
    console.log(clicked_bill);
    setBillValue(clicked_bill);
  };





  const [openBill, setOpenBill] = React.useState(false);
  const handleCloseBill = () => {
    setOpenBill(false);
  }
  const [billInfo] = useState([
    ['createdTime', '2024-01-09T11:42:36.028+00:00'],
    ['billId', 'VRB-1704800556026'],
    ['payCntrNum', '199360000085'],
    ['billDesc', 'Full Registration Fee'],
    ['Gepg Response', 'Successful'],
    ['billAmt', '10,000.00'],
    ['pyrName', 'JARIBU'],
    ['pyrCellNum', '0625677641'],
    ['pyrEmail', ''],
    ['createdBy', 'zmwalwama'],
    ['lastModifiedBy', 'zmwalwama'],
    ['last_time', '2024-01-09T11:42:36.647+00:00'],
    ['spCode', 'SP19936'],
    ['trxStsCode', '7101'],
    ['trxSts', 'GS'],
    ['subSpCode', '1001'],
    ['spSysId', 'TVRB001'],
    ['ccy', 'TZS'],
    ['miscAmt', '0'],
    ['billExprDt', '2024-02-08T14:42:36'],
    ['billGenDt', '2024-01-09T14:42:36'],
    ['billApprBy', ''],
    ['billEqvAmt', '10000'],
    ['billGenBy', ''],
    ['billPayOpt', '1'],
  ]);


  const attributesToDisplay = [
    'createdTime',
    'billId',
    'payCntrNum',
    'billDesc',
    'gepgResponse',
    'description',
    'billAmt',
    'pyrName',
    'pyrCellNum',
    'pyrEmail',
    'createdBy',
    'lastModifiedBy',
    'last_time',
    'spCode',
    'trxStsCode',
    'trxSts',
    'subSpCode',
    'spSysId',
    'ccy',
    'miscAmt',
    'billExprDt',
    'billGenDt',
    'billApprBy',
    'billEqvAmt',
    'billGenBy',
    'billPayOpt',
  ];


  const getCellStyle = (attribute) => {
    const style = { color: 'inherit' };

    if (['payCntrNum', 'gepgResponse', 'pyrName'].includes(attribute)) {
      style.color = 'green';


      if (['payCntrNum', 'pyrName'].includes(attribute)) {
        style.fontWeight = 'bold';
      }

      return style;
    };
  }


  const [paymentsInfo] = useState([
    ['billAmt', '10,000.00'],
    ['paidAmt', 'TZS 10,000.00'],
    ['pyrName', 'JARIBU'],
    ['pyrCellNum', '255625677641'],
    ['payCtrNum', '199360000085'],
    ['trxDtTm', '2024-01-09T15:27:16'],
    ['pspName', 'UAT Simulator'],
    ['ctrAccNum', 'GEPG0123456'],
    ['pspReceiptNumber', '1704803236988'],
    ['payRefId', '924009000094757'],
  ]);


  const handleCancelClickedBill = (e, clicked_bill) => {
    e.preventDefault();
    console.log(clicked_bill);

    if (!formData.reason) {
      setError('Please provide a reason for cancellation.');
      return;
    }

    const data = {
      billId: clicked_bill,
      reason: formData.reason
    }
    console.log(data);
    setLoading(true);
    AuthService.cancelBill(data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        AuthService.getBilling().then((res) => {
          setRows(res.data.content);
          handleCloseConfirm();
          window.alert('Bill cancelled successfully');
          setFormData({
            reason: ''
          })
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
      }
    })
  }


  const [receipt, setReceipt] = useState({});
  const handleReceipt = (e, clicked_receipt) => {
    e.preventDefault();
    console.log(clicked_receipt.id);

    AuthService.getReceipt(clicked_receipt.id).then((res) => {
      console.log(res);
      setReceipt(res.data);
    })
  }


  return (
    <Paper style={{ overflow: 'hidden' }}>

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
          <Button onClick={(e) => setOpen1(true)} variant="contained" className="mx-2 btn-primary" style={{ textTransform: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Create Bill
          </Button>
        </div>
      </Toolbar>

      {/* <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle"> */}

      <TableContainer style={{ maxHeight: 700, overflow: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
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

                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >

                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        onClick={(event) => handleClick(event, row.id)}
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell  >{index + 1}</TableCell>
                    <TableCell
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={(e) => { handleBill(e, row) }} style={{ fontSize: '16px', color: 'blue', cursor: 'pointer', fontWeight: 'bold' }} component="th" id={labelId} scope="row" padding="none">
                      {row.billId}
                    </TableCell>
                    <TableCell  >{row.pyrName}</TableCell>
                    <TableCell style={{ fontSize: '16px' }} >{row.pyrCellNum}</TableCell>
                    <TableCell style={{ fontSize: '16px', color: 'green' }} >{row.payCntrNum}</TableCell>
                    <TableCell style={{ fontSize: '16px' }}>{formatDateTime(row.createdTime)}</TableCell>
                    <TableCell style={{ fontSize: '16px' }}>{formatAmount(row.billAmt)}</TableCell>
                    <TableCell style={{ fontSize: '16px' }}>{row.billDesc}</TableCell>
                    {/* <TableCell style={{ fontSize: '1rem' }}>
                      <Button onClick={(e) => { handleClickOpenConfirm(e, row.billId) }} variant="contained" className="btn btn-danger bg-danger"
                      // startIcon={<CancelIcon />} 
                      style={{ fontSize: '14px', backgroundColor: '#ff272e' }}>Cancel</Button>
                      {row.deleted === true && <span style={{ color: 'red' }}>(Deleted)</span>}
                      </TableCell> */}

                    <TableCell style={{ fontSize: '18px' }}>
                      {!row.deleted && (  // Only render the button if row.deleted is not true
                        <Button
                          onClick={(e) => { handleClickOpenConfirm(e, row.billId) }}
                          variant="contained"
                          className="btn btn-danger bg-danger"
                          style={{ fontSize: '14px', backgroundColor: '#ff272e' }}
                        >
                          Cancel
                        </Button>
                      )}
                      {row.deleted && (
                        <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Not Active</span>
                      )}
                    </TableCell>


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
        maxWidth="lg"
        keepMounted
        onClose={handleCloseConfirm}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Hello ${sessionStorage.getItem('username')}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to cancel bill <span style={{ color: 'blue' }}>{selectedBill}</span>, please provide reason for cancellation.
          </DialogContentText>
          {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '1rem', marginTop: '1rem' }}>{error}</div>}
          <TextField
            autoFocus
            required
            id="outlined-textarea"
            margin="dense"
            label="Reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={5}
            type="text"
            variant="outlined"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button color='error' style={{ fontSize: '1rem' }} onClick={handleCloseConfirm}>Dicharge</Button>
          <Button style={{ fontSize: '1rem' }} onClick={(e) => handleCancelClickedBill(e, selectedBill)}>Submit</Button>
        </DialogActions>
      </Dialog>




      <Dialog TransitionComponent={Transition} open={open1} onClose={handleClose1} fullWidth maxWidth="xl">
        <DialogTitle>Create New Bill</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginBottom: 2, marginTop: 2 }}>
            <InputLabel>Particular Name</InputLabel>
            <Select
              fullWidth
              value={formData.particularName}
              onChange={handleChange}
              name="particularName"
            >
              <MenuItem value="1">Full Registration Fee</MenuItem>

            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Payer Name"
            name="payerName"
            value={formData.payerName}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            type='number'
            label="Payer Phone Number"
            name="payerPhoneNumber"
            value={formData.payerPhoneNumber}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Payer Email"
            name="payerEmail"
            value={formData.payerEmail}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />

          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}


          <TableContainer component={Paper} style={{ marginTop: '16px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Attribute</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>controlNumber</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>Bill Amount</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>Expire Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'gray', fontSize: '18px' }}></TableCell>
                </TableRow>


              </TableBody>
            </Table>
          </TableContainer>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Create Bill</Button>
        </DialogActions>
      </Dialog>







      <Dialog TransitionComponent={Transition} open={openBill} onClose={handleCloseBill} maxWidth="xl" fullWidth>
        <DialogTitle>Bill and Payments Information</DialogTitle>

        <DialogContent>
          <div style={{ display: 'flex' }}>
            {/* Left Section: Bill Info */}
            <div style={{ flex: 1, marginRight: '1rem' }}>
              <h3>Bill Info</h3>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {/* {billInfo.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">{row[0]}</TableCell>
                        <TableCell>{row[1]}</TableCell>
                      </TableRow>
                    ))} */}
                    {/* {Object.entries(billValue).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))} */}

                    {/* {Object.entries(billValue).map(([attribute, value]) => (
                      <TableRow key={attribute}>
                        <TableCell component="th" scope="row">{attribute}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))} */}
                    {attributesToDisplay.map(attribute => (
                      <TableRow key={attribute}>
                        <TableCell component="th" scope="row">{attribute}</TableCell>
                        <TableCell style={getCellStyle(attribute)}>{billValue[attribute]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* Right Section: Payments */}
            <div style={{ flex: 1 }}>
              <h3>Payments</h3>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {paymentsInfo.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">{row[0]}</TableCell>
                        <TableCell>{row[1]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button onClick={(e) => handleReceipt(e, billValue)} style={{ marginTop: '1rem' }} variant="contained" color="primary">Receipt</Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button style={{ marginRight: '30px' }} onClick={handleCloseBill} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
