// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import { Badge } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import CircularProgress from '@mui/material/CircularProgress';
// import { visuallyHidden } from '@mui/utils';
// import TextField from '@mui/material/TextField';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import Button from '@mui/material/Button';
// import CancelIcon from '@mui/icons-material/Cancel';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import AuthService from '../services/auth/auth_service';

// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import AppBar from '@mui/material/AppBar';



// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';



// import Dialog from '@mui/material/Dialog';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// function createData(id, billid, pyrName, pyrCellNum, payCbtrNum, CreatedTime, BillAmt, BillDesc) {
//   return { id, billid, pyrName, pyrCellNum, payCbtrNum, CreatedTime, BillAmt, BillDesc };
// }

// // Sample data
// // const rows = [
// //   createData(1, 'VRB-069392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(2, 'VRB-869392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
// //   createData(3, 'VRB-5769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(4, 'VRB-3769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(5, 'VRB-9769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(6, 'VRB-469392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(7, 'VRB-269392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
// //   createData(8, 'VRB-1769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(9, 'VRB-7769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(10, 'VRB-9769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(11, 'VRB-669392995492912823', 'VRB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(12, 'VRB-869392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00','Full Registration Fee'),
// //   createData(13, 'VRB-1769392995492912823', 'JARIB', 769446533, 134344343444, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(14, 'VRB-3769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// //   createData(15, 'VRB-22769392995492912823', 'JARIB', 769446533, 96576776677, '2024-03-03T08:41:40.302+00:00', '10,000.00', 'Full Registration Fee'),
// // ];

// const headCells = [
//   { id: 'counter', label: '#' },
//   { id: 'regnNo', label: 'regnNo' },
//   { id: 'firstName', label: 'firstName' },
//   { id: 'middleName', label: 'middleName' },
//   { id: 'lastName', label: 'lastName' },
//   { id: 'membershipType', label: 'membershipType' },
//   { id: 'stage', label: 'stage' },
//   { id: 'message', label: 'message' },
// ];

// export default function IndividualsTable({ onClickItem }) {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const [loading, setLoading] = React.useState(true);
//   const [rows, setRows] = useState([]);
//   const [switched, setSwitched] = useState(false);


//   useEffect(() => {
//     AuthService.getIndividual().then((res) => {
//       // console.log(res);
//       // setRows(res.data.content);
//       // setTimeout(() => {
//       //   setLoading(false);
//       // }, 1000);

//       if (res && res.data && res.data.content) {
//         console.log(res.data.content);
//         setRows(res.data.content);
//       } else {
//         // Handle the case where the response structure is not as expected
//         console.error("Invalid response format from API");
//       }
//       setTimeout(function () {
//         setLoading(false);
//       }, 1000);
//     })
//   }, [])


//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   const filteredRows = rows.filter(row =>
//     row.regnNo.toLowerCase().includes(searchQuery.toLowerCase())
//   );


//   function formatDateTime(dateTimeString) {
//     const options = {
//       year: 'numeric',
//       month: 'short',
//       day: '2-digit',
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true,
//     };

//     const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
//     return formattedDateTime;
//   }

//   function formatAmount(amount) {
//     return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   }

//   const handleLoading = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//   }


//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick1 = (event) => {
//     event.stopPropagation();
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };








//   const [openConfirm, setOpenConfirm] = React.useState(false);

//   const handleClickOpenConfirm = (e) => {
//     e.stopPropagation();
//     handleClose();
//     setOpenConfirm(true);
//   };

//   const handleCloseConfirm = () => {
//     setOpenConfirm(false);
//   };


//   const handleMouseEnter = (e) => {
//     e.currentTarget.style.textDecoration = 'underline';
//     e.currentTarget.style.color = 'blue';
//   };

//   const handleMouseLeave = (e) => {
//     e.currentTarget.style.textDecoration = 'none';

//     e.currentTarget.style.color = 'blue';
//   };

//   const handleClickItem = (e, item_data) => {
//     e.stopPropagation();
//     onClickItem(item_data)
//   }



//   return (
//     <>
//       <Paper>
//         <Toolbar className="d-flex justify-content-between mt-3 pb-2">
//           <div style={{ width: '50%' }}>
//             <TextField
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               variant="outlined"
//               fullWidth
//             />
//           </div>
//           {/* <div className="d-flex align-items-center">
//           <IconButton  onClick={() => handleLoading()} disabled={loading} color="primary" size="large" className="mx-2">
//             <RefreshIcon  />
//           </IconButton>
//           {loading && <CircularProgress size={24} />}
//           <Button disabled={loading} variant="contained" className="mx-2 btn-primary" style={{ textTransform: 'none', fontWeight: 'bold', fontSize: '18px', }}>
//             Add Individual
//           </Button>
//         </div> */}
//         </Toolbar>

//         <TableContainer>
//           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     color="primary"
//                     indeterminate={selected.length > 0 && selected.length < filteredRows.length}
//                     checked={filteredRows.length > 0 && selected.length === filteredRows.length}
//                     onChange={handleSelectAllClick}
//                   />
//                 </TableCell>
//                 {headCells.map((headCell) => (
//                   <TableCell
//                     style={{ fontSize: '1.1rem' }}
//                     key={headCell.id}
//                     sortDirection={orderBy === headCell.id ? order : false}
//                   >
//                     <TableSortLabel
//                       active={orderBy === headCell.id}
//                       direction={orderBy === headCell.id ? order : 'asc'}
//                       onClick={(event) => handleRequestSort(event, headCell.id)}
//                     >
//                       {headCell.label}
//                       {orderBy === headCell.id ? (
//                         <Box component="span" sx={{ ...visuallyHidden }}>
//                           {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                         </Box>
//                       ) : null}
//                     </TableSortLabel>
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredRows.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={10} align="center">
//                     No data available
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 filteredRows
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row, index) => {
//                     const isItemSelected = isSelected(row.id);
//                     const labelId = `enhanced-table-checkbox-${index}`;

//                     return (
//                       <TableRow
//                         key={row.id}
//                         hover
//                         role="checkbox"
//                         aria-checked={isItemSelected}
//                         tabIndex={-1}
//                         selected={isItemSelected}
//                       >
//                         <TableCell padding="checkbox">
//                           <Checkbox
//                             onClick={(event) => handleClick(event, row.id)}
//                             color="primary"
//                             checked={isItemSelected}
//                             inputProps={{ 'aria-labelledby': labelId }}
//                           />
//                         </TableCell>
//                         <TableCell>{index + 1}</TableCell>
//                         <TableCell
//                           onMouseEnter={handleMouseEnter}
//                           onMouseLeave={handleMouseLeave}
//                           onClick={(e) => handleClickItem(e, row)}
//                           style={{ fontSize: '1rem', color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}
//                         >
//                           {row.regnNo}
//                         </TableCell>
//                         <TableCell>{row.firstName}</TableCell>
//                         <TableCell>{row.middleName}</TableCell>
//                         <TableCell>{row.surName}</TableCell>
//                         <TableCell>{row.membershipType}</TableCell>
//                         <TableCell>{row.stage}</TableCell>
//                         <TableCell>{row.message}</TableCell>
//                         <TableCell>
//                           <IconButton onClick={handleClick1}>
//                             <MoreVertIcon />
//                           </IconButton>
//                           <Menu
//                             anchorEl={anchorEl}
//                             open={Boolean(anchorEl)}
//                             onClose={handleClose}
//                           >
//                             <MenuItem onClick={(e) => { e.stopPropagation(); handleClose(); handleClickItem(e, row); }}>
//                               <ListItemIcon>
//                                 <VisibilityIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText primary="View" />
//                             </MenuItem>
//                             {/* <MenuItem onClick={(e) => { e.stopPropagation(); handleClose(); }}>
//                               <ListItemIcon>
//                                 <EditIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText primary="Edit" />
//                             </MenuItem>
//                             <MenuItem onClick={(e) => { e.stopPropagation(); handleClickOpenConfirm(e); }}>
//                               <ListItemIcon>
//                                 <DeleteIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText primary="Delete" />
//                             </MenuItem> */}
//                           </Menu>
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })
//               )}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={10} />
//                 </TableRow>
//               )}
//             </TableBody>

//           </Table>
//         </TableContainer>
//         <TablePagination
//           style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '10px' }}
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredRows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />






//         <Dialog
//           open={openConfirm}
//           TransitionComponent={Transition}
//           keepMounted
//           onClose={handleCloseConfirm}
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogTitle>{`Hello ${sessionStorage.getItem('username')}`}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-slide-description">
//               Are you sure you want to delete this record from the database?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button style={{ fontSize: '1rem' }} onClick={handleCloseConfirm}>Disagree</Button>
//             <Button style={{ fontSize: '1rem' }} onClick={handleCloseConfirm}>Agree</Button>
//           </DialogActions>
//         </Dialog>
//       </Paper>


//     </>
//   );
// }






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
import { Badge } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import CircularProgress from '@mui/material/CircularProgress';
import { visuallyHidden } from '@mui/utils';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AuthService from '../services/auth/auth_service';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';

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

function createData(id, regnNo, firstName, middleName, surName, membershipType, stage, message) {
  return { id, regnNo, firstName, middleName, surName, membershipType, stage, message };
}

const headCells = [
  { id: 'counter', label: '#' },
  { id: 'regnNo', label: 'regnNo' },
  { id: 'firstName', label: 'firstName' },
  { id: 'middleName', label: 'middleName' },
  { id: 'lastName', label: 'lastName' },
  { id: 'membershipType', label: 'membershipType' },
  { id: 'stage', label: 'stage' },
  { id: 'message', label: 'message' },
];

export default function IndividualsTable({ onClickItem }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1208);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage, searchQuery]);

  const fetchData = () => {
    setLoading(true);
    AuthService.getIndividual(page, rowsPerPage, searchQuery)
      .then((res) => {
        if (res && res.data && res.data.content) {
          setRows(res.data.content);
          setTotalPages(res.data.totalPages);
          console.log(res);
        } else {
          console.error("Invalid response format from API");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
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
    setPage(0);
  };

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

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const filteredRows = rows.filter(row =>
    row.regnNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleString('en-US', options);
  };



    const handleMouseEnter = (e) => {
    e.currentTarget.style.textDecoration = 'underline';
    e.currentTarget.style.color = 'blue';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.textDecoration = 'none';

    e.currentTarget.style.color = 'blue';
  };

  const handleClickItem = (e, item_data) => {
    e.stopPropagation();
    onClickItem(item_data)
  }



  const handleClick1 = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Paper>
        {/* <Toolbar className="d-flex justify-content-between mt-3 pb-2">
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
        </Toolbar> */}



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
          {/* <div className="d-flex align-items-center">
          <IconButton  onClick={() => handleLoading()} disabled={loading} color="primary" size="large" className="mx-2">
            <RefreshIcon  />
          </IconButton>
          {loading && <CircularProgress size={24} />}
          <Button disabled={loading} variant="contained" className="mx-2 btn-primary" style={{ textTransform: 'none', fontWeight: 'bold', fontSize: '18px', }}>
            Add Individual
          </Button>
        </div> */}
        </Toolbar>

        <TableContainer>
          <Table>
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
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={(event) => handleRequestSort(event, headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} align="center">
                     <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                filteredRows
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
                            onClick={(event) => handleClick(event, row.id)}
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={(e) => handleClickItem(e, row)}
                          style={{ fontSize: '1rem', color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                          {row.regnNo}
                        </TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.middleName}</TableCell>
                        <TableCell>{row.surName}</TableCell>
                        <TableCell>{row.membershipType}</TableCell>
                        <TableCell>{row.stage}</TableCell>
                        <TableCell>{row.message}</TableCell>
                        <TableCell>
                          <IconButton onClick={handleClick1}>
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={(e) => { e.stopPropagation(); handleClose(); handleClickItem(e, row); }}>
                              <ListItemIcon>
                                <VisibilityIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="View" />
                            </MenuItem>
                            {/* <MenuItem onClick={(e) => { e.stopPropagation(); handleClose(); }}>
                              <ListItemIcon>
                                <EditIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Edit" />
                            </MenuItem>
                            <MenuItem onClick={(e) => { e.stopPropagation(); handleClickOpenConfirm(e); }}>
                              <ListItemIcon>
                                <DeleteIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary="Delete" />
                            </MenuItem> */}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    );
                  })
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2000, 3000, 4000]}
          component="div"
          count={totalPages * rowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog
        open={openConfirm}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleCloseConfirm}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Hello ${sessionStorage.getItem('username')}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this record from the database?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ fontSize: '1rem' }} >Disagree</Button>
          <Button style={{ fontSize: '1rem' }}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

IndividualsTable.propTypes = {
  onClickItem: PropTypes.func.isRequired,
};
